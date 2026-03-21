/*
 * FANEOB Destaques Section
 * Design: Mixed grid — featured video + news cards
 * Colors: Light gray background, blue/gold accents
 */
import { useEffect, useRef, useState } from "react";
import { Play, Newspaper, Clock, ArrowRight } from "lucide-react";

const videos = [
  {
    id: "featured",
    title: "FANEOB no Campeonato Estadual 2024",
    desc: "Apresentação completa da nossa banda no maior campeonato do estado. Uma performance inesquecível!",
    thumb: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462211974/BG3VqwJS2vUUUzK8Ut7ggS/faneob-campeonato-BWR6qmGybXhF6DJ3ahG8ib.webp",
    duration: "12:34",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Destaque",
  },
  {
    id: "v2",
    title: "Desfile de 7 de Setembro 2024",
    desc: "Nossa participação no desfile cívico com toda a formação.",
    thumb: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462211974/BG3VqwJS2vUUUzK8Ut7ggS/faneob-performance-27UCtB4WgxTr9PrHhNFCAJ.webp",
    duration: "8:20",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Evento",
  },
  {
    id: "v3",
    title: "Ensaio Aberto — Temporada 2025",
    desc: "Veja como funciona nosso processo de ensaio e preparação.",
    thumb: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462211974/BG3VqwJS2vUUUzK8Ut7ggS/faneob-ensaio-oJsRK9gZncYa3j5un8emAs.webp",
    duration: "6:45",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Bastidores",
  },
];

const noticias = [
  {
    id: "n1",
    title: "FANEOB conquista 1º lugar no Festival Regional de Bandas",
    date: "15 Mar 2025",
    category: "Conquista",
    excerpt: "Com uma apresentação impecável, a FANEOB levou o troféu de ouro na categoria Fanfarra Completa.",
    color: "bg-amber-50 border-amber-200",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    id: "n2",
    title: "Inscrições abertas para a temporada 2025",
    date: "10 Jan 2025",
    category: "Inscrições",
    excerpt: "Vagas disponíveis para sopro, percussão, linha de frente e coreográfico. Venha fazer parte!",
    color: "bg-blue-50 border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "n3",
    title: "Oficina de percussão recebe 30 novos alunos",
    date: "5 Fev 2025",
    category: "Oficinas",
    excerpt: "A nova turma de percussão iniciou suas atividades com muito entusiasmo e dedicação.",
    color: "bg-green-50 border-green-200",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    id: "n4",
    title: "FANEOB representa o estado no Nacional",
    date: "20 Nov 2024",
    category: "Campeonato",
    excerpt: "Nossa banda foi selecionada para representar o estado no Campeonato Nacional de Fanfarras.",
    color: "bg-purple-50 border-purple-200",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

function VideoCard({ video, featured = false }: { video: typeof videos[0]; featured?: boolean }) {
  const [playing, setPlaying] = useState(false);

  if (featured) {
    return (
      <div className="relative rounded-3xl overflow-hidden shadow-xl group card-hover">
        {playing ? (
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={video.thumb}
              alt={video.title}
              className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group/btn"
              aria-label="Reproduzir vídeo"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center transition-all duration-200 group-hover/btn:scale-110 group-hover/btn:bg-white/30">
                <Play size={24} className="text-white ml-1" fill="white" />
              </div>
            </button>
            <div className="absolute top-4 left-4">
              <span className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                {video.tag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={12} className="text-blue-200" />
                <span className="text-blue-200 text-xs">{video.duration}</span>
              </div>
              <h3 className="font-display text-xl text-white leading-tight mb-1">{video.title}</h3>
              <p className="text-blue-100/80 text-sm line-clamp-2">{video.desc}</p>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group card-hover bg-white">
      {playing ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <div className="relative aspect-video overflow-hidden">
            <img
              src={video.thumb}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-950/40" />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Reproduzir vídeo"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Play size={16} className="text-white ml-0.5" fill="white" />
              </div>
            </button>
            <span className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {video.tag}
            </span>
            <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-md">
              {video.duration}
            </span>
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-slate-800 text-sm leading-snug">{video.title}</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default function DestaquesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="destaques" className="py-20 lg:py-28 bg-slate-50" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <Play size={12} className="text-blue-700" />
            <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">
              Vídeos & Notícias
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-3">
            Conteúdos em Destaque
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Acompanhe as apresentações, bastidores e novidades da FANEOB.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Featured video — spans 2 cols */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <VideoCard video={videos[0]} featured />
          </div>

          {/* Side videos */}
          <div
            className={`flex flex-col gap-4 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {videos.slice(1).map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="divider-gold my-10" />

        {/* News section */}
        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Newspaper size={18} className="text-blue-700" />
              <h3 className="font-display text-2xl text-slate-900">Últimas Notícias</h3>
            </div>
            <button className="flex items-center gap-1 text-blue-700 text-sm font-medium hover:text-blue-900 transition-colors">
              Ver todas <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {noticias.map((n) => (
              <div
                key={n.id}
                className={`p-4 rounded-2xl border ${n.color} card-hover cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${n.tagColor}`}>
                    {n.category}
                  </span>
                  <span className="text-slate-400 text-xs">{n.date}</span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm leading-snug mb-2">
                  {n.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{n.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
