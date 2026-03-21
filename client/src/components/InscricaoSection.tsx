/*
 * FANEOB Inscrição Section
 * Design: Split layout — info left, form right
 * Colors: Deep blue gradient background, white form card
 */
import { useEffect, useRef, useState } from "react";
import { Music2, Drum, Flag, Sparkles, Send, CheckCircle2 } from "lucide-react";

const naipes = [
  { id: "sopro", icon: Music2, label: "Sopro", desc: "Trompete, trombone, tuba, clarinete...", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { id: "percussao", icon: Drum, label: "Percussão", desc: "Caixa, bumbo, tímpanos, lira...", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { id: "frente", icon: Flag, label: "Linha de Frente", desc: "Bandeiras, bastões, rifles...", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { id: "coreografico", icon: Sparkles, label: "Coreográfico", desc: "Dança, performance, expressão...", color: "bg-purple-100 text-purple-700 border-purple-200" },
];

const beneficios = [
  "Aulas gratuitas com profissionais experientes",
  "Uniforme fornecido pela escola",
  "Participação em eventos e campeonatos",
  "Certificado de formação musical",
  "Desenvolvimento pessoal e disciplina",
  "Integração com jovens de toda a cidade",
];

export default function InscricaoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedNaipe, setSelectedNaipe] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    idade: "",
    experiencia: "",
    mensagem: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNaipe || !form.nome || !form.email) return;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="inscricao"
      className="py-20 lg:py-28 gradient-brand relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-xs font-semibold tracking-widest uppercase">
              Vagas Abertas
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-3">
            Faça Parte da FANEOB
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Escolha seu naipe e preencha o formulário. Nossa equipe entrará em contato
            para confirmar sua inscrição.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Naipes */}
            <h3 className="font-display text-2xl text-white mb-5">Escolha seu Naipe</h3>
            <div className="space-y-3 mb-8">
              {naipes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNaipe(n.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 text-left ${
                    selectedNaipe === n.id
                      ? "bg-white shadow-lg scale-[1.02]"
                      : "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      selectedNaipe === n.id ? n.color : "bg-white/20 text-white border-white/20"
                    } border`}
                  >
                    <n.icon size={18} />
                  </div>
                  <div>
                    <div
                      className={`font-semibold text-sm ${
                        selectedNaipe === n.id ? "text-slate-800" : "text-white"
                      }`}
                    >
                      {n.label}
                    </div>
                    <div
                      className={`text-xs ${
                        selectedNaipe === n.id ? "text-slate-500" : "text-blue-200"
                      }`}
                    >
                      {n.desc}
                    </div>
                  </div>
                  {selectedNaipe === n.id && (
                    <CheckCircle2 size={18} className="ml-auto text-blue-600 shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Benefícios */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-5">
              <h4 className="text-white font-semibold text-sm mb-3">O que você ganha:</h4>
              <ul className="space-y-2">
                {beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-blue-100 text-xs leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl text-slate-900 mb-2">
                    Inscrição Enviada!
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                    Recebemos sua inscrição para o naipe de{" "}
                    <strong className="text-blue-700">
                      {naipes.find((n) => n.id === selectedNaipe)?.label}
                    </strong>
                    . Nossa equipe entrará em contato em breve.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ nome: "", email: "", telefone: "", idade: "", experiencia: "", mensagem: "" }); setSelectedNaipe(""); }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium transition-colors"
                  >
                    Nova Inscrição
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-display text-2xl text-slate-900 mb-1">
                      Formulário de Inscrição
                    </h3>
                    <p className="text-slate-400 text-xs">
                      Preencha todos os campos obrigatórios (*)
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Idade *
                      </label>
                      <input
                        type="number"
                        name="idade"
                        value={form.idade}
                        onChange={handleChange}
                        required
                        min="8"
                        max="99"
                        placeholder="Sua idade"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Naipe de Interesse *
                    </label>
                    <select
                      name="naipe"
                      value={selectedNaipe}
                      onChange={(e) => setSelectedNaipe(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all bg-white"
                    >
                      <option value="" disabled>Selecione um naipe</option>
                      {naipes.map((n) => (
                        <option key={n.id} value={n.id}>{n.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Experiência Musical
                    </label>
                    <select
                      name="experiencia"
                      value={form.experiencia}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all bg-white"
                    >
                      <option value="">Selecione seu nível</option>
                      <option value="nenhuma">Nenhuma experiência</option>
                      <option value="basico">Básico (menos de 1 ano)</option>
                      <option value="intermediario">Intermediário (1-3 anos)</option>
                      <option value="avancado">Avançado (mais de 3 anos)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Conte um pouco sobre você e sua motivação..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-blue-600/30 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send size={16} />
                    Enviar Inscrição
                  </button>

                  <p className="text-center text-slate-400 text-xs">
                    Ao enviar, você concorda com nossos termos de uso e política de privacidade.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
