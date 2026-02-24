import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/pernambutur-logo.jpeg";

const WHATSAPP_NUMBER = "5581983731827";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! 👋 Vim pelo site e quero informações sobre os passeios saindo de Recife. Quais valores e datas disponíveis?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Passeios", href: "#passeios" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Como Funciona", href: "#como-funciona" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ocean shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Pernambutur Turismo"
            className="h-12 w-12 rounded-full object-cover border-2 border-sun"
          />
          <div className="hidden sm:block">
            <p className="font-display font-bold text-lg leading-none text-white">Pernambutur</p>
            <p className="text-sun text-xs font-medium">Turismo e Receptivo</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-sun font-medium transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-5 py-2.5 rounded-full transition-all duration-200 text-sm shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Phone className="w-4 h-4" />
          Reserve pelo WhatsApp
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ocean border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-sun font-medium py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-whatsapp text-white font-bold px-5 py-3 rounded-full mt-2"
          >
            <Phone className="w-4 h-4" />
            Reserve pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
