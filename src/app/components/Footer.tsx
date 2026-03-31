import { Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";
import logoSvg from "../../imports/simplify.svg";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoSvg}
                alt="Growth Indonesia Consulting Logo"
                className="w-12 h-12 brightness-0 invert"
              />
              <div>
                <div className="text-xl font-bold text-white">
                  GROWTH INDONESIA CONSULTING
                </div>
                <div className="text-sm text-gray-400">
                  Teguh Prasetyo, S.Kom.I, M. PSDM
                </div>
              </div>
            </div>
            <p className="text-lg font-semibold text-green-400 mb-4">
              Grow People. Strengthen Functions. Accelerate Impact.
            </p>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Membantu organisasi mengembangkan SDM dan memperkuat fungsi bisnis
              melalui pendekatan strategis, terukur, dan berdampak nyata.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#70A118] transition-colors"
                >
                  Layanan Kami
                </a>
              </li>
              <li>
                <a
                  href="#how-we-work"
                  className="hover:text-[#70A118] transition-colors"
                >
                  Cara Kerja
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#70A118] transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MessageCircle
                  size={16}
                  className="mt-1 flex-shrink-0 text-green-400"
                />
                <div>
                  <p className="text-gray-400 text-xs mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/6289676306869"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#70A118] transition-colors"
                  >
                    089676306869
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-green-400" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Email</p>
                  <a
                    href="mailto:hello@growthindonesia.id"
                    className="hover:text-[#70A118] transition-colors"
                  >
                    hello@growthindonesia.id
                  </a>
                </div>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#70A118] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#70A118] transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {year} Growth Indonesia Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
