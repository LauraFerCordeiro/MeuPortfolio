import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

interface IntroPageProps {
  onEnter: () => void;
}

export default function IntroPage({ onEnter }: IntroPageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create interactive particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 8000;
    const posArray = new Float32Array(particlesCount * 3);
    const originalPos = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      const value = (Math.random() - 0.5) * 15;
      posArray[i] = value;
      originalPos[i] = value;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: '#8b5cf6',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Add central sphere with wireframe
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: '#ec4899',
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Add torus
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.1, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: '#8b5cf6',
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    camera.position.z = 5;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles slowly
      particlesMesh.rotation.y = elapsedTime * 0.05;

      // Interactive particle displacement
      const positions = particlesMesh.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        // Wave effect
        const wave = Math.sin(elapsedTime + originalPos[i3]) * 0.1;
        positions[i3 + 1] = originalPos[i3 + 1] + wave;
        
        // Mouse influence
        const distanceX = positions[i3] / 5 - mouseRef.current.x * 2;
        const distanceY = positions[i3 + 1] / 5 - mouseRef.current.y * 2;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (distance < 1) {
          const force = (1 - distance) * 0.3;
          positions[i3] += distanceX * force;
          positions[i3 + 1] += distanceY * force;
        }
      }
      
      particlesMesh.geometry.attributes.position.needsUpdate = true;

      // Animate sphere
      sphere.rotation.x = elapsedTime * 0.3;
      sphere.rotation.y = elapsedTime * 0.5;
      sphere.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.1);

      // Animate torus
      torus.rotation.x = elapsedTime * 0.2;
      torus.rotation.y = elapsedTime * 0.3;

      // Camera follows mouse slightly
      camera.position.x += (mouseRef.current.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // GSAP animations - Split text effect
    const title = document.querySelector('.intro-title');
    if (title) {
      const letters = title.textContent?.split('');
      title.innerHTML = '';
      
      // MODIFICAÇÃO AQUI: Lógica alterada para garantir quebra de linha no mobile
      letters?.forEach((letter) => {
        if (letter === ' ') {
          // Se for espaço: Adiciona <br> visível só no mobile
          const br = document.createElement('br');
          br.className = 'block md:hidden';
          title.appendChild(br);

          // E mantém o espaço normal (visível só no desktop)
          const span = document.createElement('span');
          span.innerHTML = '&nbsp;';
          span.style.display = 'inline-block';
          span.className = 'hidden md:inline-block'; 
          title.appendChild(span);
        } else {
          // Letras normais
          const span = document.createElement('span');
          span.textContent = letter;
          span.style.display = 'inline-block';
          title.appendChild(span);
        }
      });

      gsap.from(title.children, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        stagger: 0.05,
        duration: 1,
        ease: 'back.out(1.7)',
      });
    }

    gsap.from('.intro-subtitle', {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 1,
      ease: 'elastic.out(1, 0.5)',
    });

    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out',
      });

      // Floating animation for button
      gsap.to(buttonRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      });
    }

    // Window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Scroll to enter functionality
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) { // Scrolling down
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = window.setTimeout(() => {
          handleEnter();
        }, 100);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
    };
  }, []);

  const handleEnter = () => {
    // Explode particles effect
    if (sceneRef.current) {
      const particles = sceneRef.current.children.find(
        (child) => child instanceof THREE.Points
      ) as THREE.Points;
      
      if (particles) {
        const positions = particles.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < positions.length; i += 3) {
          gsap.to(positions, {
            [i]: positions[i] * 3,
            [i + 1]: positions[i + 1] * 3,
            [i + 2]: positions[i + 2] * 3,
            duration: 1,
            ease: 'power2.in',
          });
        }
      }
    }

    // Animate out
    gsap.to('.intro-content', {
      opacity: 0,
      scale: 1.5,
      duration: 1,
      ease: 'power2.in',
    });

    gsap.to(canvasRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.in',
      onComplete: onEnter,
    });
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      <div className="intro-content absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
        {/* MODIFICAÇÃO: Ajustado text-5xl para text-4xl no mobile para evitar quebra interna da palavra CORDEIRO */}
        <h1 className="intro-title text-4xl sm:text-5xl md:text-8xl font-bold mb-6 tracking-wider text-center">
          LAURA CORDEIRO
        </h1>
        <p className="intro-subtitle text-xl md:text-3xl mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">
          Frontend Developer
        </p>
        <button
          ref={buttonRef}
          onClick={handleEnter}
          className="group relative px-10 py-5 text-lg font-bold border-2 border-white rounded-full overflow-hidden transition-all duration-300 hover:border-purple-500 hover:scale-110 cursor-pointer"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            Entrar no Portfólio →
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
        
        <p className="absolute bottom-10 text-sm text-gray-500 animate-pulse">
          Mova o mouse para interagir • Role para baixo para entrar
        </p>
      </div>
    </div>
  );
}