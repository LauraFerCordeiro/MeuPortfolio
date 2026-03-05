import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiPython,
  SiPhp,
  SiReact,
  SiSpring,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiDocker,
  SiApachemaven,
  SiLinux
} from 'react-icons/si';
import { FaJava, FaWindows } from 'react-icons/fa';
import { TbBrandThreejs, TbBrandVscode } from 'react-icons/tb';

interface Technology {
  name: string;
  category: string;
  color: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const technologies: Technology[] = [
  { name: 'JavaScript', category: 'Linguagens', color: '#F7DF1E', Icon: SiJavascript },
  { name: 'TypeScript', category: 'Linguagens', color: '#3178C6', Icon: SiTypescript },
  { name: 'HTML5', category: 'Linguagens', color: '#E34F26', Icon: SiHtml5 },
  { name: 'CSS3', category: 'Linguagens', color: '#1572B6', Icon: SiCss3 },
  { name: 'Python', category: 'Linguagens', color: '#3776AB', Icon: SiPython },
  { name: 'Java', category: 'Linguagens', color: '#007396', Icon: FaJava },
  { name: 'PHP', category: 'Linguagens', color: '#777BB4', Icon: SiPhp },
  { name: 'React', category: 'Frameworks', color: '#61DAFB', Icon: SiReact },
  { name: 'Spring Boot', category: 'Frameworks', color: '#6DB33F', Icon: SiSpring },
  { name: 'Bootstrap', category: 'Frameworks', color: '#7952B3', Icon: SiBootstrap },
  { name: 'GSAP', category: 'Bibliotecas', color: '#88CE02', Icon: () => <div className="text-3xl font-black">GS</div> },
  { name: 'Three.js', category: 'Bibliotecas', color: '#049EF4', Icon: TbBrandThreejs },
  { name: 'Tailwind CSS', category: 'Bibliotecas', color: '#06B6D4', Icon: SiTailwindcss },
  { name: 'Git', category: 'Ferramentas', color: '#F05032', Icon: SiGit },
  { name: 'VS Code', category: 'Ferramentas', color: '#007ACC', Icon: TbBrandVscode },
  { name: 'Figma', category: 'Ferramentas', color: '#F24E1E', Icon: SiFigma },
  { name: 'Postman', category: 'Ferramentas', color: '#FF6C37', Icon: SiPostman },
  { name: 'Maven', category: 'Ferramentas', color: '#C71A36', Icon: SiApachemaven },
  { name: 'Linux', category: 'Sistemas Operacionais', color: '#FCC624', Icon: SiLinux },
  { name: 'Windows', category: 'Sistemas Operacionais', color: '#0078D4', Icon: FaWindows },
];

const categories = ['Todas', 'Linguagens', 'Frameworks', 'Bibliotecas', 'Ferramentas', 'Sistemas Operacionais'];

type CategoryType = 'Todas' | 'Linguagens' | 'Frameworks' | 'Bibliotecas' | 'Ferramentas' | 'Sistemas Operacionais';

export default function Technologies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('Todas');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.tech-card');
    gsap.fromTo(cards,
      { opacity: 0, scale: 0, rotationY: -180 },
      { opacity: 1, scale: 1, rotationY: 0, stagger: 0.03, duration: 0.6, ease: 'back.out(1.7)' }
    );
  }, [activeCategory]);



  const handleCategoryChange = (category: CategoryType) => {
    if (category === activeCategory) return;
    const cards = containerRef.current?.querySelectorAll('.tech-card');
    if (cards && !isMobile) {
      gsap.to(cards, {
        opacity: 0, scale: 0, duration: 0.2, stagger: 0.01,
        onComplete: () => setActiveCategory(category),
      });
    } else {
      setActiveCategory(category);
    }
  };

  const filteredTechs = activeCategory === 'Todas'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory);

  const isAll = activeCategory === 'Todas';

  return (
    <section className="w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative" style={{ overflow: 'hidden', maxWidth: '100vw' }}>
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, .5) 25%, rgba(99, 102, 241, .5) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, .5) 75%, rgba(99, 102, 241, .5) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(99, 102, 241, .5) 25%, rgba(99, 102, 241, .5) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, .5) 75%, rgba(99, 102, 241, .5) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(500px) rotateX(60deg)',
          animation: 'grid-slide 20s linear infinite',
        }} />
      </div>

      {/* ─── MOBILE layout (untouched) ─── */}
      <div className="md:hidden max-w-7xl w-full relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-black mb-2">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-xs mb-3">Ferramentas e tecnologias que domino</p>
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category as CategoryType)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div
          ref={containerRef}
          data-scrollable="true" // <-- ADICIONE ESTA LINHA AQUI
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[calc(100vh-220px)] overflow-y-auto px-2 pb-4 scrollbar-hide content-start"
        >
          {filteredTechs.map((tech, index) => {
            const Icon = tech.Icon;
            return (
              <div key={`${tech.name}-${index}`} className="tech-card group cursor-pointer">
                <div
                  className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-white/30"
                  style={{ boxShadow: `0 0 30px ${tech.color}20` }}
                >
                  <div className="mb-3 flex items-center justify-center" style={{ filter: `drop-shadow(0 0 10px ${tech.color}80)` }}>
                    <Icon className="w-12 h-12" style={{ color: tech.color }} />
                  </div>
                  <h3 className="text-white font-bold text-sm text-center mb-1">{tech.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: `${tech.color}20`, color: tech.color }}>
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── DESKTOP layout ─── */}
      <div className="hidden md:flex flex-col w-full max-w-7xl relative z-10 h-screen py-6">

        {/* Fixed header */}
        <div className="flex-none text-center mb-4">
          <h2 className="text-4xl lg:text-5xl font-black mb-2">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-sm lg:text-base mb-4">
            Ferramentas e tecnologias que domino
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category as CategoryType)}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards container */}
        <div className="flex-1 min-h-0 flex flex-col overflow-x-hidden">
          <div
            ref={scrollContainerRef}
            data-scrollable={isAll ? "true" : undefined}
            className={`w-full h-full ${isAll ? 'overflow-y-auto overscroll-contain scrollbar-thin' : 'overflow-hidden'}`}
          >
            {/* inner grid ref stays for GSAP animations */}
            <div
              ref={containerRef}
              className={`grid gap-3 content-start ${
                isAll
                  ? 'grid-cols-5 pb-4'
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              }`}
            >
              {filteredTechs.map((tech, index) => {
                const Icon = tech.Icon;
                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="tech-card group cursor-pointer"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left - rect.width / 2;
                      const y = e.clientY - rect.top - rect.height / 2;
                      gsap.to(e.currentTarget, { rotationY: x * 0.1, rotationX: -y * 0.1, duration: 0.3, transformPerspective: 1000 });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { rotationY: 0, rotationX: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
                    }}
                  >
                    <div
                      className={`relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-white/30 ${isAll ? 'p-4' : 'p-6'}`}
                      style={{ boxShadow: `0 0 30px ${tech.color}20` }}
                    >
                      <div
                        className={`transform group-hover:scale-125 transition-transform duration-500 flex items-center justify-center ${isAll ? 'mb-2' : 'mb-3'}`}
                        style={{ filter: `drop-shadow(0 0 10px ${tech.color}80)` }}
                      >
                        <Icon className={isAll ? 'w-10 h-10' : 'w-12 h-12'} style={{ color: tech.color }} />
                      </div>
                      <h3 className={`text-white font-bold text-center mb-1 ${isAll ? 'text-xs' : 'text-sm'}`}>
                        {tech.name}
                      </h3>
                      <span
                        className={`px-2 py-0.5 rounded-full font-semibold ${isAll ? 'text-[10px]' : 'text-xs'}`}
                        style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                      >
                        {tech.category}
                      </span>
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                        style={{ backgroundColor: tech.color }}
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-none h-16" />
      </div>

      <style>{`
        @keyframes grid-slide {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-thin { scrollbar-width: thin; scrollbar-color: rgba(99,102,241,0.4) transparent; }
        .scrollbar-thin::-webkit-scrollbar { width: 4px; height: 0; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.4); border-radius: 2px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(99,102,241,0.7); }
        .scrollbar-thin::-webkit-scrollbar:horizontal { display: none; height: 0; }
        html, body { overflow-x: hidden !important; max-width: 100vw; }
      `}</style>
    </section>
  );
}