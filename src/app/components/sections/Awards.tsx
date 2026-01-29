import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Trophy, FileText, ExternalLink, Download, Sparkles, Star, Rocket, Image as ImageIcon, X } from 'lucide-react';
import cobemPhoto from '../../../assets/cobemLaura.jpg';
import cobemCertificate from '../../../assets/cobemCertificated.jpg';

const awards = [
  {
    id: 1,
    title: 'INFRARED VEIN DETECTION SYSTEM FOR DIABETIC FOOT MONITORING',
    year: '2025',
    type: 'Artigo Internacional',
    description: 'Artigo apresentado e pré-publicado no 28º Congresso Internacional de Engenharia Mecânica (COBEM 25)',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-600',
    images: [
      { src: cobemPhoto, alt: 'Apresentação no COBEM 2025' },
      { src: cobemCertificate, alt: 'Certificado de apresentação' }
    ],
    highlight: true
  },
  {
    id: 2,
    title: 'TUTORIA DA REDE ASA: A REDE DE APOIO AOS DISCENTES',
    year: '2023',
    type: 'Resumo Expandido',
    description: 'Resumo Expandido publicado nos Anais do II Encontro de Ensino, Cultura e Sociedade (ENECS)',
    icon: FileText,
    color: 'from-purple-500 to-pink-600',
    pdf: '/resumo-rede-asa.pdf', 
    hasDownload: true
  },
  {
    id: 3,
    title: '2º LUGAR - NASA SPACE APPS CHALLENGE',
    year: '2020',
    type: 'Premiação Regional',
    description: 'Segundo lugar na competição regional da NASA Space Apps Challenge',
    icon: Rocket,
    color: 'from-blue-500 to-indigo-600',
    externalLink: 'https://g1.globo.com/sp/sao-carlos-regiao/noticia/2020/10/19/alunas-do-8o-ano-da-rede-estadual-de-sao-carlos-ganham-2o-lugar-em-competicao-da-nasa.ghtml',
    hasExternalLink: true,
    highlight: true
  },
];

export default function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.award-card');
      
      gsap.fromTo(cards,
        { 
          opacity: 0,
          y: 30, // Reduzi a distância da animação
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }
  }, []);

  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl w-full relative z-10 h-full flex flex-col justify-center">
        
        {/* === TÍTULO REDUZIDO === */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-2">
            <Trophy className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] hidden md:block" />
            
            {/* Fonte reduzida de text-6xl para text-4xl/5xl */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent filter drop-shadow-sm">
                Premiações & Artigos
              </span>
            </h2>

            <Trophy className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] hidden md:block" />
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 font-medium text-xs md:text-sm">
            <Star className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
            <p>Conquistas acadêmicas e reconhecimentos</p>
            <Star className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
          </div>
        </div>

        {/* === LISTA DE CARDS COMPACTA === */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-3 md:gap-4 w-full max-w-3xl mx-auto max-h-[calc(100vh-180px)] overflow-y-auto px-2 pb-4 scrollbar-hide"
        >
          {awards.map((award) => {
            const Icon = award.icon;
            return (
              <div
                key={award.id}
                className={`award-card group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 md:p-5 overflow-hidden shadow-xl transition-all duration-300 ${
                  hoveredCard === award.id 
                    ? 'border-white/30 transform -translate-y-0.5' 
                    : 'border-white/10'
                } ${award.highlight ? 'ring-1 ring-white/10' : ''}`}
                onMouseEnter={() => setHoveredCard(award.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${award.color} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500`} />
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${award.color}`} />

                <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
                  {/* Icon Box Compacto */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-500`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                       <span className={`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold bg-gradient-to-r ${award.color} text-white shadow-sm`}>
                        {award.year}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] md:text-xs font-medium text-gray-300 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                        <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
                        {award.type}
                      </span>
                    </div>

                    {/* Título menor */}
                    <h3 className="text-base md:text-lg font-black text-white mb-1.5 leading-snug group-hover:text-gray-200 transition-colors">
                      {award.title}
                    </h3>

                    {/* Descrição menor */}
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 md:line-clamp-none">
                      {award.description}
                    </p>

                    {/* Actions Area Compacta */}
                    <div className="flex flex-wrap items-center gap-2">
                      {award.images && award.images.length > 0 && (
                        <div className="flex gap-1.5 mr-1">
                          {award.images.map((image, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleImageClick(image)}
                              className="relative w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden border border-white/20 hover:border-yellow-400 transition-colors duration-300"
                            >
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}

                      {award.hasDownload && (
                        <a
                          href={award.pdf}
                          download
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-xs font-medium transition-all hover:scale-105"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Baixar PDF
                        </a>
                      )}

                      {award.hasExternalLink && (
                        <a
                          href={award.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-lg text-blue-200 text-xs font-medium transition-all hover:scale-105"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Ver Notícia
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:rotate-90"
          >
            <X className="w-4 h-4" />
          </button>

          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <style>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
      `}</style>
    </section>
  );
}