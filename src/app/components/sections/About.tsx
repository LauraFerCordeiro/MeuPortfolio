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
    accent: '#10b981',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'laurafercordeiro@gmail.com',
    displayValue: 'laurafercordeiro@gmail.com',
    href: 'mailto:laurafercordeiro@gmail.com',
    color: 'from-purple-500 to-pink-600',
    accent: '#a855f7',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/laura-cordeiro-9983a8324',
    displayValue: 'Laura Cordeiro',
    href: 'https://www.linkedin.com/in/laura-cordeiro-9983a8324',
    color: 'from-blue-500 to-blue-700',
    accent: '#3b82f6',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Carlos, SP - Brasil',
    displayValue: 'São Carlos, Brasil',
    href: null,
    color: 'from-orange-500 to-red-600',
    accent: '#f97316',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/LauraFerCordeiro',
    displayValue: '@LauraFerCordeiro',
    href: 'https://github.com/LauraFerCordeiro',
    color: 'from-indigo-500 to-blue-600',
    accent: '#6366f1',
  },
];

export default function About({ onNavigate }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Name lines
    tl.fromTo('.name-line',
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.9, stagger: 0.12 }
    )
    // Role badge
    .fromTo('.role-badge',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }, '-=0.4'
    )
    // Image
    .fromTo(imageRef.current,
      { opacity: 0, scale: 1.08, clipPath: 'inset(100% 0% 0% 0%)' },
      { opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power4.out' },
      '-=0.7'
    )
    // Right column content
    .fromTo('.bio-block',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
      '-=0.6'
    )
    // Contact chips
    .fromTo('.contact-chip',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.07 },
      '-=0.3'
    )
    // Stats
    .fromTo('.stat-item',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
      '-=0.2'
    );
  }, [isMobile]);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !imageRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 12;
    const y = (clientY / innerHeight - 0.5) * 12;
    gsap.to(imageRef.current, { x: -x * 0.4, y: -y * 0.4, duration: 0.8, ease: 'power2.out' });
  };

  return (
    <section
      className="w-full min-h-screen md:h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-8 md:py-0 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />
        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[80px]" />
      </div>

      {/* ── Main layout ── */}
      <div ref={containerRef} className="relative z-10 w-full max-w-7xl mx-auto">

        {/* MOBILE layout */}
        <div className="md:hidden space-y-6">
          <div className="text-center">
            <div className="text-4xl font-black tracking-tight text-white mb-1">LAURA</div>
            <div className="text-4xl font-black tracking-tight" style={{ WebkitTextStroke: '1px rgba(168,85,247,0.8)', color: 'transparent' }}>CORDEIRO</div>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Code2 className="w-3 h-3" /> FullStack Developer & Creative Coder
            </div>
          </div>
          <img src={profileImg} alt="Laura Cordeiro" className="w-40 h-40 object-cover rounded-2xl mx-auto border-2 border-purple-500/30" />
          <p className="text-gray-300 text-sm leading-relaxed text-center px-2">
            Desenvolvedora fullstack apaixonada por criar experiências digitais que <span className="text-purple-400 font-semibold">surpreendem</span> e <span className="text-pink-400 font-semibold">encantam</span>.
          </p>
          <div className="space-y-2">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={info.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">{info.label}</div>
                    <div className="text-white text-xs font-medium truncate">{info.displayValue}</div>
                  </div>
                  <button onClick={() => handleCopy(info.value, index)} className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                    {copiedIndex === index ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3 text-white/70" />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP layout — 3-column: name+photo | divider | bio+contact */}
        <div className="hidden md:grid md:grid-cols-[1fr_1px_1fr] lg:grid-cols-[420px_1px_1fr] gap-0 items-center min-h-0">

          {/* ── LEFT: Name + Photo stacked ── */}
          <div className="pr-8 lg:pr-12 flex flex-col gap-5">

            {/* Name block */}
            <div ref={nameRef}>
              {/* Eyebrow */}
              <div className="role-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                FullStack Developer
              </div>

              {/* Large name — stacked lines, mixed fill/outline */}
              <div className="leading-none space-y-1">
                <div className="name-line text-[clamp(2.8rem,5vw,4.5rem)] font-black tracking-tight text-white">
                  LAURA
                </div>
                <div
                  className="name-line text-[clamp(2.8rem,5vw,4.5rem)] font-black tracking-tight"
                  style={{
                    WebkitTextStroke: '2px rgba(168,85,247,0.9)',
                    color: 'transparent',
                    textShadow: '0 0 40px rgba(168,85,247,0.3)',
                  }}
                >
                  CORDEIRO
                </div>
                <div className="name-line text-[clamp(1rem,1.8vw,1.4rem)] font-semibold tracking-[0.25em] text-pink-400/80 uppercase mt-1">
                  Creative Coder
                </div>
              </div>
            </div>

            {/* Photo */}
            <div ref={imageRef} className="relative">
              {/* Decorative frame lines */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-purple-500/50 rounded-tl-xl pointer-events-none z-10" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-pink-500/50 rounded-br-xl pointer-events-none z-10" />

              {/* Glow behind image */}
              <div className="absolute inset-4 bg-gradient-to-br from-purple-600/30 to-pink-600/20 rounded-2xl blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
                <img
                  src={profileImg}
                  alt="Laura Cordeiro"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700"
                  style={{ maxHeight: '280px', objectPosition: 'top' }}
                />
                {/* Subtle color grade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-purple-900/20 mix-blend-multiply" />
                {/* Bottom shine on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating badge — Code2 */}
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-xl shadow-purple-500/30 rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 z-20 cursor-default">
                <Code2 className="w-4.5 h-4.5 text-white" style={{ width: '1.1rem', height: '1.1rem' }} />
              </div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl shadow-pink-500/30 -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 z-20 cursor-default">
                <Rocket className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-3">
              {[
                { value: '3+', label: 'Anos Acadêmicos' },
                { value: '1+', label: 'Ano Profissional' },
                { value: '10+', label: 'Tecnologias' },
              ].map((s) => (
                <div key={s.label} className="stat-item flex-1 bg-white/[0.03] border border-white/[0.07] rounded-xl px-3 py-2.5 text-center hover:border-purple-500/30 transition-colors duration-300">
                  <div className="text-xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.value}</div>
                  <div className="text-[10px] text-gray-500 leading-tight mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div className="self-stretch bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

          {/* ── RIGHT: Bio + Contact ── */}
          <div ref={rightRef} className="pl-8 lg:pl-12 flex flex-col gap-5">

            {/* Bio blocks */}
            <div className="space-y-4">
              {[
                {
                  icon: Sparkles,
                  iconColor: 'text-purple-400',
                  title: 'Sobre Mim',
                  text: <>Olá! Sou <span className="text-purple-400 font-semibold">Laura Cordeiro</span>, uma desenvolvedora fullstack apaixonada por criar experiências digitais que <span className="text-pink-400 font-semibold">surpreendem</span> e <span className="text-purple-400 font-semibold">encantam</span>. Minha missão é transformar ideias em interfaces interativas que superam expectativas.</>,
                },
                {
                  icon: Code2,
                  iconColor: 'text-pink-400',
                  title: 'Minha Jornada',
                  text: <>Com experiência em <span className="text-purple-400 font-semibold">React, TypeScript, GSAP e Three.js</span>, especializo-me em construir aplicações web modernas com animações avançadas. Acredito que código bem escrito é uma forma de arte — cada projeto é uma oportunidade de <span className="text-pink-400 font-semibold">criar algo único</span>.</>,
                },
                {
                  icon: Heart,
                  iconColor: 'text-pink-400',
                  title: 'O Que Me Move',
                  text: <>Adoro desafios que me permitem explorar os <span className="text-purple-400 font-semibold">limites do que é possível</span> na web. Seja criando animações imersivas ou otimizando performance, estou sempre em busca de <span className="text-pink-400 font-semibold">inovação e excelência</span>.</>,
                },
              ].map((block) => {
                const Icon = block.icon;
                return (
                  <div key={block.title} className="bio-block group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className={`w-4 h-4 ${block.iconColor} flex-shrink-0`} />
                      <h3 className="text-sm font-bold text-white tracking-wide uppercase">{block.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed pl-6">{block.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Thin separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Contact chips — compact horizontal list */}
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold mb-2">Contato</div>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isCopied = copiedIndex === index;
                return (
                  <div
                    key={info.label}
                    className="contact-chip flex items-center gap-3 group px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    {/* Color dot */}
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${info.accent}40, ${info.accent}20)`, border: `1px solid ${info.accent}30` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: info.accent }} />
                    </div>

                    {/* Label + value */}
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium w-16 flex-shrink-0">{info.label}</span>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-xs text-gray-300 hover:text-white transition-colors truncate font-medium"
                        >
                          {info.displayValue}
                        </a>
                      ) : (
                        <span className="text-xs text-gray-300 truncate font-medium">{info.displayValue}</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {info.href && (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                          <Send className="w-2.5 h-2.5 text-white/70" />
                        </a>
                      )}
                      <button
                        onClick={() => handleCopy(info.value, index)}
                        className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      >
                        {isCopied
                          ? <Check className="w-2.5 h-2.5 text-green-400" />
                          : <Copy className="w-2.5 h-2.5 text-white/70" />
                        }
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(48px); }
        }
      `}</style>
    </section>
  );
}