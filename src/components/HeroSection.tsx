import { ChevronDown, Star } from "lucide-react";
import heroBg from "@/assets/hero-beach.jpg";

const WHATSAPP_NUMBER = "5581983731827";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! 👋 Vim pelo site e quero informações sobre os passeios saindo de Recife. Quais valores e datas disponíveis?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="hsl(38 60% 98%)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-8">
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-3.5 h-3.5 fill-sun text-sun" />
            ))}
          </div>
          <span className="text-white text-sm font-medium">+500 viajantes satisfeitos</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-4xl mx-auto">
          Descubra as Praias Mais Lindas de{" "}
          <span className="text-sun">Pernambuco</span>
          {" "}com Transfer Incluso!
        </h1>

        {/* Subheadline */}
        <p className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Passeios, transfers e tours saindo de Recife com guias experientes,
          atendimento personalizado e o melhor custo-benefício do Nordeste.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-white/80">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-whatsapp inline-block" />
            Transfer incluído
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sun inline-block" />
            Guias experientes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-turquoise inline-block" />
            Saída garantida
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 animate-pulse-soft"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Reserve pelo WhatsApp
          </a>
          <a
            href="#passeios"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full border border-white/40 transition-all duration-200"
          >
            Ver Passeios
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
}
