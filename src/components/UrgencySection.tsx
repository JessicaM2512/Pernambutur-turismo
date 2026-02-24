import { Flame, Users, Clock, Tag } from "lucide-react";

const WHATSAPP_NUMBER = "5581983731827";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! 👋 Vi que há vagas limitadas e quero garantir minha reserva agora! Quais passeios têm disponibilidade?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function UrgencySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-coral via-coral to-orange-500 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-sun blur-3xl" />
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="hsl(38 60% 98%)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-5 py-2 rounded-full mb-8 border border-white/30">
          <Flame className="w-4 h-4 fill-white" />
          OFERTA ESPECIAL – VAGAS LIMITADAS!
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
          🚨 Últimas Vagas Disponíveis!
          <br />
          <span className="text-sun">Não Perca essa Oportunidade</span>
        </h2>

        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
          Nossa agenda tem capacidade limitada. Grupos formam-se rapidamente
          e as melhores datas se esgotam logo. Garanta já a sua vaga!
        </p>

        {/* Urgency cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-5 text-white">
            <Users className="w-8 h-8 mx-auto mb-3 text-sun" />
            <p className="font-display font-bold text-lg">Grupos Formados</p>
            <p className="text-white/80 text-sm mt-1">Saídas garantidas todo final de semana</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-5 text-white">
            <Tag className="w-8 h-8 mx-auto mb-3 text-sun" />
            <p className="font-display font-bold text-lg">Descontos Especiais</p>
            <p className="text-white/80 text-sm mt-1">Para grupos e reservas antecipadas</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-5 text-white">
            <Clock className="w-8 h-8 mx-auto mb-3 text-sun" />
            <p className="font-display font-bold text-lg">Reserve com Antecedência</p>
            <p className="text-white/80 text-sm mt-1">Garanta a melhor data e menor preço</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-black text-xl px-12 py-5 rounded-full transition-all duration-200 shadow-2xl hover:scale-105 animate-pulse-soft"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          GARANTIR MINHA VAGA AGORA!
        </a>

        <p className="text-white/70 text-sm mt-4">
          ⚡ Atendimento rápido • Sem taxas de reserva • Pagamento facilitado
        </p>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" fill="hsl(211 70% 30%)" />
        </svg>
      </div>
    </section>
  );
}
