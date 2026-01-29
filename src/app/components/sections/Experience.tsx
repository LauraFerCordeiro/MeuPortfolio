import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { 
  Calendar, 
  Award,
  Code,
  BookOpen,
  Cpu,
  Palette,
  FlaskConical,
  FileCode,
  Trophy,
  ArrowLeft,
  MapPin,
  Star,
  Sparkles,
  Flag
} from 'lucide-react';
import icon1 from '../../../assets/ifspBranca.png';
import icon2 from '../../../assets/uspBranca.png';

const experiences = [
  {
    id: 1,
    position: 'Tutora Bolsista SISSA',
    company: 'Instituto Federal de São Paulo (IFSP) Campus São Carlos',
    location: 'São Carlos - SP',
    period: 'Abril de 2023 - Julho de 2024',
    status: 'completed',
    color: 'from-purple-500 to-pink-600',
    glowColor: 'purple',
    icon: icon1,
    achievements: [
      { text: 'Planejamento de aulas de monitoria de programação e matemática', icon: BookOpen },
      { text: 'Acompanhamento e desenvolvimento de atividades de algoritmos', icon: Code },
      { text: 'Aplicação de provas de recuperação em matemática', icon: Award },
    ],
  },
  {
    id: 2,
    position: 'Bolsista Técnica FullStack',
    company: 'Instituto de Física de São Carlos (IFSC) - USP',
    location: 'São Carlos - SP',
    period: 'Setembro de 2024 - Atual',
    status: 'current',
    color: 'from-emerald-500 to-teal-600',
    glowColor: 'emerald',
    icon: icon2,
    achievements: [
      { text: 'Desenvolvimento de websites utilizando JavaScript e PHP', icon: FileCode },
      { text: 'Desenvolvimento de APIs utilizando React', icon: Code },
      { text: 'Web design com uso de Figma', icon: Palette },
      { text: 'Programação em embarcados como ESP32 e RaspBerry Pi em Python', icon: Cpu },
      { 
        text: 'Desenvolvimento de um equipamento médico capaz de visualizar os vasos sanguíneos e identificar vasos obstruídos de pessoas Diabéticas, impedindo uma possível amputação. Software feito com Python.',
        icon: FlaskConical,
        highlight: true
      },
      { text: 'Artigo Internacional Apresentado e Publicado', icon: Trophy, highlight: true },
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const characterXRef = useRef(0);
  const scrollBlockRef = useRef<HTMLDivElement>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initial animations only on first load
  useEffect(() => {
    // Skip animations on mobile
    if (isMobile || !containerRef.current) return;
    
    if (timelineRef.current && selectedExp === null) {
      const timeline = timelineRef.current.querySelector('.timeline-line');
      const nodes = timelineRef.current.querySelectorAll('.timeline-node-wrapper');
      const finishLine = timelineRef.current.querySelector('.finish-line');
      
      if (timeline) {
        gsap.fromTo(timeline,
          { scaleX: 0 },
          { 
            scaleX: 1, 
            duration: 2.5, 
            ease: 'power2.inOut',
            transformOrigin: 'left'
          }
        );
      }

      if (finishLine) {
        gsap.fromTo(finishLine,
          { opacity: 0, x: -50 },
          { 
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 2.3,
            ease: 'back.out(1.7)'
          }
        );
      }

      gsap.fromTo(nodes,
        { 
          scale: 0, 
          opacity: 0,
          rotation: -360
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.5,
          delay: 1.2,
          ease: 'back.out(2)',
        }
      );

      if (characterRef.current) {
        gsap.fromTo(characterRef.current,
          { x: characterXRef.current, opacity: 0, rotation: -20 },
          { 
            x: characterXRef.current,
            opacity: 1, 
            rotation: 0,
            duration: 1,
            delay: 2.5,
            ease: 'back.out(1.7)',
          }
        );
      }
    }
  }, []);

  // Animate detail card when selectedExp changes
  useEffect(() => {
    if (selectedExp && containerRef.current) {
      const detail = containerRef.current.querySelector('.detail-card');
      const timelineView = containerRef.current.querySelector('.timeline-view');
      
      if (timelineView) {
        gsap.to(timelineView, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        });
      }

      if (detail) {
        gsap.fromTo(detail,
          { 
            opacity: 0, 
            scale: 0.8,
          },
          { 
            opacity: 1, 
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: 'back.out(1.7)'
          }
        );
      }
    } else if (selectedExp === null && containerRef.current) {
      const timelineView = containerRef.current.querySelector('.timeline-view');
      if (timelineView) {
        gsap.to(timelineView, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    }
  }, [selectedExp]);

  // Block ALL scroll when card is open - ULTRA STRONG (Modified for Mobile)
  useEffect(() => {
    // Se for mobile, libera o scroll explicitamente e sai da função para não adicionar bloqueios
    if (isMobile) {
      document.body.style.overflow = '';
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      if (selectedExp) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedExp && (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageUp' || e.key === 'PageDown')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (selectedExp) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    if (selectedExp) {
      // Add to document, window, and body with capture phase
      document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
      window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
      document.body.addEventListener('wheel', handleWheel, { passive: false, capture: true });
      
      document.addEventListener('keydown', handleKeyDown, { passive: false, capture: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: false, capture: true });
      
      // Prevent scroll on body (Only on PC)
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('wheel', handleWheel, { capture: true });
      window.removeEventListener('wheel', handleWheel, { capture: true });
      document.body.removeEventListener('wheel', handleWheel, { capture: true });
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
      document.removeEventListener('touchmove', handleTouchMove, { capture: true });
      document.body.style.overflow = '';
    };
  }, [selectedExp, isMobile]); // Adicionado isMobile nas dependências

  const handleNodeClick = (expId: number, index: number) => {
    if (isMoving) return;
    
    setIsMoving(true);
    const nodeElement = document.querySelector(`[data-node-id="${expId}"]`);
    
    if (nodeElement && characterRef.current) {
      const nodeRect = nodeElement.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      
      if (containerRect) {
        // Get current X position from transform or ref
        const currentTransform = window.getComputedStyle(characterRef.current).transform;
        let currentX = characterXRef.current;
        
        if (currentTransform && currentTransform !== 'none') {
          const matrix = new DOMMatrix(currentTransform);
          currentX = matrix.m41;
        }
        
        const targetX = nodeRect.left - containerRect.left - 40;
        const distance = Math.abs(targetX - currentX);
        
        // Update ref with new position
        characterXRef.current = targetX;
        
        // Animate character walking from current position to target
        gsap.to(characterRef.current, {
          x: targetX,
          duration: Math.max(0.8, distance / 400), // Consistent speed
          ease: 'power2.inOut',
          onUpdate: function() {
            // Walking animation with wobble effect (same as initial)
            const progress = this.progress();
            const wobble = Math.sin(progress * 20) * 3;
            if (characterRef.current) {
              const currentPos = currentX + ((targetX - currentX) * progress);
              characterRef.current.style.transform = `translateX(${currentPos}px) translateY(${wobble}px)`;
            }
          },
          onComplete: () => {
            // Character celebration animation
            if (characterRef.current) {
              gsap.to(characterRef.current, {
                y: -20,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                ease: 'power2.out',
                onComplete: () => {
                  setSelectedExp(expId);
                  setIsMoving(false);
                }
              });
            }
          }
        });
      }
    }
  };

  const handleFinishLineClick = () => {
    if (isMoving) return;
    
    setIsMoving(true);
    const finishLineElement = document.querySelector('.finish-line');
    
    if (finishLineElement && characterRef.current) {
      const finishRect = finishLineElement.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      
      if (containerRect) {
        // Get current X position
        const currentTransform = window.getComputedStyle(characterRef.current).transform;
        let currentX = characterXRef.current;
        
        if (currentTransform && currentTransform !== 'none') {
          const matrix = new DOMMatrix(currentTransform);
          currentX = matrix.m41;
        }
        
        const targetX = finishRect.left - containerRect.left - 40;
        const distance = Math.abs(targetX - currentX);
        
        // Update ref
        characterXRef.current = targetX;
        
        // Animate character to finish line (same walking style)
        gsap.to(characterRef.current, {
          x: targetX,
          duration: Math.max(0.8, distance / 400),
          ease: 'power2.inOut',
          onUpdate: function() {
            const progress = this.progress();
            const wobble = Math.sin(progress * 20) * 3;
            if (characterRef.current) {
              const currentPos = currentX + ((targetX - currentX) * progress);
              characterRef.current.style.transform = `translateX(${currentPos}px) translateY(${wobble}px)`;
            }
          },
          onComplete: () => {
            // Victory animation - character crosses the finish line
            if (characterRef.current) {
              // Quick celebration
              gsap.to(characterRef.current, {
                rotation: 360,
                scale: 1.2,
                y: -15,
                duration: 0.5,
                ease: 'back.out(1.5)',
                onComplete: () => {
                  // Character runs off screen to the right (crossing finish line)
                  gsap.to(characterRef.current, {
                    x: '+=200',
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.in',
                    onComplete: () => {
                      // Trigger navigation to next section after character exits
                      setTimeout(() => {
                        // Temporarily allow scroll to pass through
                        setIsMoving(false);
                        
                        // Dispatch wheel event that will be processed by MainSite
                        const wheelEvent = new WheelEvent('wheel', { 
                          deltaY: 100,
                          bubbles: true,
                          cancelable: true,
                          view: window
                        });
                        document.dispatchEvent(wheelEvent);
                      }, 200);
                    }
                  });
                }
              });
            }
          }
        });
      }
    }
  };

  const handleBack = () => {
    const detail = containerRef.current?.querySelector('.detail-card');
    if (detail) {
      gsap.to(detail, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setSelectedExp(null);
        }
      });
    }
  };

  const selectedExperience = experiences.find(exp => exp.id === selectedExp);

  return (
    <section className="w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden">
      {/* Scroll blocker overlay when card is open - ONLY IF NOT MOBILE */}
      {selectedExp && !isMobile && (
        <div 
          ref={scrollBlockRef}
          className="fixed inset-0 z-50 pointer-events-none"
          style={{ touchAction: 'none' }}
        />
      )}

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-6xl w-full relative z-10" ref={containerRef}>
        {/* Title */}
        <div className={`text-center transition-all duration-500 ${selectedExp ? 'mb-2 md:mb-6' : 'mb-12'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experiência Profissional
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg flex items-center justify-center gap-2">
            {!selectedExp && (
              <>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                Clique nos pontos para explorar minha jornada
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              </>
            )}
          </p>
        </div>

        {/* Timeline View */}
        <div 
          ref={timelineRef} 
          className={`timeline-view relative flex items-center justify-center py-20 ${selectedExp ? 'hidden' : ''}`}
        >
          {/* Horizontal timeline line */}
          <div className="absolute left-0 right-0 flex items-center">
            <div className="timeline-line flex-1 h-1 md:h-2 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 rounded-l-full origin-left">
              {/* Animated glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 rounded-l-full blur-xl opacity-50 animate-pulse" />
            </div>
            
            {/* Finish Line at the end - CLICKABLE */}
            <div 
              className="finish-line flex flex-col items-center ml-4 opacity-0 cursor-pointer group z-20"
              onClick={handleFinishLineClick}
              style={{ pointerEvents: isMoving ? 'none' : 'auto' }}
            >
              <div className="relative">
                {/* Checkered flag */}
                <div className="w-12 h-16 md:w-20 md:h-28 relative transition-transform duration-300 group-hover:scale-110">
                  {/* Flag pole */}
                  <div className="absolute left-0 top-0 w-1.5 md:w-2 h-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-full" />
                  
                  {/* Flag */}
                  <div className="absolute left-1.5 md:left-2 top-2 md:top-4 w-10 h-9 md:w-16 md:h-14 grid grid-cols-4 grid-rows-3 overflow-hidden rounded-r-lg shadow-2xl animate-wave">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          (i % 2 === 0 && Math.floor(i / 4) % 2 === 0) ||
                          (i % 2 === 1 && Math.floor(i / 4) % 2 === 1)
                            ? 'bg-white'
                            : 'bg-gray-900'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Glow */}
                  <div className="absolute left-1.5 md:left-2 top-2 md:top-4 w-10 h-9 md:w-16 md:h-14 bg-yellow-400 blur-xl opacity-50 animate-pulse group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Flag icon */}
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Flag className="w-3 h-3 md:w-5 md:h-5 text-white" />
                </div>
              </div>

              <p className="text-yellow-400 font-bold text-[10px] md:text-xs mt-2 animate-pulse group-hover:text-yellow-300 transition-colors">
                Chegada!
              </p>
            </div>
          </div>

          {/* Character - Cute pixel-style coder */}
          <div 
            ref={characterRef}
            className="character absolute left-0 bottom-2 z-30 opacity-0 pointer-events-none"
            style={{ width: '80px', height: '80px' }}
          >
            <div className="relative w-full h-full">
              {/* Character body - cute robot/coder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-2xl">
                  {/* Shadow */}
                  <ellipse cx="40" cy="72" rx="20" ry="4" fill="rgba(0,0,0,0.3)" />
                  
                  {/* Body */}
                  <rect x="25" y="35" width="30" height="30" rx="4" fill="#8b5cf6" />
                  <rect x="27" y="37" width="26" height="26" rx="3" fill="#a78bfa" />
                  
                  {/* Head */}
                  <rect x="28" y="15" width="24" height="24" rx="6" fill="#ec4899" />
                  <rect x="30" y="17" width="20" height="20" rx="5" fill="#f472b6" />
                  
                  {/* Eyes */}
                  <circle cx="35" cy="25" r="3" fill="#1f2937" />
                  <circle cx="45" cy="25" r="3" fill="#1f2937" />
                  <circle cx="36" cy="24" r="1.5" fill="white" />
                  <circle cx="46" cy="24" r="1.5" fill="white" />
                  
                  {/* Smile */}
                  <path d="M 35 30 Q 40 33 45 30" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />
                  
                  {/* Antenna */}
                  <line x1="40" y1="15" x2="40" y2="8" stroke="#ec4899" strokeWidth="2" />
                  <circle cx="40" cy="6" r="3" fill="#fbbf24" />
                  <circle cx="40" cy="6" r="3" fill="#fbbf24" opacity="0.5" className="animate-ping" />
                  
                  {/* Arms */}
                  <rect x="18" y="40" width="6" height="18" rx="3" fill="#8b5cf6" />
                  <rect x="56" y="40" width="6" height="18" rx="3" fill="#8b5cf6" />
                  
                  {/* Legs */}
                  <rect x="28" y="63" width="8" height="10" rx="2" fill="#6366f1" />
                  <rect x="44" y="63" width="8" height="10" rx="2" fill="#6366f1" />
                  
                  {/* Code symbol on body */}
                  <text x="40" y="52" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">{'</>'}</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Timeline nodes */}
          <div className="relative w-full flex justify-around items-center px-4 md:px-8 pr-16 md:pr-32">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="timeline-node-wrapper flex flex-col items-center"
                data-node-id={exp.id}
              >
                {/* Node */}
                <div
                  className={`relative cursor-pointer transition-all duration-300 ${
                    hoveredNode === exp.id ? 'scale-125' : 'scale-100'
                  } ${isMoving ? 'pointer-events-none' : ''}`}
                  onClick={() => handleNodeClick(exp.id, index)}
                  onMouseEnter={() => setHoveredNode(exp.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Outer ring */}
                  <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${exp.color} p-1 shadow-2xl`}>
                    {/* Inner circle with image */}
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden group">
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                      
                      {/* Icon Image */}
                      <img 
                        src={exp.icon} 
                        alt={exp.position}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />

                      {/* Status indicator */}
                      {exp.status === 'current' && (
                        <div className="absolute top-1 right-1 md:top-2 md:right-2 w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-pulse z-20">
                          <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-full blur-2xl opacity-60 ${
                    hoveredNode === exp.id ? 'animate-pulse' : ''
                  }`} />
                </div>

                {/* Label - Position name */}
                <div className={`mt-4 md:mt-8 text-center transition-all duration-300 ${
                  hoveredNode === exp.id ? 'transform scale-110' : ''
                }`}>
                  <p className="text-white font-bold text-xs md:text-sm mb-1 max-w-[140px] md:max-w-[180px]">
                    {exp.position}
                  </p>
                  <p className="text-gray-400 text-[10px] md:text-xs">{exp.period.split(' - ')[0]}</p>
                  {exp.status === 'current' && (
                    <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 md:px-3 md:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-[10px] md:text-xs font-semibold">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full animate-pulse" />
                      Atual
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail View */}
        {selectedExperience && (
          <div className="detail-card relative opacity-0 z-[60]">
            {/* Back button - LARGER */}
            <button
              onClick={handleBack}
              className="group flex items-center gap-3 mb-6 px-6 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border-2 border-purple-500/50 hover:border-purple-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              <ArrowLeft className="w-6 h-6 text-purple-300 group-hover:-translate-x-2 transition-transform duration-300" />
              <span className="text-white font-bold text-lg">Voltar à Linha do Tempo</span>
            </button>

            {/* Experience detail card - COMPACT VERSION */}
            <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-6 overflow-hidden shadow-2xl`}>
              {/* Gradient overlay - REDUCED OPACITY for Tutora Bolsista */}
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedExperience.color} ${selectedExperience.id === 2 ? 'opacity-5' : 'opacity-10'}`} />
              
              {/* Floating decoration */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header - Compact */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedExperience.color} flex items-center justify-center shadow-lg p-1`}>
                      <img 
                        src={selectedExperience.icon} 
                        alt={selectedExperience.position}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* REDUCED GLOW for Tutora Bolsista */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedExperience.color} rounded-2xl blur-xl ${selectedExperience.id === 2 ? 'opacity-30' : 'opacity-60'} animate-pulse`} />
                  </div>
                  
                  <div className="flex-1">
                    {/* Status badge */}
                    {selectedExperience.status === 'current' ? (
                      <span className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-xs font-semibold">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Atual
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-semibold">
                        <Star className="w-4 h-4" />
                        Concluído
                      </span>
                    )}

                    <h3 className="text-xl md:text-2xl font-black text-white mb-1 leading-tight">
                      {selectedExperience.position}
                    </h3>
                    <p className={`text-base font-semibold mb-2 bg-gradient-to-r ${selectedExperience.color} bg-clip-text text-transparent`}>
                      {selectedExperience.company}
                    </p>
                    
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-3 text-gray-400 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{selectedExperience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{selectedExperience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements - Compact */}
                <div>
                  <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    Principais Atividades e Conquistas
                  </h4>
                  <div className="space-y-2">
                    {selectedExperience.achievements.map((achievement, idx) => {
                      const AchIcon = achievement.icon;
                      return (
                        <div
                          key={idx}
                          className={`group/item flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                            achievement.highlight
                              ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/40'
                              : 'bg-white/5 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            achievement.highlight
                              ? 'bg-gradient-to-br from-yellow-500 to-orange-600'
                              : 'bg-gradient-to-br from-purple-500 to-pink-600'
                          } group-hover/item:scale-110 transition-transform duration-300`}>
                            <AchIcon className="w-4 h-4 text-white" />
                          </div>
                          
                          {/* AQUI: Mantido text-left para ficar alinhado ao começo */}
                          <p className={`text-sm md:text-base text-left leading-relaxed flex-1 ${
                            achievement.highlight
                              ? 'text-yellow-50 font-semibold'
                              : 'text-gray-300'
                          }`}>
                            {achievement.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-30 pointer-events-none rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full animate-shine" />
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shine {
          from {
            transform: translateX(-100%) skewX(-12deg);
          }
          to {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shine {
          animation: shine 3s infinite;
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        .animate-wave {
          transform-origin: left center;
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}