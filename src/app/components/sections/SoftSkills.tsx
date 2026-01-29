import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { 
  MessageCircle, 
  Lightbulb, 
  Users, 
  Zap, 
  Heart, 
  RefreshCw, 
  BookOpen, 
  Brain,
  Target
} from 'lucide-react';

const softSkills = [
  {
    icon: MessageCircle,
    title: 'Comunicação',
    description: 'Habilidade de expressar ideias claramente e ouvir ativamente',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Lightbulb,
    title: 'Criatividade',
    description: 'Capacidade de pensar fora da caixa e propor soluções inovadoras',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Users,
    title: 'Trabalho em Equipe',
    description: 'Colaboração efetiva em ambientes multidisciplinares',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Zap,
    title: 'Proatividade',
    description: 'Iniciativa para antecipar necessidades e agir sem aguardar instruções',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Heart,
    title: 'Comprometimento',
    description: 'Dedicação total aos projetos e responsabilidades assumidas',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: RefreshCw,
    title: 'Adaptabilidade',
    description: 'Flexibilidade para se ajustar a novas tecnologias e contextos',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: BookOpen,
    title: 'Aprendizado Rápido',
    description: 'Capacidade de absorver novos conhecimentos com agilidade',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Brain,
    title: 'Resolução de Problemas',
    description: 'Análise crítica e tomada de decisões assertivas',
    color: 'from-red-500 to-orange-600',
  },
  {
    icon: Target,
    title: 'Liderança',
    description: 'Capacidade de inspirar e guiar equipes em direção aos objetivos',
    color: 'from-amber-500 to-yellow-600',
  },
];

export default function SoftSkills() {
  const cardsRef = useRef<HTMLDivElement>(null);
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
    if (isMobile || !cardsRef.current) return;
    
    const cards = cardsRef.current.querySelectorAll('.skill-card');
    
    gsap.fromTo(cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, [isMobile]);

  return (
    <section className="w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl w-full relative z-10 py-4 md:py-12">
        {/* Title */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-2 md:mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h2>
          <p className="text-gray-400 text-xs md:text-base lg:text-lg">
            Habilidades interpessoais que fazem a diferença
          </p>
        </div>

        {/* Skills grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-280px)] overflow-y-auto px-2 md:px-4 pb-4 scrollbar-hide"
        >
          {softSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="skill-card group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}