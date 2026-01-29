import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ExternalLink, Github, Briefcase, Sparkles, Code, Palette, Building2, Rocket } from 'lucide-react';
import faiskaImg from '../../../assets/FaiskaImg.png';
import ambatechImg from '../../../assets/AmbatechImg.png';
import cepofImg from '../../../assets/CepofImg.png';

const projects = [
  {
    id: 1,
    title: 'Portfólio Faíska',
    client: 'Raíssa Alves (Faíska / Rai Kocho)',
    category: 'Portfólio Artístico',
    description: 'Portfólio personalizado feito sob encomenda para artista digital, apresentando seu trabalho criativo de forma imersiva e interativa.',
    image: faiskaImg,
    link: 'https://faiskapressao.com/',
    tech: ['Figma', 'React', 'Tailwind CSS', 'Web Design'],
    color: 'from-pink-500 to-purple-600',
    icon: Palette,
  },
  {
    id: 2,
    title: 'AmbaTech',
    client: 'CEO & Founder',
    category: 'Landing Page Corporativo',
    description: 'Site da minha empresa especializada em desenvolvimento de landing pages modernas e de alta conversão para negócios digitais.',
    image: ambatechImg,
    link: 'https://ambatech.vercel.app/',
    tech: ['Figma', 'React', 'Tailwind CSS', 'Vercel', 'UI/UX'],
    color: 'from-blue-500 to-cyan-600',
    icon: Rocket,
    highlight: true,
  },
  {
    id: 3,
    title: 'CEPOF - IFSC USP',
    client: 'Grupo CEPOF - Instituto de Física',
    category: 'Site Institucional',
    description: 'Site institucional desenvolvido para o grupo de pesquisa CEPOF do Instituto de Física de São Carlos da Universidade de São Paulo.',
    image: cepofImg,
    link: 'https://www.ifsc.usp.br/cepofsite/',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    color: 'from-orange-500 to-red-600',
    icon: Building2,
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
    
    const cards = containerRef.current.querySelectorAll('.portfolio-card');
    
    gsap.fromTo(cards,
      { 
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotationY: -20
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
      }
    );
  }, [isMobile]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <section className="w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl w-full relative z-10 py-4 md:py-12">
        {/* Title */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
          <p className="text-gray-400 text-xs md:text-base">
            Meus projetos e criações
          </p>
        </div>

        {/* Projects grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-240px)] overflow-y-auto px-2 md:px-4 pb-4 scrollbar-hide"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`portfolio-card group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer ${
                  hoveredCard === project.id 
                    ? 'border-white/40 scale-105' 
                    : 'border-white/20'
                } ${project.highlight ? 'ring-2 ring-purple-400/40' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
                onMouseMove={(e) => handleCardMouseMove(e, project.id)}
                onMouseLeave={handleCardMouseLeave}
                onMouseEnter={() => setHoveredCard(project.id)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Highlight particles */}
                {project.highlight && (
                  <>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
                    <div className="absolute top-8 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-300" />
                  </>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full">
                    <Icon className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold text-white">{project.category}</span>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" 
                    style={{ transition: 'transform 1s ease-in-out' }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-5">
                  {/* Title and Client */}
                  <h3 className="text-xl font-black text-white mb-1 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-purple-300 mb-3">
                    {project.client}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-medium text-white bg-gradient-to-r ${project.color} px-2.5 py-1 rounded-full shadow-lg`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.color} text-white text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    Visitar Site
                  </a>
                </div>

                {/* 3D depth effect */}
                <div className="absolute inset-0 opacity-30 pointer-events-none rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent transform translate-x-[-50%] translate-y-[-50%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Link */}
        <div className="flex justify-center">
          <a
            href="https://github.com/LauraFerCordeiro"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border-2 border-white/20 hover:border-white/40 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <Github className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            <div className="text-left">
              <p className="text-white font-bold text-base">Confira outros projetos</p>
              <p className="text-gray-400 text-sm">github.com/LauraFerCordeiro</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </div>
      </div>

      <style>{`
        .portfolio-card {
          transform-style: preserve-3d;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}