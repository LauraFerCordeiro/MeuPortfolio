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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.skill-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' }
    );
  }, [isMobile]);

  return (
    <section className="w-full min-h-screen md:block flex flex-col items-center px-4 md:px-6 py-12 md:pt-16 md:pb-0 relative overflow-x-hidden">
      
      {/* Background simplificado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full">
        
        {/* Title: pt-2 garante que não seja cortado pelo topo da viewport */}
        <div className="text-center mb-6 md:mb-8 pt-2">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 md:mb-3">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm lg:text-base">
            Habilidades interpessoais que fazem a diferença
          </p>
        </div>

        {/*
          Desktop fix:
          - Removed pb-32/pb-24 that was causing the arrow to overlap cards.
          - Cards use slightly reduced padding (md:p-4) and icon size (md:w-12 md:h-12)
            to fit all 9 cards + title within the viewport without needing the
            huge bottom padding hack.
          - The arrow lives OUTSIDE this grid in the parent layout, so it sits
            naturally below the grid with its own clearance.
        */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 overflow-visible"
        >
          {softSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="skill-card group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                
                <div className="relative z-10 flex flex-col items-start">
                  {/* Desktop: slightly smaller icon (md:w-12 md:h-12) to recover vertical space */}
                  <div className={`w-14 h-14 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 md:w-6 md:h-6 text-white" />
                  </div>

                  {/* Desktop: slightly smaller title (md:text-lg) */}
                  <h3 className="text-lg md:text-lg font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 md:line-clamp-none md:text-xs lg:text-sm">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/*
          Spacer that gives the fixed/absolute arrow button enough room
          so it never overlaps the last row of cards on any desktop viewport.
          On mobile this collapses (hidden md:block keeps mobile untouched).
        */}
        <div className="hidden md:block md:h-20 lg:h-24 shrink-0" />
      </div>
    </section>
  );
}