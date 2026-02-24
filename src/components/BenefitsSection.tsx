import { MessageCircle, Shield, Users, Star, Heart, Clock, Award, Map } from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Atendimento Rápido pelo WhatsApp",
    description: "Respondemos em minutos! Tire todas as dúvidas e reserve com facilidade direto no WhatsApp.",
    color: "whatsapp",
  },
  {
    icon: Shield,
    title: "Transfer Seguro e Inclusivo",
    description: "Veículos confortáveis e motoristas experientes. Buscamos você e levamos de volta.",
    color: "ocean",
  },
  {
    icon: Users,
    title: "Guias Turísticos Experientes",
    description: "Nossos guias conhecem cada detalhe dos destinos e tornam sua experiência inesquecível.",
    color: "turquoise",
  },
  {
    icon: Award,
    title: "Cadastur Regularizado",
    description: "Agência devidamente registrada no Cadastur, garantindo sua segurança e tranquilidade.",
    color: "sun",
  },
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Cada viajante é único. Adaptamos o passeio às suas necessidades e preferências.",
    color: "coral",
  },
  {
    icon: Clock,
    title: "Pontualidade Garantida",
    description: "Respeitamos seu tempo. Horários cumpridos rigorosamente para máximo aproveitamento.",
    color: "turquoise",
  },
  {
    icon: Star,
    title: "+500 Avaliações 5 Estrelas",
    description: "Centenas de viajantes satisfeitos recomendam a Pernambutur. Sua satisfação é nossa prioridade.",
    color: "sun",
  },
  {
    icon: Map,
    title: "Roteiros Exclusivos",
    description: "Itinerários elaborados para você aproveitar o máximo de cada destino sem estresse.",
    color: "ocean",
  },
];

const colorMap: Record<string, string> = {
  whatsapp: "bg-whatsapp/10 text-whatsapp",
  ocean: "bg-ocean/10 text-ocean",
  turquoise: "bg-turquoise/10 text-turquoise",
  sun: "bg-sun/10 text-ocean",
  coral: "bg-coral/10 text-coral",
};

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-sand to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-ocean/10 text-ocean font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            🏆 Por que nos escolher?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ocean mb-4">
            Diferenciais que Fazem a Diferença
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sua viagem merece o melhor. Veja por que somos a escolha número 1 para passeios em Pernambuco.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-card-custom hover:shadow-card-hover-custom transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${colorMap[benefit.color] || "bg-ocean/10 text-ocean"}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-base text-ocean mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-14 bg-gradient-ocean rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Clientes Satisfeitos" },
            { value: "7", label: "Destinos Exclusivos" },
            { value: "5★", label: "Avaliação Média" },
            { value: "10+", label: "Anos de Experiência" },
          ].map((stat) => (
            <div key={stat.label} className="text-white">
              <p className="font-display font-black text-3xl md:text-4xl text-sun">{stat.value}</p>
              <p className="text-white/80 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
