import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Code } from 'lucide-react';

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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
    // Skip animations on mobile
    if (isMobile || !containerRef.current) return;

    if (containerRef.current) {
      const card = containerRef.current.querySelector('.education-card');
      const details = containerRef.current.querySelectorAll('.detail-item');
      
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(details,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power2.out',
        }
      );
    }

    if (timelineRef.current) {
      const timeline = timelineRef.current;
      const items = timeline.querySelectorAll('.timeline-item');
      
      gsap.fromTo(items,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, [isMobile]);

  return (
    <section className="w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-6xl w-full relative z-10 py-4 md:py-12">
        {/* Title */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-3">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Formação Acadêmica
            </span>
          </h2>
          <p className="text-gray-400 text-xs md:text-base">
            Minha jornada educacional
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-240px)] overflow-y-auto px-2 md:px-4 pb-4 scrollbar-hide"
        >
          {/* Main Education Card */}
          <div className="education-card group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-12 hover:border-purple-500/50 transition-all duration-500 overflow-hidden shadow-2xl">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating icons background */}
            <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Code className="w-32 h-32 text-purple-400" />
            </div>
            <div className="absolute bottom-10 left-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <BookOpen className="w-24 h-24 text-indigo-400" />
            </div>

            <div className="relative z-10">
              {/* Header with icon */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold text-sm md:text-base uppercase tracking-wide">
                      Curso Técnico
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-2 leading-tight">
                    Técnico em Informática para Internet
                  </h3>
                  <p className="text-purple-300 text-lg md:text-xl font-semibold">
                    Instituto Federal de São Paulo (IFSP)
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Period */}
                <div className="detail-item flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide">Período</p>
                    <p className="text-white font-bold text-base md:text-lg">2022 - 2024</p>
                  </div>
                </div>

                {/* Location */}
                <div className="detail-item flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide">Campus</p>
                    <p className="text-white font-bold text-base md:text-lg">São Carlos - SP</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="detail-item bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-purple-300 font-semibold mb-2 text-sm md:text-base">Sobre o Curso</h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      Formação técnica focada no desenvolvimento de aplicações web, abrangendo tecnologias frontend e backend, 
                      programação para internet, design de interfaces, banco de dados e práticas modernas de desenvolvimento de software.
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlight badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs md:text-sm font-semibold">
                  Desenvolvimento Web
                </span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs md:text-sm font-semibold">
                  Frontend & Backend
                </span>
                <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-xs md:text-sm font-semibold">
                  Concluído
                </span>
              </div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}