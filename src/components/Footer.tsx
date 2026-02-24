import { MapPin, Phone, Instagram, Facebook, Mail } from "lucide-react";
import logo from "@/assets/pernambutur-logo.jpeg";

const WHATSAPP_NUMBER = "5581983731827";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! 👋 Vim pelo site e quero informações sobre os passeios saindo de Recife. Quais valores e datas disponíveis?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const destinations = [
  "Porto de Galinhas",
  "Praia dos Carneiros",
  "Maragogi",
  "Ilha de Santo Aleixo",
  "Itamaracá",
  "City Tour Recife",
  "City Tour Olinda",
  "João Pessoa",
  "Praia dos Milagres",
  "Cabo de Santo Agostinho",
  "Pipa - RN",
  "Transfer do Aeropuerto",
];

export function Footer() {
  return (
    <footer className="bg-ocean text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Pernambutur Turismo"
                className="h-14 w-14 rounded-full object-cover border-2 border-sun"
              />
              <div>
                <p className="font-display font-bold text-xl leading-none">Pernambutur</p>
                <p className="text-sun text-sm">Turismo e Receptivo</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Agência especializada em passeios, transfers e tours saindo de Recife,
              levando você às melhores experiências de Pernambuco e região.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-sun hover:text-ocean flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-sun hover:text-ocean flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-whatsapp hover:bg-whatsapp-dark flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display font-bold text-lg text-sun mb-5">Destinos</h4>
            <ul className="space-y-2.5">
              {destinations.map((dest) => (
                <li key={dest}>
                  <a
                    href="#passeios"
                    className="text-white/70 hover:text-turquoise-light text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-turquoise inline-block" />
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-sun mb-5">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Nossos Passeios", href: "#passeios" },
                { label: "Benefícios", href: "#beneficios" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Reserve Agora", href: WHATSAPP_LINK },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/70 hover:text-turquoise-light text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-turquoise inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-sun mb-5">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-turquoise shrink-0 mt-0.5" />
                <span>Recife – Pernambuco, Brasil</span>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-whatsapp text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-whatsapp shrink-0" />
                <span>(81) 9 8373-1827</span>
              </a>
              <a
                href="mailto:pernamburturturismo@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-turquoise-light text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-turquoise shrink-0" />
                <span>pernamburturturismo@gmail.com</span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-sm py-3 px-6 rounded-xl transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>© 2025 Pernambutur Turismo e Receptivo. Todos os direitos reservados.</p>
          <p>Recife – Pernambuco, Brasil 🌴</p>
          <a
            href="https://www.instagram.com/jm_marketingoficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-turquoise-light transition-colors"
          >
            Desenvolvido por Jm Marketing Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
