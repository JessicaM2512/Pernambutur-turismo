import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina Silva",
    location: "São Paulo – SP",
    avatar: "A",
    rating: 5,
    text: "Passeio incrível! A van era muito confortável e o guia super atencioso. As piscinas naturais de Porto de Galinhas são de encher os olhos. Já estou planejando a próxima viagem com a Pernambutur!",
    tour: "Porto de Galinhas",
    date: "Janeiro 2025",
  },
  {
    name: "Carlos Eduardo",
    location: "Rio de Janeiro – RJ",
    avatar: "C",
    rating: 5,
    text: "Super recomendo! Fomos de veiculo privativo, muito limpo e confortável. O guia conhece todos os pontos turísticos e nos mostrou lugares incríveis que não encontramos nas pesquisas.",
    tour: "Porto de Galinhas",
    date: "Janeiro 2025",
  },
  {
    name: "Roberto Mendes",
    location: "Belo Horizonte – MG",
    avatar: "R",
    rating: 5,
    text: "Fui com toda a família para Praia dos Carneiros e foi uma experiência mágica. A van era excelente e muito espaço para as crianças. A Capelinha de São Benedito é linda de mais!",
    tour: "Praia dos Carneiros",
    date: "Dezembro 2024",
  },
  {
    name: "Patrícia Almeida",
    location: "Brasília – DF",
    avatar: "P",
    rating: 5,
    text: "Que dia incrível! A Praia dos Carneiros superou todas as expectativas. O veículo privativo foi fundamental para curtir o dia com tranquilidade. O guia organizou tudo perfeitamente.",
    tour: "Praia dos Carneiros",
    date: "Dezembro 2024",
  },
  {
    name: "Paulo Rodrigues",
    location: "Fortaleza – CE",
    avatar: "P",
    rating: 5,
    text: "Excelente atendimento desde o primeiro contato até o final. Itamaracá é linda e ver os peixes-boi de perto foi emocionante. O veículo era super confortável. Voltarei com certeza!",
    tour: "Itamaracá",
    date: "Agosto 2024",
  },
  {
    name: "Mariana Souza",
    location: "Natal – RN",
    avatar: "M",
    rating: 5,
    text: "João Pessoa é um show à parte! O pôr do sol no Mirante do Jangadeiro é indescritível. A Pernambutur organizou tudo perfeitamente. Recomendo demais!",
    tour: "João Pessoa",
    date: "Setembro 2024",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-ocean relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-turquoise blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sun blur-3xl" />
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-14 pt-8">
          <span className="inline-block bg-white/10 text-sun font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-white/20">
            ⭐ Depoimentos Reais
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            O que nossos Viajantes Dizem
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Mais de 500 famílias já viveram experiências inesquecíveis com a Pernambutur Turismo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-sun/60 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-sun text-sun" />
                ))}
              </div>

              <p className="text-white/90 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                <div className="w-10 h-10 rounded-full bg-gradient-ocean flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/60 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sun text-xs font-medium">{t.tour}</p>
                  <p className="text-white/40 text-xs">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" fill="hsl(38 60% 98%)" />
        </svg>
      </div>
    </section>
  );
}
