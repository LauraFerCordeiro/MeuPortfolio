import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Code2, Sparkles, Rocket, Heart, Mail, MapPin, Phone, Github, Copy, Check, Send, Linkedin } from 'lucide-react';
import profileImg from '../../../assets/Laurinha.jpg';

interface AboutProps {
  onNavigate?: (sectionIndex: number) => void;
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 16 99120-3005',
    displayValue: '+55 16 99120-3005',
    href: 'https://wa.me/5516991203005',
    color: 'from-emerald-500 to-teal-600',
    description: 'WhatsApp disponível',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'laurafercordeiro@gmail.com',
    displayValue: 'laurafercordeiro@gmail.com',
    href: 'mailto:laurafercordeiro@gmail.com',
    color: 'from-purple-500 to-pink-600',
    description: 'Respondo em até 24h',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/laura-cordeiro-9983a8324',
    displayValue: 'Laura Cordeiro',
    href: 'https://www.linkedin.com/in/laura-cordeiro-9983a8324',
    color: 'from-blue-500 to-blue-700',
    description: 'Vamos nos conectar',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Carlos, SP - Brasil',
    displayValue: 'São Carlos, Brasil',
    href: null,
    color: 'from-orange-500 to-red-600',
    description: 'Trabalho remoto ou híbrido',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/LauraFerCordeiro',
    displayValue: '@LauraFerCordeiro',
    href: 'https://github.com/LauraFerCordeiro',
    color: 'from-indigo-500 to-blue-600',
    description: 'Confira meu código',
  },
];

