import { Clock, Bus, MapPin, ArrowRight } from "lucide-react";
import portoGalinhas from "@/assets/porto-galinhas.jpg";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import maragogi from "@/assets/maragogi.jpg";
import ilhaSantoAleixo from "@/assets/ilha-santo-aleixo.jpg";
import itamaraca from "@/assets/itamaraca.jpg";
import Olinda from "@/assets/Olinda.jpg";
import recife from "@/assets/Marco-zero_recife_.jpg";
import joaoPessoa from "@/assets/joao-pessoa.jpg";
import praiaMilagres from "@/assets/praia-milagres.jpg";
import caboSantoAgostinho from "@/assets/cabo-santo-agostinho.jpg";
import pipaRn from "@/assets/pipa-rn.jpg";
import transfer from "@/assets/Transfer-Aeroporto.jpg";

const WHATSAPP_NUMBER = "5581983731827";
const WHATSAPP_MESSAGE = (tour: string) =>
  encodeURIComponent(
    `Olá! 👋 Vim pelo site e tenho interesse no passeio: ${tour}. Quais são os valores e datas disponíveis?`
  );
const whatsappLink = (tour: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE(tour)}`;

interface Tour {
  name: string;
  image: string;
  description: string;
  duration: string;
  includes: string;
  highlight: string;
}

const tours: Tour[] = [
  {
    name: "Porto de Galinhas",
    image: portoGalinhas,
    description: "Mergulhe nas piscinas naturais mais famosas do Brasil com peixes coloridos e águas cristalinas.",
    duration: "Dia inteiro",
    includes: "Transfer",
    highlight: "⭐ Destino mais amado!",
  },
  {
    name: "Praia dos Carneiros",
    image: praiaCarneiros,
    description: "Paraíso com águas calmas, coqueiros e a linda Capelinha de São Benedito na beira da praia.",
    duration: "Dia inteiro",
    includes: "Transfer incluso",
    highlight: "🌴 Natureza pura",
  },
  {
    name: "Maragogi",
    image: maragogi,
    description: "As piscinas naturais do Caribe Brasileiro com águas azul-turquesa deslumbrantes.",
    duration: "Dia inteiro",
    includes: "Transfer incluso",
    highlight: "🐠 Snorkel incrível",
  },
  {
    name: "Ilha de Santo Aleixo",
    image: ilhaSantoAleixo,
    description: "Ilha paradisíaca preservada com praias intocadas e natureza exuberante.",
    duration: "Dia inteiro",
    includes: "Transfer incluso",
    highlight: "🏝️ Exclusivo & raro",
  },
  {
    name: "Ilha de Itamaracá",
    image: itamaraca,
    description: "Ilha histórica com Forte Orange holandês, praias tranquilas e encontro de peixe-boi.",
    duration: "Dia inteiro",
    includes: "Transfer incluso",
    highlight: "🐬 Peixe-boi",
  },
  {
    name: "City Tour Recife",
    image: recife,
    description: "Conheça o Recife Antigo, Marco Zero, museus e a rica história da capital pernambucana.",
    duration:  "Dia inteiro",
    includes: "Transfer + Guia",
    highlight: "🏛️ História & cultura",
  },
  {
    name: "City Tour Olinda",
    image: Olinda,
    description: "Explore o patrimônio histórico de Olinda, igrejas coloniais e o famoso Carnaval.",
    duration: "Dia Inteiro",
    includes: "Transfer + Guia",
    highlight: "🎭 Patrimônio mundial",
  },
  {
    name: "João Pessoa",
    image: joaoPessoa,
    description: "A segunda cidade mais verde do mundo com praias exuberantes e pôr do sol inesquecível.",
    duration: "Dia inteiro",
    includes: "Transfer incluso",
    highlight: "🌅 Pôr do sol único",
  },
  {
    name: "Praia dos Milagres",
    image: praiaMilagres,
    description: "Águas cristalinas e areia branca em uma das praias mais deslumbrantes de Alagoas.",
    duration: "Dia inteiro",
    includes: "Transfer Incluso",
    highlight: "✨ Beleza única",
  },
  {
    name: "Cabo de Santo Agostinho",
    image: caboSantoAgostinho,
    description: "Praias paradisíacas como Itapoama, Paiva, Xaréu, Enseadas, Gaibu, Paraíso de Suape e a encantadora Calhetas.",
    duration: "Dia inteiro",
    includes: "Transfer incluso",
    highlight: "🏖️ Praias incríveis",
  },
  {
    name: "Pipa - RN",
    image: pipaRn,
    description: "Encante-se com falésias coloridas, praias paradisíacas e o centrinho charmoso. Água cristalina, natureza preservada e paisagens deslumbrantes.",
    duration: "Dia inteiro",
    includes: "Transfer incluso",
    highlight: "🌊 Praias Perfeitas",
  },

  {
    name: "Tranfer Aeroporto",
    image: transfer,
    description: "É a praticidade do nosso transfer privativo com carro adaptado e espaço especial para suas bagagens, garantindo uma viagem tranquila do início ao fim!",
    duration: "A combinar",
    includes: "Transfer incluso",
    highlight: "✈️ Transfer exclusivo",
  },
];

export function ToursSection() {
  return (
    <section id="passeios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-turquoise/10 text-turquoise font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            🏖️ Destinos Imperdíveis
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ocean mb-4">
            Nossos Passeios em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o seu destino dos sonhos. Transfer incluído, guias especializados e saída garantida de Recife.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.name} tour={tour} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-4">Não encontrou o destino que procura?</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Quero saber mais sobre passeios disponíveis saindo de Recife.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-ocean text-ocean hover:bg-ocean hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-200"
          >
            Consulte roteiros personalizados
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card-custom hover:shadow-card-hover-custom transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={tour.name === "Praia dos Milagres" ? { objectPosition: "center 80%" } : undefined}
        />
        <div className="absolute inset-0 bg-gradient-card" />
        {/* Highlight badge */}
        <span className="absolute top-3 left-3 bg-white/95 text-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
          {tour.highlight}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-ocean mb-2">{tour.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{tour.description}</p>

        {/* Meta info */}
        <div className="flex flex-col gap-1.5 mb-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5 text-turquoise shrink-0" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Bus className="w-3.5 h-3.5 text-turquoise shrink-0" />
            <span>{tour.includes}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-turquoise shrink-0" />
            <span>Saída de Recife – PE</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={whatsappLink(tour.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 mt-auto"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chame no WhatsApp e Reserve
        </a>
      </div>
    </div>
  );
}
