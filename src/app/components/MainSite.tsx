import { useEffect, useRef, useState, useCallback } from 'react';
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
  // Trava o swipe/wheel quando um card filho (ex: Experience) está aberto
  const isChildScrollLocked = useRef(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);

  // Mobile swipe tracking
  const touchStartYRef = useRef(0);
  const touchStartXRef = useRef(0);
  const touchStartTimeRef = useRef(0);
  const isSwipingRef = useRef(false);

  const sections = [
    { component: About, name: 'Sobre', color: '#8b5cf6' },
    { component: Technologies, name: 'Tecnologias', color: '#6366f1' },
    { component: SoftSkills, name: 'Soft Skills', color: '#a855f7' },
    { component: Education, name: 'Formação', color: '#f97316' },
    { component: Experience, name: 'Experiência', color: '#14b8a6' },
    { component: Awards, name: 'Premiações', color: '#eab308' },
    { component: Portfolio, name: 'Portfólio', color: '#06b6d4' },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.style.overflowX = 'hidden';
    body.style.overflowX = 'hidden';
    return () => {
      html.style.overflowX = '';
      body.style.overflowX = '';
    };
  }, []);

  // Escuta o evento do Experience (e outros filhos) para travar/liberar swipe
  useEffect(() => {
    const handleLock = (e: Event) => {
      isChildScrollLocked.current = (e as CustomEvent).detail.locked;
    };
    window.addEventListener('experience-card-lock', handleLock);
    return () => window.removeEventListener('experience-card-lock', handleLock);
  }, []);

  // Three.js setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometries = [
      new THREE.IcosahedronGeometry(1.5, 1),
      new THREE.TorusKnotGeometry(0.8, 0.3, 100, 16),
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1.5, 0),
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.ConeGeometry(1, 2, 8),
      new THREE.TorusGeometry(1, 0.4, 16, 100),
    ];

    const sectionsLocal = [
      { color: '#8b5cf6' }, { color: '#6366f1' }, { color: '#a855f7' },
      { color: '#f97316' }, { color: '#14b8a6' }, { color: '#eab308' }, { color: '#06b6d4' },
    ];

    geometries.forEach((geometry, index) => {
      const edges = new THREE.EdgesGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color(sectionsLocal[index].color),
        transparent: true,
        opacity: 0.3,
      });
      const wireframe = new THREE.LineSegments(edges, lineMaterial);
      wireframe.position.z = -index * 15;
      scene.add(wireframe);
      meshesRef.current.push(wireframe as any);

      const fillMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(sectionsLocal[index].color),
        transparent: true,
        opacity: 0.05,
        side: THREE.DoubleSide,
      });
      const fillMesh = new THREE.Mesh(geometry, fillMaterial);
      fillMesh.position.z = -index * 15;
      scene.add(fillMesh);
    });

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: sectionsLocal[0].color,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 8;

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      particlesMesh.rotation.y = elapsedTime * 0.03;
      particlesMesh.rotation.x = elapsedTime * 0.02;
      meshesRef.current.forEach((mesh, index) => {
        mesh.rotation.x = elapsedTime * 0.2 * (index % 2 === 0 ? 1 : -1);
        mesh.rotation.y = elapsedTime * 0.3 * (index % 2 === 0 ? 1 : -1);
        const scale = 1 + Math.sin(elapsedTime * 2 + index) * 0.1;
        mesh.scale.setScalar(scale);
      });
      camera.position.x += (mouseRef.current.x * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, camera.position.z - 8);
      renderer.render(scene, camera);
    };
    animate();

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

  const navigateToSection = useCallback((direction: 'next' | 'prev', targetIndex?: number) => {
    if (isTransitioning) return;

    const newSection = targetIndex !== undefined
      ? targetIndex
      : direction === 'next'
        ? Math.min(currentSection + 1, sections.length - 1)
        : Math.max(currentSection - 1, 0);

    if (newSection === currentSection) return;

    setIsTransitioning(true);

    if (cameraRef.current) {
      gsap.to(cameraRef.current.position, {
        z: 8 - newSection * 15,
        duration: 1.5,
        ease: 'power2.inOut',
      });
    }

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

    gsap.to('.section-container', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentSection(newSection);
        const container = document.querySelector('.mobile-section-scroll') as HTMLElement;
        if (container) container.scrollTop = 0;

        gsap.fromTo('.section-container',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => setIsTransitioning(false),
          }
        );
      },
    });
  }, [currentSection, isTransitioning]);

  // Desktop wheel navigation
  useEffect(() => {
    if (isMobile) return;

    let wheelTimeout: number | null = null;

    const handleWheel = (e: WheelEvent) => {
      // Bloqueia se um card filho estiver aberto
      if (isChildScrollLocked.current) return;

      const scrollableChild = (e.target as HTMLElement)?.closest('[data-scrollable]') as HTMLElement | null;
      if (scrollableChild) {
        const atTop    = scrollableChild.scrollTop <= 0 && e.deltaY < 0;
        const atBottom = scrollableChild.scrollTop + scrollableChild.clientHeight >= scrollableChild.scrollHeight - 1 && e.deltaY > 0;
        if (!atTop && !atBottom) return;
      }

      e.preventDefault();
      if (wheelTimeout) clearTimeout(wheelTimeout);
      wheelTimeout = window.setTimeout(() => {
        if (e.deltaY > 0) navigateToSection('next');
        else if (e.deltaY < 0) navigateToSection('prev');
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [isMobile, navigateToSection]);

  // Mobile: listen for programmatic wheel events fired by child sections
  useEffect(() => {
    if (!isMobile) return;

    const handleProgrammaticWheel = (e: WheelEvent) => {
      if (isChildScrollLocked.current) return;
      if (e.deltaY >= 100) navigateToSection('next');
    };

    window.addEventListener('wheel', handleProgrammaticWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleProgrammaticWheel);
  }, [isMobile, navigateToSection]);

  // Mobile touch handlers
  const handleMobileTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartTimeRef.current = Date.now();
    isSwipingRef.current = true;
  }, []);

  const handleMobileTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!isSwipingRef.current || isTransitioning) return;
    isSwipingRef.current = false;

    // Bloqueia navegação enquanto card filho estiver aberto
    if (isChildScrollLocked.current) return;

    const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
    const deltaX = Math.abs(touchStartXRef.current - e.changedTouches[0].clientX);
    const elapsed = Date.now() - touchStartTimeRef.current;

    if (Math.abs(deltaY) <= deltaX) return;
    const threshold = elapsed < 400 ? 40 : 80;
    if (Math.abs(deltaY) < threshold) return;

    const scrollableChild = (e.target as HTMLElement)?.closest('[data-scrollable]') as HTMLElement | null;
    
    if (scrollableChild) {
      const atTop = scrollableChild.scrollTop <= 2;
      const atBottom = scrollableChild.scrollTop + scrollableChild.clientHeight >= scrollableChild.scrollHeight - 2;
      if (deltaY > 0 && !atBottom) return; 
      if (deltaY < 0 && !atTop) return;
    }

    const scrollEl = document.querySelector('.mobile-section-scroll') as HTMLElement;
    if (scrollEl && !scrollableChild) {
      const atTop = scrollEl.scrollTop <= 2;
      const atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 2;
      if (deltaY > 0 && !atBottom) return;
      if (deltaY < 0 && !atTop) return;
    }

    if (deltaY > 0) navigateToSection('next');
    else navigateToSection('prev');
  }, [isTransitioning, navigateToSection]);

  const CurrentSectionComponent = sections[currentSection].component;

  // ── DESKTOP ──
  if (!isMobile) {
    return (
      <div className="relative w-full h-screen bg-black" style={{ overflow: 'hidden' }}>
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

        <div className="section-container fixed inset-0 z-10 flex items-center justify-center" style={{ overflow: 'hidden' }}>
          {currentSection === 0
            ? <About onNavigate={(index) => navigateToSection('next', index)} />
            : <CurrentSectionComponent />
          }
        </div>

        {/* Navigation dots */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {sections.map((section, index) => (
            <button
              key={section.name}
              onClick={() => { if (!isTransitioning && index !== currentSection) navigateToSection('next', index); }}
              className="group relative"
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  currentSection === index ? 'border-white bg-white scale-125' : 'border-white/50 hover:border-white hover:scale-110'
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

  // ── MOBILE ──
  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden"
      onTouchStart={handleMobileTouchStart}
      onTouchEnd={handleMobileTouchEnd}
    >
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      <div className="section-container mobile-section-scroll fixed inset-0 z-10 overflow-y-auto overflow-x-hidden">
        <div className="min-h-screen w-full">
          {currentSection === 0
            ? <About onNavigate={(index) => navigateToSection('next', index)} />
            : <CurrentSectionComponent />
          }
        </div>
      </div>

      <div className="fixed top-4 left-4 z-30 pointer-events-none">
        <div className="text-xs font-semibold text-white/50 tracking-widest">
          {String(currentSection + 1).padStart(2, '0')}
          <span className="text-white/25"> / {String(sections.length).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
        {sections.map((section, index) => (
          <button
            key={section.name}
            onClick={() => { if (!isTransitioning && index !== currentSection) navigateToSection('next', index); }}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: currentSection === index ? section.color : 'rgba(255,255,255,0.2)',
              transform: currentSection === index ? 'scale(1.5)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {currentSection > 0 && (
        <button
          onClick={() => navigateToSection('prev')}
          disabled={isTransitioning}
          className="fixed top-4 right-4 z-30 w-8 h-8 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/60 active:scale-90 transition-all disabled:opacity-30"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

      {currentSection < sections.length - 1 && (
        <div
          className="fixed bottom-5 z-30 pointer-events-none"
          style={{ left: 0, right: 0, display: 'flex', justifyContent: 'center' }}
        >
          <button
            onClick={() => navigateToSection('next')}
            disabled={isTransitioning}
            className="w-10 h-10 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/60 active:scale-90 transition-all disabled:opacity-30 pointer-events-auto down-arrow-btn"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      )}

      {currentSection === 0 && (
        <div
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 pointer-events-none"
          style={{ animation: 'hintFadeOut 4s ease-in-out forwards' }}
        >
          <span className="text-white/25 text-[9px] tracking-[0.2em] uppercase">deslize para navegar</span>
          <div style={{ animation: 'arrowBounce 1.2s ease-in-out infinite' }}>
            <ChevronDown className="w-3 h-3 text-white/25" />
          </div>
        </div>
      )}

      <style>{`
        @keyframes mobilePulse {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
        .down-arrow-btn { animation: mobilePulse 2s ease-in-out infinite; }
        @keyframes hintFadeOut {
          0%, 60% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </div>
  );
}