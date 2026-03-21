/*
 * FANEOB Sobre Section
 * Design: Asymmetric layout — image left, text right
 * Colors: White background, blue accents, gold highlights
 */
import { useEffect, useRef, useState } from "react";
import { Music, Award, Users, Heart } from "lucide-react";

const valores = [
  {
    icon: Music,
    title: "Excelência Musical",
    desc: "Ensino de qualidade em sopro, percussão e artes cênicas para jovens de todas as idades.",
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    desc: "A fanfarra é a arte do conjunto. Cada integrante é essencial para a harmonia do todo.",
  },
  {
    icon: Award,
    title: "Conquistas",
    desc: "Décadas de participação em campeonatos regionais e nacionais com resultados expressivos.",
  },
  {
    icon: Heart,
    title: "Formação Humana",
    desc: "Além da música, formamos cidadãos com disciplina, responsabilidade e amor pela arte.",
  },
];

export default function SobreSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462211974/BG3VqwJS2vUUUzK8Ut7ggS/faneob-performance-27UCtB4WgxTr9PrHhNFCAJ.webp"
                alt="FANEOB em apresentação"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <div className="font-display text-2xl text-blue-900">40+</div>
                <div className="text-slate-600 text-xs font-medium">Anos de tradição marcial</div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-amber-100 -z-10" />
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">
                Nossa História
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 leading-tight mb-5">
              Tradição, Música
              <span className="block text-blue-700">e Juventude</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              A FANEOB — Fanfarra do Educandário Oliveira Brito — é uma das mais tradicionais
              bandas marciais da região, com décadas de história dedicadas à formação musical
              e humana de jovens estudantes.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Fundada com o propósito de unir educação e arte, a FANEOB oferece um espaço
              de aprendizado, disciplina e expressão artística através da música marcial,
              preparando jovens para os palcos e para a vida.
            </p>

            {/* Valores grid */}
            <div className="grid grid-cols-2 gap-4">
              {valores.map((v) => (
                <div
                  key={v.title}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mb-3 transition-colors">
                    <v.icon size={18} className="text-blue-700" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-1">{v.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
