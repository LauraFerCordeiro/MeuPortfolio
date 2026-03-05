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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ─── Avisa o MainSite para travar/liberar swipe quando o card abre/fecha ───
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('experience-card-lock', { detail: { locked: selectedExp !== null } })
    );
  }, [selectedExp]);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    if (timelineRef.current && selectedExp === null) {
      const timeline = timelineRef.current.querySelector('.timeline-line');
      const nodes = timelineRef.current.querySelectorAll('.timeline-node-wrapper');
      const finishLine = timelineRef.current.querySelector('.finish-line');

      if (timeline) {
        gsap.fromTo(timeline,
          { scaleX: 0 },
          { scaleX: 1, duration: 2.5, ease: 'power2.inOut', transformOrigin: 'left' }
        );
      }
      if (finishLine) {
        gsap.fromTo(finishLine,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, delay: 2.3, ease: 'back.out(1.7)' }
        );
      }
      gsap.fromTo(nodes,
        { scale: 0, opacity: 0, rotation: -360 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, stagger: 0.5, delay: 1.2, ease: 'back.out(2)' }
      );
      if (characterRef.current) {
        gsap.fromTo(characterRef.current,
          { x: characterXRef.current, opacity: 0, rotation: -20 },
          { x: characterXRef.current, opacity: 1, rotation: 0, duration: 1, delay: 2.5, ease: 'back.out(1.7)' }
        );
      }
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile || selectedExp !== null) return;

    const rows = document.querySelectorAll('[data-mobile-node]');
    gsap.fromTo(rows,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.15, delay: 0.2, ease: 'power3.out' }
    );
    const finish = document.querySelector('.mobile-finish');
    if (finish) {
      gsap.fromTo(finish,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.2 + experiences.length * 0.15, ease: 'power3.out' }
      );
    }
    const charEl = mobileCharacterRef.current;
    if (charEl) {
      mobileCharacterYRef.current = 0;
      charEl.style.transform = 'translateY(0px)';
      gsap.fromTo(charEl,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.15, ease: 'back.out(1.7)' }
      );
    }
  }, [isMobile, selectedExp]);

  useEffect(() => {
    if (selectedExp) {
      setTimeout(() => {
        const detail = document.querySelector('.detail-card') as HTMLElement;
        if (detail) {
          gsap.fromTo(detail,
            { opacity: 0, scale: 0.9, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.5)' }
          );
        }
      }, 50);

      if (!isMobile) {
        const timelineView = document.querySelector('.timeline-view') as HTMLElement;
        if (timelineView) gsap.to(timelineView, { opacity: 0, duration: 0.3, ease: 'power2.in' });
      }
    } else if (!isMobile) {
      const timelineView = document.querySelector('.timeline-view') as HTMLElement;
      if (timelineView) gsap.to(timelineView, { opacity: 1, duration: 0.5, ease: 'power2.out' });
    }
  }, [selectedExp, isMobile]);

  // ─── Bloqueio de wheel/touch/key para desktop quando card aberto ───
  // (mantido como camada extra de segurança para scroll-jacking por JS)
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      if (!selectedExp) return;
      const target = e.target as HTMLElement;
      if (target.closest('.detail-card')) return;
      e.preventDefault();
      e.stopPropagation();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedExp) return;
      if (['ArrowUp', 'ArrowDown', ' ', 'PageUp', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!selectedExp) return;
      const target = e.target as HTMLElement;
      if (target.closest('.detail-card')) return;
      e.preventDefault();
      e.stopPropagation();
    };

    if (selectedExp) {
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [selectedExp, isMobile]);

  const handleNodeClick = (expId: number, index: number) => {
    if (isMoving) return;
    setIsMoving(true);
    const nodeElement = document.querySelector(`[data-node-id="${expId}"]`);
    if (nodeElement && characterRef.current) {
      const nodeRect = nodeElement.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (containerRect) {
        const currentTransform = window.getComputedStyle(characterRef.current).transform;
        let currentX = characterXRef.current;
        if (currentTransform && currentTransform !== 'none') {
          const matrix = new DOMMatrix(currentTransform);
          currentX = matrix.m41;
        }
        const targetX = nodeRect.left - containerRect.left - 40;
        const distance = Math.abs(targetX - currentX);
        characterXRef.current = targetX;
        gsap.to(characterRef.current, {
          x: targetX,
          duration: Math.max(0.8, distance / 400),
          ease: 'power2.inOut',
          onUpdate: function () {
            const progress = this.progress();
            const wobble = Math.sin(progress * 20) * 3;
            if (characterRef.current) {
              const currentPos = currentX + ((targetX - currentX) * progress);
              characterRef.current.style.transform = `translateX(${currentPos}px) translateY(${wobble}px)`;
            }
          },
          onComplete: () => {
            if (characterRef.current) {
              gsap.to(characterRef.current, {
                y: -20, duration: 0.3, yoyo: true, repeat: 1, ease: 'power2.out',
                onComplete: () => { setSelectedExp(expId); setIsMoving(false); }
              });
            }
          }
        });
      }
    }
  };

  const mobileCharacterYRef = useRef(0);
  const mobileCharacterRef = useRef<HTMLDivElement>(null);

  const handleMobileNodeClick = (expId: number) => {
    if (isMoving) return;
    setIsMoving(true);

    const nodeEl = document.querySelector(`[data-mobile-node="${expId}"]`) as HTMLElement;
    const charEl = mobileCharacterRef.current;
    const trackEl = document.querySelector('.mobile-track') as HTMLElement;

    if (!nodeEl || !charEl || !trackEl) {
      setSelectedExp(expId);
      setIsMoving(false);
      return;
    }

    const trackRect = trackEl.getBoundingClientRect();
    const nodeRect = nodeEl.getBoundingClientRect();

    const currentY = mobileCharacterYRef.current;
    const targetY = (nodeRect.top - trackRect.top) + (nodeRect.height / 2) - 30;
    const distance = Math.abs(targetY - currentY);
    mobileCharacterYRef.current = targetY;

    gsap.to(charEl, {
      y: targetY,
      duration: Math.max(0.6, distance / 300),
      ease: 'power2.inOut',
      onUpdate: function () {
        const p = this.progress();
        const wobble = Math.sin(p * 18) * 4;
        charEl.style.transform = `translateY(${mobileCharacterYRef.current * p + currentY * (1 - p)}px) translateX(${wobble}px)`;
      },
      onComplete: () => {
        gsap.to(charEl, {
          y: targetY - 22,
          duration: 0.22,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            charEl.style.transform = `translateY(${targetY}px)`;
            setSelectedExp(expId);
            setIsMoving(false);
          }
        });
      }
    });
  };

  const handleMobileFinishLineClick = () => {
    if (isMoving) return;
    setIsMoving(true);

    const finishEl = document.querySelector('.mobile-finish') as HTMLElement;
    const charEl = mobileCharacterRef.current;
    const trackEl = document.querySelector('.mobile-track') as HTMLElement;

    const fireNavigation = () => {
      setIsMoving(false);
      const ev = new WheelEvent('wheel', { deltaY: 150, bubbles: true, cancelable: true, view: window });
      window.dispatchEvent(ev);
      setTimeout(() => {
        const ev2 = new WheelEvent('wheel', { deltaY: 150, bubbles: true, cancelable: true, view: window });
        document.dispatchEvent(ev2);
      }, 50);
    };

    if (!finishEl || !charEl || !trackEl) {
      setTimeout(fireNavigation, 200);
      return;
    }

    const trackRect = trackEl.getBoundingClientRect();
    const finishRect = finishEl.getBoundingClientRect();
    const currentY = mobileCharacterYRef.current;
    const targetY = (finishRect.top - trackRect.top) + (finishRect.height / 2) - 30;
    const distance = Math.abs(targetY - currentY);
    mobileCharacterYRef.current = targetY;

    gsap.to(charEl, {
      y: targetY,
      duration: Math.max(0.6, distance / 280),
      ease: 'power2.inOut',
      onUpdate: function () {
        const p = this.progress();
        const wobble = Math.sin(p * 18) * 4;
        charEl.style.transform = `translateY(${currentY + (targetY - currentY) * p}px) translateX(${wobble}px)`;
      },
      onComplete: () => {
        gsap.to(charEl, {
          rotation: 360, scale: 1.4, duration: 0.45, ease: 'back.out(1.5)',
          onComplete: () => {
            gsap.to(charEl, {
              y: targetY - 400, opacity: 0, scale: 0.5, duration: 0.55, ease: 'power2.in',
              onComplete: fireNavigation,
            });
          }
        });
      }
    });
  };

  const handleFinishLineClick = () => {
    if (isMoving) return;
    setIsMoving(true);
    const finishLineElement = document.querySelector('.finish-line');
    if (finishLineElement && characterRef.current) {
      const finishRect = finishLineElement.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (containerRect) {
        const currentTransform = window.getComputedStyle(characterRef.current).transform;
        let currentX = characterXRef.current;
        if (currentTransform && currentTransform !== 'none') {
          const matrix = new DOMMatrix(currentTransform);
          currentX = matrix.m41;
        }
        const targetX = finishRect.left - containerRect.left - 40;
        const distance = Math.abs(targetX - currentX);
        characterXRef.current = targetX;
        gsap.to(characterRef.current, {
          x: targetX,
          duration: Math.max(0.8, distance / 400),
          ease: 'power2.inOut',
          onUpdate: function () {
            const progress = this.progress();
            const wobble = Math.sin(progress * 20) * 3;
            if (characterRef.current) {
              const currentPos = currentX + ((targetX - currentX) * progress);
              characterRef.current.style.transform = `translateX(${currentPos}px) translateY(${wobble}px)`;
            }
          },
          onComplete: () => {
            if (characterRef.current) {
              gsap.to(characterRef.current, {
                rotation: 360, scale: 1.2, y: -15, duration: 0.5, ease: 'back.out(1.5)',
                onComplete: () => {
                  gsap.to(characterRef.current, {
                    x: '+=200', opacity: 0, duration: 0.6, ease: 'power2.in',
                    onComplete: () => {
                      setTimeout(() => {
                        setIsMoving(false);
                        const wheelEvent = new WheelEvent('wheel', { deltaY: 100, bubbles: true, cancelable: true, view: window });
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
    const detail = document.querySelector('.detail-card') as HTMLElement;
    if (detail) {
      gsap.to(detail, {
        opacity: 0, scale: 0.9, duration: 0.25, ease: 'power2.in',
        onComplete: () => setSelectedExp(null)
      });
    } else {
      setSelectedExp(null);
    }
  };

  const selectedExperience = experiences.find(exp => exp.id === selectedExp);

  // ─────────────────────────────────────────
  // MOBILE RENDER
  // ─────────────────────────────────────────
  if (isMobile) {
    return (
      <section className="w-full h-screen flex flex-col px-0 py-0 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="w-full relative z-10 px-5 pt-8 pb-0 flex flex-col h-full" ref={containerRef}>

          {/* Title */}
          <div className="text-center flex-shrink-0 mb-6">
            <h2 className="text-2xl font-black">
              <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experiência Profissional
              </span>
            </h2>
            {!selectedExp && (
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
                Toque nos pontos para explorar
                <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
              </p>
            )}
          </div>

          {/* ═══ MOBILE TIMELINE ═══ */}
          {!selectedExp && (
            <div className="flex-1 timeline-view relative" style={{ marginTop: '28px', marginBottom: '104px' }}>

              {/* Rail */}
              <div
                className="absolute top-0 bottom-0 rounded-full"
                style={{
                  left: '26px',
                  width: '4px',
                  background: 'linear-gradient(to bottom, #10b981, #8b5cf6, #ec4899, #fbbf24)',
                  boxShadow: '0 0 14px rgba(139,92,246,0.7)',
                }}
              />

              {/* Robot */}
              <div
                ref={mobileCharacterRef}
                className="absolute z-30 pointer-events-none"
                style={{ left: '-2px', top: '-30px', width: '58px', height: '58px' }}
              >
                <svg width="58" height="58" viewBox="0 0 80 80" style={{ filter: 'drop-shadow(0 0 10px rgba(139,92,246,0.9))' }}>
                  <ellipse cx="40" cy="74" rx="18" ry="3.5" fill="rgba(0,0,0,0.35)" />
                  <rect x="25" y="36" width="30" height="28" rx="5" fill="#8b5cf6" />
                  <rect x="27" y="38" width="26" height="24" rx="4" fill="#a78bfa" />
                  <rect x="28" y="15" width="24" height="23" rx="6" fill="#ec4899" />
                  <rect x="30" y="17" width="20" height="19" rx="5" fill="#f472b6" />
                  <circle cx="35" cy="25" r="3" fill="#1f2937" />
                  <circle cx="45" cy="25" r="3" fill="#1f2937" />
                  <circle cx="36" cy="24" r="1.5" fill="white" />
                  <circle cx="46" cy="24" r="1.5" fill="white" />
                  <path d="M 35 30 Q 40 33 45 30" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <line x1="40" y1="15" x2="40" y2="8" stroke="#ec4899" strokeWidth="2" />
                  <circle cx="40" cy="6" r="3" fill="#fbbf24" />
                  <rect x="18" y="41" width="6" height="16" rx="3" fill="#8b5cf6" />
                  <rect x="56" y="41" width="6" height="16" rx="3" fill="#8b5cf6" />
                  <rect x="28" y="62" width="8" height="9" rx="2" fill="#6366f1" />
                  <rect x="44" y="62" width="8" height="9" rx="2" fill="#6366f1" />
                  <text x="40" y="51" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">{'</>'}</text>
                </svg>
              </div>

              {/* mobile-track */}
              <div
                className="mobile-track absolute inset-0 flex flex-col justify-between"
                style={{ paddingLeft: '72px', paddingTop: '60px', paddingBottom: '8px' }}
              >
                {experiences.map((exp) => {
                  const gradientColors: Record<string, string> = {
                    'from-purple-500 to-pink-600': 'linear-gradient(135deg, #a855f7, #db2777)',
                    'from-emerald-500 to-teal-600': 'linear-gradient(135deg, #10b981, #0d9488)',
                  };
                  const glow: Record<string, string> = {
                    'from-purple-500 to-pink-600': 'rgba(168,85,247,0.5)',
                    'from-emerald-500 to-teal-600': 'rgba(16,185,129,0.5)',
                  };
                  return (
                    <div key={exp.id} data-mobile-node={exp.id} className="flex items-center gap-4">
                      <div
                        className={`relative flex-shrink-0 cursor-pointer active:scale-90 transition-transform duration-150 ${isMoving ? 'pointer-events-none' : ''}`}
                        style={{ marginLeft: '-58px' }}
                        onClick={() => handleMobileNodeClick(exp.id)}
                      >
                        <div
                          className="w-16 h-16 rounded-full p-0.5"
                          style={{ background: gradientColors[exp.color] || '#8b5cf6', boxShadow: `0 0 22px ${glow[exp.color] || 'rgba(139,92,246,0.5)'}` }}
                        >
                          <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center relative overflow-hidden">
                            <img src={exp.icon} alt={exp.position} className="w-9 h-9 object-contain relative z-10" />
                            {exp.status === 'current' && (
                              <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full z-20">
                                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-20"
                          style={{ background: gradientColors[exp.color] || '#8b5cf6', animationDuration: '2.5s' }}
                        />
                      </div>
                      <button
                        className={`flex-1 text-left p-4 rounded-2xl border transition-all duration-200 active:scale-95 ${isMoving ? 'pointer-events-none' : ''}`}
                        style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                        onClick={() => handleMobileNodeClick(exp.id)}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="text-white font-bold text-sm leading-tight">{exp.position}</p>
                          {exp.status === 'current' && (
                            <span className="flex-shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-[9px] font-semibold">
                              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                              Atual
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 text-[10px] mb-0.5">{exp.period}</p>
                        <p
                          className="text-[10px] font-semibold"
                          style={{ background: gradientColors[exp.color], WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                        >
                          Toque para ver detalhes →
                        </p>
                      </button>
                    </div>
                  );
                })}

                {/* Finish flag */}
                <div
                  className="mobile-finish flex items-center gap-4 cursor-pointer active:scale-95 transition-transform duration-150"
                  style={{ pointerEvents: isMoving ? 'none' : 'auto', marginLeft: '-58px' }}
                  onClick={handleMobileFinishLineClick}
                >
                  <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <div className="relative w-12 h-14">
                      <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-gray-400 to-gray-700 rounded-full" />
                      <div className="absolute left-2 top-1.5 w-9 h-8 grid grid-cols-4 grid-rows-3 overflow-hidden rounded-r-md shadow-xl animate-wave">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className={`${(i % 2 === 0 && Math.floor(i / 4) % 2 === 0) || (i % 2 === 1 && Math.floor(i / 4) % 2 === 1) ? 'bg-white' : 'bg-gray-900'}`} />
                        ))}
                      </div>
                      <div className="absolute left-2 top-1.5 w-9 h-8 bg-yellow-400 blur-lg opacity-40 animate-pulse" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Flag className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div
                    className="flex-1 p-4 rounded-2xl border"
                    style={{ background: 'rgba(234,179,8,0.07)', borderColor: 'rgba(234,179,8,0.25)' }}
                  >
                    <p className="text-yellow-400 font-bold text-base">🏁 Chegada!</p>
                    <p className="text-yellow-600/80 text-xs mt-0.5">Toque para avançar →</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MOBILE DETAIL CARD */}
          {selectedExperience && (
            <div className="detail-card relative opacity-0 flex flex-col" style={{ maxHeight: 'calc(100vh - 160px)' }}>
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 mb-4 px-4 py-2.5 w-max bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-2xl active:scale-95 transition-transform flex-shrink-0"
              >
                <ArrowLeft className="w-4 h-4 text-purple-300" />
                <span className="text-white font-bold text-sm">Voltar à Linha do Tempo</span>
              </button>

              {/* Card com scroll interno — wrapper externo segura o fundo, interno scrolla */}
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                {/* Fundo gradiente fixo — fica fora do scroll */}
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedExperience.color} opacity-[0.06] pointer-events-none`} />

                {/* Área scrollável */}
                <div
                  className="relative z-10 overflow-y-auto p-5 pr-2"
                  style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch', maxHeight: 'calc(100vh - 230px)' }}
                >
                  <div className="flex items-start gap-3 mb-5">
                    <div className="relative flex-shrink-0">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedExperience.color} flex items-center justify-center p-1.5 shadow-xl`}>
                        <img src={selectedExperience.icon} alt={selectedExperience.position} className="w-full h-full object-contain" />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${selectedExperience.color} rounded-2xl blur-lg opacity-40 animate-pulse`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      {selectedExperience.status === 'current' ? (
                        <span className="inline-flex items-center gap-1 mb-1.5 px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-[10px] font-semibold">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          Atual
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 mb-1.5 px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-[10px] font-semibold">
                          <Star className="w-3 h-3" />
                          Concluído
                        </span>
                      )}
                      <h3 className="text-base font-black text-white leading-tight mb-0.5">{selectedExperience.position}</h3>
                      <p className={`text-xs font-semibold mb-1.5 bg-gradient-to-r ${selectedExperience.color} bg-clip-text text-transparent`}>
                        {selectedExperience.company}
                      </p>
                      <div className="flex flex-col gap-0.5 text-gray-500 text-[10px]">
                        <div className="flex items-center gap-1"><Calendar className="w-2.5 h-2.5 flex-shrink-0" /><span>{selectedExperience.period}</span></div>
                        <div className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5 flex-shrink-0" /><span>{selectedExperience.location}</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mb-3">
                    <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                    <h4 className="text-white font-bold text-xs uppercase tracking-wide">Atividades & Conquistas</h4>
                  </div>
                  <div className="space-y-2">
                    {selectedExperience.achievements.map((achievement, idx) => {
                      const AchIcon = achievement.icon;
                      return (
                        <div
                          key={idx}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl ${achievement.highlight
                              ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30'
                              : 'bg-white/[0.03] border border-white/[0.07]'
                            }`}
                        >
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${achievement.highlight ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : 'bg-gradient-to-br from-purple-500 to-pink-600'
                            }`}>
                            <AchIcon className="w-3 h-3 text-white" />
                          </div>
                          <p className={`text-xs leading-relaxed flex-1 ${achievement.highlight ? 'text-yellow-100 font-semibold' : 'text-gray-300'}`}>
                            {achievement.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <style>{`
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-6deg); }
            75% { transform: rotate(6deg); }
          }
          .animate-wave { transform-origin: left center; animation: wave 0.9s ease-in-out infinite; }
        `}</style>
      </section>
    );
  }

  // ─────────────────────────────────────────
  // DESKTOP RENDER — UNCHANGED
  // ─────────────────────────────────────────
  return (
    <section className="w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden">
      {selectedExp && !isMobile && (
        <div ref={scrollBlockRef} className="fixed inset-0 z-50 pointer-events-none" style={{ touchAction: 'none' }} />
      )}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-6xl w-full relative z-10" ref={containerRef}>
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

        <div
          ref={timelineRef}
          className={`timeline-view relative flex items-center justify-center py-20 ${selectedExp ? 'hidden' : ''}`}
        >
          <div className="absolute left-0 right-0 flex items-center">
            <div className="timeline-line flex-1 h-1 md:h-2 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 rounded-l-full origin-left">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 rounded-l-full blur-xl opacity-50 animate-pulse" />
            </div>

            <div
              className="finish-line flex flex-col items-center ml-4 opacity-0 cursor-pointer group z-20"
              onClick={handleFinishLineClick}
              style={{ pointerEvents: isMoving ? 'none' : 'auto' }}
            >
              <div className="relative">
                <div className="w-12 h-16 md:w-20 md:h-28 relative transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute left-0 top-0 w-1.5 md:w-2 h-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-full" />
                  <div className="absolute left-1.5 md:left-2 top-2 md:top-4 w-10 h-9 md:w-16 md:h-14 grid grid-cols-4 grid-rows-3 overflow-hidden rounded-r-lg shadow-2xl animate-wave">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className={`${(i % 2 === 0 && Math.floor(i / 4) % 2 === 0) ||
                            (i % 2 === 1 && Math.floor(i / 4) % 2 === 1)
                            ? 'bg-white' : 'bg-gray-900'
                          }`}
                      />
                    ))}
                  </div>
                  <div className="absolute left-1.5 md:left-2 top-2 md:top-4 w-10 h-9 md:w-16 md:h-14 bg-yellow-400 blur-xl opacity-50 animate-pulse group-hover:opacity-80 transition-opacity" />
                </div>
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Flag className="w-3 h-3 md:w-5 md:h-5 text-white" />
                </div>
              </div>
              <p className="text-yellow-400 font-bold text-[10px] md:text-xs mt-2 animate-pulse group-hover:text-yellow-300 transition-colors">
                Chegada!
              </p>
            </div>
          </div>

          <div
            ref={characterRef}
            className="character absolute left-0 bottom-2 z-30 opacity-0 pointer-events-none"
            style={{ width: '80px', height: '80px' }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-2xl">
                  <ellipse cx="40" cy="72" rx="20" ry="4" fill="rgba(0,0,0,0.3)" />
                  <rect x="25" y="35" width="30" height="30" rx="4" fill="#8b5cf6" />
                  <rect x="27" y="37" width="26" height="26" rx="3" fill="#a78bfa" />
                  <rect x="28" y="15" width="24" height="24" rx="6" fill="#ec4899" />
                  <rect x="30" y="17" width="20" height="20" rx="5" fill="#f472b6" />
                  <circle cx="35" cy="25" r="3" fill="#1f2937" />
                  <circle cx="45" cy="25" r="3" fill="#1f2937" />
                  <circle cx="36" cy="24" r="1.5" fill="white" />
                  <circle cx="46" cy="24" r="1.5" fill="white" />
                  <path d="M 35 30 Q 40 33 45 30" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <line x1="40" y1="15" x2="40" y2="8" stroke="#ec4899" strokeWidth="2" />
                  <circle cx="40" cy="6" r="3" fill="#fbbf24" />
                  <circle cx="40" cy="6" r="3" fill="#fbbf24" opacity="0.5" className="animate-ping" />
                  <rect x="18" y="40" width="6" height="18" rx="3" fill="#8b5cf6" />
                  <rect x="56" y="40" width="6" height="18" rx="3" fill="#8b5cf6" />
                  <rect x="28" y="63" width="8" height="10" rx="2" fill="#6366f1" />
                  <rect x="44" y="63" width="8" height="10" rx="2" fill="#6366f1" />
                  <text x="40" y="52" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">{'</>'}</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="relative w-full flex justify-around items-center px-4 md:px-8 pr-16 md:pr-32">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="timeline-node-wrapper flex flex-col items-center"
                data-node-id={exp.id}
              >
                <div
                  className={`relative cursor-pointer transition-all duration-300 ${hoveredNode === exp.id ? 'scale-125' : 'scale-100'
                    } ${isMoving ? 'pointer-events-none' : ''}`}
                  onClick={() => handleNodeClick(exp.id, index)}
                  onMouseEnter={() => setHoveredNode(exp.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${exp.color} p-1 shadow-2xl`}>
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                      <img src={exp.icon} alt={exp.position} className="w-12 h-12 md:w-16 md:h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      {exp.status === 'current' && (
                        <div className="absolute top-1 right-1 md:top-2 md:right-2 w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-pulse z-20">
                          <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-full blur-2xl opacity-60 ${hoveredNode === exp.id ? 'animate-pulse' : ''}`} />
                </div>
                <div className={`mt-4 md:mt-8 text-center transition-all duration-300 ${hoveredNode === exp.id ? 'transform scale-110' : ''}`}>
                  <p className="text-white font-bold text-xs md:text-sm mb-1 max-w-[140px] md:max-w-[180px]">{exp.position}</p>
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

        {selectedExperience && (
          <div className="detail-card relative opacity-0 z-[60]">
            <button
              onClick={handleBack}
              className="group flex items-center gap-3 mb-6 px-6 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border-2 border-purple-500/50 hover:border-purple-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              <ArrowLeft className="w-6 h-6 text-purple-300 group-hover:-translate-x-2 transition-transform duration-300" />
              <span className="text-white font-bold text-lg">Voltar à Linha do Tempo</span>
            </button>

            <div
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-6 overflow-hidden shadow-2xl overflow-y-auto"
              style={{ maxHeight: 'calc(100vh - 220px)', overscrollBehavior: 'contain' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedExperience.color} ${selectedExperience.id === 2 ? 'opacity-5' : 'opacity-10'}`} />
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedExperience.color} flex items-center justify-center shadow-lg p-1`}>
                      <img src={selectedExperience.icon} alt={selectedExperience.position} className="w-full h-full object-contain" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedExperience.color} rounded-2xl blur-xl ${selectedExperience.id === 2 ? 'opacity-30' : 'opacity-60'} animate-pulse`} />
                  </div>
                  <div className="flex-1">
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
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1 leading-tight">{selectedExperience.position}</h3>
                    <p className={`text-base font-semibold mb-2 bg-gradient-to-r ${selectedExperience.color} bg-clip-text text-transparent`}>
                      {selectedExperience.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-gray-400 text-xs">
                      <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /><span>{selectedExperience.period}</span></div>
                      <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /><span>{selectedExperience.location}</span></div>
                    </div>
                  </div>
                </div>

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
                          className={`group/item flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${achievement.highlight
                              ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/40'
                              : 'bg-white/5 hover:bg-white/10 border border-white/10'
                            }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${achievement.highlight ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : 'bg-gradient-to-br from-purple-500 to-pink-600'
                            } group-hover/item:scale-110 transition-transform duration-300`}>
                            <AchIcon className="w-4 h-4 text-white" />
                          </div>
                          <p className={`text-sm md:text-base text-left leading-relaxed flex-1 ${achievement.highlight ? 'text-yellow-50 font-semibold' : 'text-gray-300'
                            }`}>
                            {achievement.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-30 pointer-events-none rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full animate-shine" />
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shine {
          from { transform: translateX(-100%) skewX(-12deg); }
          to { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine { animation: shine 3s infinite; }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        .animate-wave { transform-origin: left center; animation: wave 1s ease-in-out infinite; }
      `}</style>
    </section>
  );
}