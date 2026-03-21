/*
 * FANEOB Oficinas Section
 * Design: Feature cards with gradient icons, image showcase
 * Colors: Soft gradient background, blue/gold accents
 */
import { useEffect, useRef, useState } from "react";
import { Music2, Drum, Flag, Sparkles, Clock, Users, CheckCircle } from "lucide-react";

const oficinas = [
  {
    icon: Music2,
    title: "Sopro",
    subtitle: "Instrumentos de Sopro",
    desc: "Aprenda a tocar trompete, trombone, tuba, clarinete e outros instrumentos de sopro. Aulas do básico ao avançado.",
    topics: ["Técnica de embocadura", "Leitura de partitura", "Teoria musical", "Prática em conjunto"],
    gradient: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50",
    border: "border-blue-100",
    textAccent: "text-blue-700",
  },
  {
    icon: Drum,
    title: "Percussão",
    subtitle: "Bateria & Percussão",
    desc: "Caixa, bumbo, tímpanos, lira e toda a família de percussão marcial. Desenvolva ritmo e precisão.",
    topics: ["Rudimentos básicos", "Ritmos marciais", "Coordenação motora", "Técnica de baqueta"],
    gradient: "from-amber-500 to-amber-700",
    bgLight: "bg-amber-50",
    border: "border-amber-100",
    textAccent: "text-amber-700",
  },
  {
    icon: Flag,
    title: "Linha de Frente",
    subtitle: "Bandeiras & Bastões",
    desc: "A arte de girar bandeiras, bastões e rifles com precisão e elegância. Expressão corporal e musicalidade.",
    topics: ["Técnica de giro", "Coreografia", "Expressão corporal", "Sincronização"],
    gradient: "from-emerald-500 to-emerald-700",
    bgLight: "bg-emerald-50",
    border: "border-emerald-100",
    textAccent: "text-emerald-700",
  },
  {
    icon: Sparkles,
    title: "Coreográfico",
    subtitle: "Dança & Performance",
    desc: "Movimento, dança e performance cênica integrados à música marcial. Arte, expressão e espetáculo.",
    topics: ["Dança contemporânea", "Teatro musical", "Expressão cênica", "Formações"],
    gradient: "from-purple-500 to-purple-700",
    bgLight: "bg-purple-50",
    border: "border-purple-100",
    textAccent: "text-purple-700",
  },
];

const infoCards = [
  { icon: Clock, label: "Horário", value: "Seg, Qua e Sex — 14h às 17h" },
  { icon: Users, label: "Faixa Etária", value: "A partir de 8 anos" },
  { icon: CheckCircle, label: "Gratuito", value: "Sem custo para alunos da escola" },
];

export default function OficinaSection() {
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
    <section id="oficinas" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-4">
            <Music2 size={12} className="text-emerald-700" />
            <span className="text-emerald-700 text-xs font-semibold tracking-widest uppercase">
              Ensino Musical
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-3">
            Oficinas e Formação
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Aprenda música marcial com profissionais experientes. Nossas oficinas são abertas
            a jovens com ou sem experiência prévia.
          </p>
        </div>

        {/* Info cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {infoCards.map((card) => (
            <div
              key={card.label}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <card.icon size={18} className="text-blue-700" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{card.label}</div>
                <div className="text-slate-800 text-sm font-semibold">{card.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Oficinas grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {oficinas.map((o, i) => (
            <div
              key={o.title}
              className={`rounded-3xl border ${o.border} ${o.bgLight} p-5 card-hover transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${o.gradient} flex items-center justify-center mb-4 shadow-md`}
              >
                <o.icon size={22} className="text-white" />
              </div>
              <h3 className={`font-display text-2xl ${o.textAccent} mb-0.5`}>{o.title}</h3>
              <p className="text-slate-500 text-xs font-medium mb-3">{o.subtitle}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{o.desc}</p>
              <ul className="space-y-1.5">
                {o.topics.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${o.gradient}`} />
                    <span className="text-slate-600 text-xs">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom image + CTA */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462211974/BG3VqwJS2vUUUzK8Ut7ggS/faneob-ensaio-oJsRK9gZncYa3j5un8emAs.webp"
            alt="Ensaio da FANEOB"
            className="w-full h-56 lg:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 lg:p-14">
            <div className="max-w-lg">
              <h3 className="font-display text-3xl lg:text-4xl text-white mb-3">
                Comece sua jornada musical hoje
              </h3>
              <p className="text-blue-100 text-sm lg:text-base mb-6 leading-relaxed">
                Não é preciso ter experiência prévia. Nossas oficinas são abertas a todos
                os jovens que desejam aprender e fazer parte desta família.
              </p>
              <button
                onClick={() => {
                  const el = document.querySelector("#inscricao");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-amber-400/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                Inscrever-se nas Oficinas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
