/*
 * FANEOB Eventos & Campeonatos Section
 * Design: Timeline layout with trophy cards and upcoming events
 * Colors: White background, blue timeline, gold trophies
 */
import { useEffect, useRef, useState } from "react";
import { Trophy, Calendar, MapPin, Star, Medal } from "lucide-react";

const campeonatos = [
  {
    ano: "2024",
    titulo: "1º Lugar — Festival Estadual de Bandas",
    local: "Ginásio Municipal, Capital",
    descricao: "Melhor performance na categoria Fanfarra Completa com nota máxima nos quesitos musicalidade e coreografia.",
    medalha: "ouro",
    destaque: true,
  },
  {
    ano: "2023",
    titulo: "2º Lugar — Campeonato Nacional",
    local: "Estádio Nacional, Brasília – DF",
    descricao: "Representamos o estado com honra, conquistando o vice-campeonato nacional com uma apresentação memorável.",
    medalha: "prata",
    destaque: false,
  },
  {
    ano: "2023",
    titulo: "1º Lugar — Festival Regional Norte",
    local: "Centro de Convenções, Belém – PA",
    descricao: "Campeões regionais com pontuação recorde, destacando-se na percussão e na linha de frente.",
    medalha: "ouro",
    destaque: false,
  },
  {
    ano: "2022",
    titulo: "3º Lugar — Campeonato Brasileiro",
    local: "Arena Multiuso, São Paulo – SP",
    descricao: "Excelente participação no campeonato mais importante do país, garantindo o pódio nacional.",
    medalha: "bronze",
    destaque: false,
  },
  {
    ano: "2022",
    titulo: "1º Lugar — Festival Municipal",
    local: "Praça Central, Cidade Natal",
    descricao: "Vitória em casa com o apoio de toda a comunidade. Uma celebração inesquecível.",
    medalha: "ouro",
    destaque: false,
  },
  {
    ano: "2021",
    titulo: "Melhor Percussão — Festival Estadual",
    local: "Parque de Exposições, Interior",
    descricao: "Prêmio especial de melhor seção de percussão, reconhecendo o trabalho técnico da equipe.",
    medalha: "especial",
    destaque: false,
  },
];

const proximosEventos = [
  {
    data: { dia: "15", mes: "Abr" },
    titulo: "Desfile Cívico do Município",
    local: "Av. Principal, Centro",
    tipo: "Desfile",
    cor: "bg-blue-600",
  },
  {
    data: { dia: "28", mes: "Abr" },
    titulo: "Festival Interescolar de Bandas",
    local: "Ginásio Municipal",
    tipo: "Competição",
    cor: "bg-amber-500",
  },
  {
    data: { dia: "10", mes: "Mai" },
    titulo: "Apresentação Dia das Mães",
    local: "Auditório do Educandário",
    tipo: "Show",
    cor: "bg-pink-500",
  },
  {
    data: { dia: "07", mes: "Set" },
    titulo: "Desfile de Independência",
    local: "Av. Cívica, Centro",
    tipo: "Desfile",
    cor: "bg-green-600",
  },
];

const medalhaConfig = {
  ouro: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300", label: "Ouro", icon: "🥇" },
  prata: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-300", label: "Prata", icon: "🥈" },
  bronze: { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-300", label: "Bronze", icon: "🥉" },
  especial: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-300", label: "Especial", icon: "⭐" },
};

export default function EventosSection() {
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
    <section id="eventos" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-4">
            <Trophy size={12} className="text-amber-600" />
            <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase">
              Conquistas & Agenda
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-3">
            Eventos e Campeonatos
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Uma trajetória de conquistas e participações que marcam a história da FANEOB.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Timeline de campeonatos */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Medal size={18} className="text-blue-700" />
              <h3 className="font-display text-2xl text-slate-900">Histórico de Conquistas</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-300 to-transparent" />

              <div className="space-y-5">
                {campeonatos.map((c, i) => {
                  const m = medalhaConfig[c.medalha as keyof typeof medalhaConfig];
                  return (
                    <div
                      key={i}
                      className={`relative pl-14 transition-all duration-500 ${
                        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                      style={{ transitionDelay: `${200 + i * 80}ms` }}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-0 top-3 w-11 h-11 rounded-full border-2 ${m.border} ${m.bg} flex items-center justify-center text-lg shadow-sm`}
                      >
                        {m.icon}
                      </div>

                      <div
                        className={`p-4 rounded-2xl border transition-all duration-200 card-hover ${
                          c.destaque
                            ? "bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200 shadow-md"
                            : "bg-slate-50 border-slate-100 hover:border-blue-100"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h4 className="font-semibold text-slate-800 text-sm leading-snug">
                            {c.titulo}
                          </h4>
                          <span
                            className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${m.bg} ${m.text}`}
                          >
                            {c.ano}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <MapPin size={11} className="text-slate-400" />
                          <span className="text-slate-400 text-xs">{c.local}</span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed">{c.descricao}</p>
                        {c.destaque && (
                          <div className="flex items-center gap-1 mt-2">
                            <Star size={11} className="text-amber-500 fill-amber-500" />
                            <span className="text-amber-600 text-xs font-semibold">Destaque da temporada</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Próximos eventos */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Calendar size={18} className="text-blue-700" />
              <h3 className="font-display text-2xl text-slate-900">Próximos Eventos</h3>
            </div>

            <div className="space-y-3">
              {proximosEventos.map((e, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 card-hover"
                >
                  {/* Date badge */}
                  <div className={`shrink-0 w-12 h-14 rounded-xl ${e.cor} flex flex-col items-center justify-center text-white shadow-sm`}>
                    <span className="text-lg font-bold leading-none">{e.data.dia}</span>
                    <span className="text-xs font-medium uppercase">{e.data.mes}</span>
                  </div>
                  {/* Info */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {e.tipo}
                      </span>
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm leading-snug mb-1">
                      {e.titulo}
                    </h4>
                    <div className="flex items-center gap-1">
                      <MapPin size={11} className="text-slate-400 shrink-0" />
                      <span className="text-slate-400 text-xs truncate">{e.local}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner image */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462211974/BG3VqwJS2vUUUzK8Ut7ggS/faneob-campeonato-BWR6qmGybXhF6DJ3ahG8ib.webp"
                alt="Campeonato FANEOB"
                className="w-full h-40 object-cover"
              />
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4">
                <p className="text-white text-sm font-medium">
                  🏆 Campeões Estaduais 2024
                </p>
                <p className="text-blue-200 text-xs mt-0.5">
                  Orgulho da nossa cidade e da nossa escola
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
