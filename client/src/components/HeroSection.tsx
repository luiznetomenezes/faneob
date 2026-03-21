/*
 * FANEOB Hero Section
 * Design: Full-screen gradient hero with brasão, name and mission
 * Colors: Deep blue gradient background, white text, gold accents
 * Animation: Fade-in on load, subtle floating brasão
 */
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663462211974/BG3VqwJS2vUUUzK8Ut7ggS/faneob-hero-bg-9bLEM6Dfq2qPx9BfcZ8hEu.webp)`,
        }}
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/70 to-blue-950/90" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-400/10 animate-pulse"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              top: `${10 + i * 14}%`,
              left: `${5 + i * 16}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Brasão */}
        <div
          className={`flex justify-center mb-6 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-2xl scale-150" />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462211974/BG3VqwJS2vUUUzK8Ut7ggS/faneob-brasao-W4oa59ejQcuFrxEgZak3Xg.png"
              alt="Brasão da FANEOB"
              className="relative h-36 w-36 md:h-48 md:w-48 object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 0 24px rgba(251,191,36,0.4))" }}
            />
          </div>
        </div>

        {/* Name */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-xs font-semibold tracking-widest uppercase">
              Desde 1985 · Educandário Oliveira Brito
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-2">
            FANEOB
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-light tracking-wide mb-2">
            Fanfarra do Educandário Oliveira Brito
          </p>
        </div>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-3 my-6 transition-all duration-1000 delay-400 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/60" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/60" />
        </div>

        {/* Mission */}
        <p
          className={`text-blue-100/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Formando músicos, construindo futuros. Através da música marcial, desenvolvemos
          disciplina, trabalho em equipe e excelência artística em jovens talentos.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-1000 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => {
              const el = document.querySelector("#inscricao");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-amber-400/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            Quero Fazer Parte
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#destaques");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            Conhecer a Banda
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { value: "40+", label: "Anos de História" },
            { value: "200+", label: "Músicos Formados" },
            { value: "15+", label: "Títulos Conquistados" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-amber-400">{stat.value}</div>
              <div className="text-blue-200 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
