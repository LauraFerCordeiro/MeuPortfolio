import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import About from '@/app/components/sections/About';
import Technologies from '@/app/components/sections/Technologies';
import SoftSkills from '@/app/components/sections/SoftSkills';
import Education from '@/app/components/sections/Education';
import Experience from '@/app/components/sections/Experience';
import Awards from '@/app/components/sections/Awards';
import Portfolio from '@/app/components/sections/Portfolio';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function MainSite() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);

  const sections = [
    { component: About, name: 'Sobre', color: '#8b5cf6' },
    { component: Technologies, name: 'Tecnologias', color: '#6366f1' },
    { component: SoftSkills, name: 'Soft Skills', color: '#a855f7' },
    { component: Education, name: 'Formação', color: '#f97316' },
    { component: Experience, name: 'Experiência', color: '#14b8a6' },
    { component: Awards, name: 'Premiações', color: '#eab308' },
    { component: Portfolio, name: 'Portfólio', color: '#06b6d4' },
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create different geometries for each section
    const geometries = [
      new THREE.IcosahedronGeometry(1.5, 1),
      new THREE.TorusKnotGeometry(0.8, 0.3, 100, 16),
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1.5, 0),
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.ConeGeometry(1, 2, 8),
      new THREE.TorusGeometry(1, 0.4, 16, 100),
    ];

    // Create meshes for each section
    geometries.forEach((geometry, index) => {
      // Create wireframe using LineSegments for better color control
      const edges = new THREE.EdgesGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color(sections[index].color),
        transparent: true,
        opacity: 0.3,
      });
      const wireframe = new THREE.LineSegments(edges, lineMaterial);
      wireframe.position.z = -index * 15; // Stack them in depth
      scene.add(wireframe);
      meshesRef.current.push(wireframe as any);
      
      // Add a subtle filled mesh for depth
      const fillMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(sections[index].color),
        transparent: true,
        opacity: 0.05,
        side: THREE.DoubleSide,
      });
      const fillMesh = new THREE.Mesh(geometry, fillMaterial);
      fillMesh.position.z = -index * 15;
      scene.add(fillMesh);
    });

    // Particles that change per section
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: sections[0].color,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 8;

    // Mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.03;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      // Animate meshes
      meshesRef.current.forEach((mesh, index) => {
        mesh.rotation.x = elapsedTime * 0.2 * (index % 2 === 0 ? 1 : -1);
        mesh.rotation.y = elapsedTime * 0.3 * (index % 2 === 0 ? 1 : -1);

        // Pulse effect
        const scale = 1 + Math.sin(elapsedTime * 2 + index) * 0.1;
        mesh.scale.setScalar(scale);
      });

      // Camera follows mouse
      camera.position.x += (mouseRef.current.x * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, camera.position.z - 8);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometries.forEach(g => g.dispose());
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  // Navigate between sections
  const navigateToSection = (direction: 'next' | 'prev', targetIndex?: number) => {
    if (isTransitioning) return;

    const newSection = targetIndex !== undefined 
      ? targetIndex 
      : direction === 'next' 
        ? Math.min(currentSection + 1, sections.length - 1)
        : Math.max(currentSection - 1, 0);

    if (newSection === currentSection) return;

    setIsTransitioning(true);

    // Fade out 3D meshes immediately
    if (meshesRef.current.length > 0) {
      meshesRef.current.forEach((mesh) => {
        if (mesh.material instanceof THREE.MeshNormalMaterial) {
          gsap.to(mesh.material, {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut',
          });
        }
      });
    }

    // Animate camera movement
    if (cameraRef.current) {
      gsap.to(cameraRef.current.position, {
        z: 8 - newSection * 15,
        duration: 1.5,
        ease: 'power2.inOut',
      });
    }

    // Change particle color
    if (sceneRef.current) {
      const particles = sceneRef.current.children.find(
        child => child instanceof THREE.Points
      ) as THREE.Points;

      if (particles && particles.material instanceof THREE.PointsMaterial) {
        gsap.to(particles.material.color, {
          r: parseInt(sections[newSection].color.slice(1, 3), 16) / 255,
          g: parseInt(sections[newSection].color.slice(3, 5), 16) / 255,
          b: parseInt(sections[newSection].color.slice(5, 7), 16) / 255,
          duration: 1,
        });
      }
    }

    // Fade out current, fade in new
    gsap.to('.section-container', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentSection(newSection);
        gsap.fromTo('.section-container',
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
              // Fade meshes back in after transition
              if (meshesRef.current.length > 0) {
                meshesRef.current.forEach((mesh) => {
                  if (mesh.material instanceof THREE.MeshNormalMaterial) {
                    gsap.to(mesh.material, {
                      opacity: 0.15,
                      duration: 0.6,
                      ease: 'power2.inOut',
                    });
                  }
                });
              }
              setIsTransitioning(false);
            }
          }
        );
      },
    });
  };

  // Wheel navigation - ONLY FOR DESKTOP
  useEffect(() => {
    if (isMobile) return; // Disable on mobile
    
    let wheelTimeout: number | null = null;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (wheelTimeout) {
        clearTimeout(wheelTimeout);
      }

      wheelTimeout = window.setTimeout(() => {
        if (e.deltaY > 0) {
          navigateToSection('next');
        } else if (e.deltaY < 0) {
          navigateToSection('prev');
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [currentSection, isTransitioning, isMobile]);

  const CurrentSectionComponent = sections[currentSection].component;

  // MOBILE VERSION - Normal scroll
  if (isMobile) {
    return (
      <div className="relative w-full min-h-screen bg-black overflow-y-auto">
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0"
        />

        {/* All sections stacked vertically */}
        <div className="relative z-10">
          {sections.map((section, index) => {
            const SectionComponent = section.component;
            return (
              <div key={section.name} className="min-h-screen w-full">
                <SectionComponent />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // DESKTOP VERSION - Room navigation
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Section content */}
      <div className="section-container fixed inset-0 z-10 flex items-center justify-center">
        {currentSection === 0 ? (
          <About onNavigate={(index) => navigateToSection('next', index)} />
        ) : (
          <CurrentSectionComponent />
        )}
      </div>

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section.name}
            onClick={() => {
              if (!isTransitioning && index !== currentSection) {
                navigateToSection('next', index);
              }
            }}
            className="group relative"
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentSection === index
                  ? 'border-white bg-white scale-125'
                  : 'border-white/50 hover:border-white hover:scale-110'
              }`}
              style={{
                backgroundColor: currentSection === index ? section.color : 'transparent',
                borderColor: currentSection === index ? section.color : undefined,
              }}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.name}
            </span>
          </button>
        ))}
      </div>

      {/* Navigation arrows */}
      {currentSection > 0 && (
        <button
          onClick={() => navigateToSection('prev')}
          disabled={isTransitioning}
          className="fixed top-1/2 left-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:scale-110 transition-all disabled:opacity-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {currentSection < sections.length - 1 && (
        <button
          onClick={() => navigateToSection('next')}
          disabled={isTransitioning}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:scale-110 transition-all disabled:opacity-50 animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      )}

      {/* Section indicator */}
      <div className="fixed top-8 left-8 z-20 text-white">
        <div className="text-sm text-white/50 mb-1">
          {String(currentSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
        </div>
        <h3 className="text-2xl font-bold" style={{ color: sections[currentSection].color }}>
          {sections[currentSection].name}
        </h3>
      </div>
    </div>
  );
}