export default function About({ onNavigate }: AboutProps) {
  const nameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const glitchRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
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
    if (isMobile) return;

    // Name entrance animation
    if (nameRef.current) {
      const letters = nameRef.current.querySelectorAll('.letter');
      
      gsap.fromTo(letters,
        {
          opacity: 0,
          y: 100,
          rotationX: -90,
          scale: 0,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          stagger: 0.05,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.2,
        }
      );
    }

    // Image entrance animation
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        {
          opacity: 0,
          scale: 0.5,
          rotationY: 180,
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.5,
        }
      );
    }

    // Text entrance animation
    if (textRef.current) {
      const paragraphs = textRef.current.querySelectorAll('.text-paragraph');
      gsap.fromTo(paragraphs,
        {
          opacity: 0,
          x: -50,
          rotationX: -30,
        },
        {
          opacity: 1,
          x: 0,
          rotationX: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          delay: 0.8,
        }
      );
    }

    // Glitch effect on title
    if (glitchRef.current) {
      const glitchInterval = setInterval(() => {
        gsap.to(glitchRef.current, {
          x: Math.random() * 4 - 2,
          duration: 0.05,
          yoyo: true,
          repeat: 3,
        });
      }, 3000);

      return () => clearInterval(glitchInterval);
    }

    // Floating orbs animation
    if (orbsRef.current) {
      const orbs = orbsRef.current.querySelectorAll('.floating-orb');
      orbs.forEach((orb, index) => {
        gsap.to(orb, {
          y: Math.random() * 30 - 15,
          x: Math.random() * 30 - 15,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3,
        });
      });
    }
  }, [isMobile]);

  // Mouse move parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePosition({ x, y });

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x: -x * 0.5,
        y: -y * 0.5,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    if (textRef.current) {
      gsap.to(textRef.current, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const name = 'LAURA CORDEIRO';

  return (
    <section 
      className="w-full min-h-screen md:h-screen flex items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }} />
      </div>

      {/* Floating orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-orb absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="floating-orb absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="floating-orb absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Holographic name */}
        <div ref={nameRef} className="mb-4 md:mb-8 perspective-1000">
          <div className="flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-3">
            {name.split('').map((letter, index) => (
              <span
                key={index}
                className="letter inline-block text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black relative"
                style={{
                  background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: `gradient-shift ${3 + index * 0.1}s ease infinite`,
                  textShadow: `
                    0 0 10px rgba(139, 92, 246, 0.5),
                    0 0 20px rgba(236, 72, 153, 0.3),
                    0 0 30px rgba(139, 92, 246, 0.2)
                  `,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        </div>

        {/* Glitch subtitle */}
        <h2
          ref={glitchRef}
          className="text-lg md:text-2xl lg:text-3xl font-bold text-center mb-12 relative"
          style={{
            color: '#fff',
            textShadow: `
              2px 2px 0px rgba(139, 92, 246, 0.7),
              -2px -2px 0px rgba(236, 72, 153, 0.7)
            `,
          }}
        >
          <Code2 className="inline-block w-5 h-5 md:w-7 md:h-7 mr-2 text-purple-400" />
          Frontend Developer & Creative Coder
        </h2>

        {/* Main content - Image and Text */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Image section with effects */}
          <div className="space-y-6">
            <div ref={imageRef} className="relative group max-w-xs ml-auto mr-8">
              <div className="relative">
                {/* Glowing border effect - blur reduzido */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-spin-slow" />
                
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 group-hover:border-white/30 transition-all duration-500">
                  <img
                    src={profileImg}
                    alt="Laura Cordeiro"
                    className="w-full h-auto relative z-10 transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-pink-900/30 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-1/4 animate-scan-line" />
                  </div>
                </div>

                {/* Floating icons around image - tamanho reduzido */}
                <div className="absolute -top-3 -right-3 w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer z-20">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-11 h-11 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer z-20">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Contact Info - Minimalista abaixo da imagem */}
            <div ref={contactCardsRef} className="space-y-2 max-w-xs ml-auto mr-8">{/* adicionado mr-8 também */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isCopied = copiedIndex === index;
                
                return (
                  <div
                    key={info.label}
                    className="contact-card group relative"
                  >
                    <div className="flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-lg px-3 py-2 transition-all duration-300">
                      {/* Icon */}
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">{info.label}</div>
                        <a
                          href={info.href || '#'}
                          onClick={(e) => {
                            if (!info.href) {
                              e.preventDefault();
                            }
                          }}
                          className="text-xs text-white font-medium hover:text-purple-400 transition-colors truncate block"
                        >
                          {info.displayValue}
                        </a>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {info.href && (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            title={info.label === 'GitHub' ? 'Acessar' : 'Contatar'}
                          >
                            <Send className="w-3 h-3 text-white/90" />
                          </a>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(info.value, index);
                          }}
                          className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                          title="Copiar"
                        >
                          {isCopied ? (
                            <Check className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3 text-white/90" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Text section */}
          <div ref={textRef} className="space-y-5">
            <div className="text-paragraph">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl md:text-2xl font-bold text-white">Sobre Mim</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Olá! Sou <span className="text-purple-400 font-bold">Laura Cordeiro</span>, uma desenvolvedora 
                frontend apaixonada por criar experiências digitais que <span className="text-pink-400 font-bold">surpreendem</span> e 
                <span className="text-purple-400 font-bold"> encantam</span>. Minha missão é transformar ideias 
                em interfaces interativas e funcionais que não apenas atendem às necessidades, mas superam expectativas.
              </p>
            </div>

            <div className="text-paragraph">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl md:text-2xl font-bold text-white">Minha Jornada</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Com experiência em <span className="text-purple-400 font-bold">React, TypeScript, GSAP e Three.js</span>, 
                especializo-me em construir aplicações web modernas com animações avançadas e design inovador. 
                Acredito que código bem escrito é uma forma de arte, e cada projeto é uma oportunidade de 
                <span className="text-pink-400 font-bold"> criar algo único</span> e memorável.
              </p>
            </div>

            <div className="text-paragraph">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl md:text-2xl font-bold text-white">O Que Me Move</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Adoro desafios que me permitem explorar os <span className="text-purple-400 font-bold">limites do que é possível</span> na web. 
                Seja criando animações imersivas, desenvolvendo interfaces responsivas ou otimizando performance, 
                estou sempre em busca de <span className="text-pink-400 font-bold">inovação e excelência</span>. 
                Quando não estou codando, estou aprendendo novas tecnologias e me inspirando em design e arte digital.
              </p>
            </div>

            {/* Stats badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="text-purple-400 font-bold text-base">3+</div>
                <div className="text-gray-400 text-xs leading-tight">Anos de Experiência<br/>em Projetos Acadêmicos</div>
              </div>
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="text-pink-400 font-bold text-base">1+</div>
                <div className="text-gray-400 text-xs leading-tight">Anos de Experiência<br/>Profissional</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="text-blue-400 font-bold text-base">10+</div>
                <div className="text-gray-400 text-xs">Tecnologias</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes scan-line {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        @keyframes border-spin {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-scan-line {
          animation: scan-line 3s ease-in-out infinite;
        }

        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
      `}</style>
    </section>
  );
}