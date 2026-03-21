/*
 * FANEOB Navbar
 * Design: Minimalist Vibrant — sticky nav with blur backdrop
 * Colors: White bg with blue text, gold CTA button
 * Font: DM Serif Display for brand name, DM Sans for links
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Destaques", href: "#destaques" },
  { label: "Eventos", href: "#eventos" },
  { label: "Oficinas", href: "#oficinas" },
  { label: "Inscrição", href: "#inscricao" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8 max-w-7xl">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-2 group"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462211974/BG3VqwJS2vUUUzK8Ut7ggS/faneob-brasao-W4oa59ejQcuFrxEgZak3Xg.png"
            alt="Brasão FANEOB"
            className="h-9 w-9 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-display text-base font-normal tracking-wide transition-colors ${
                scrolled ? "text-slate-800" : "text-white"
              }`}
            >
              FANEOB
            </span>
            <span
              className={`text-[10px] font-medium tracking-wider uppercase transition-colors ${
                scrolled ? "text-slate-500" : "text-blue-100"
              }`}
            >
              Fanfarra
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 ${
                scrolled
                  ? "text-slate-700 hover:text-blue-700"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#inscricao")}
            className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold bg-amber-400 hover:bg-amber-500 text-slate-900 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Faça Parte
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-lg">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1 max-w-7xl">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#inscricao")}
              className="mt-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-amber-400 hover:bg-amber-500 text-slate-900 transition-all text-center"
            >
              Faça Parte da FANEOB
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
