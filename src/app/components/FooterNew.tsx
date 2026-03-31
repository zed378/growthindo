import { Mail, Linkedin, Instagram } from "lucide-react";
import logoSvg from "../../imports/simplify.svg";

export function FooterNew() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoSvg}
                alt="Growth Indonesia Consulting Logo"
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="text-xl font-semibold text-white">
                Growth Indonesia Consulting
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Partner berpikir dan bertindak untuk membantu bisnis bertumbuh
              dengan cara yang nyata dan terukur.
            </p>
            <div className="flex gap-3">
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
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#70A118] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#70A118] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
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
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3.5C3 2.94772 3.44772 2.5 4 2.5H5.5C5.77614 2.5 6.01076 2.68964 6.07615 2.95801L6.875 6.33398C6.92885 6.56155 6.83524 6.79964 6.64213 6.93237L5.5 7.75C6.25 9.25 7.25 10.25 8.75 11L9.56763 9.85787C9.70036 9.66476 9.93845 9.57115 10.166 9.625L13.542 10.4239C13.8104 10.4892 14 10.7239 14 11V12.5C14 13.0523 13.5523 13.5 13 13.5H11.5C7.08172 13.5 3.5 9.91828 3.5 5.5V4C3 3.5 3 3.5 3 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <div>
                  <p className="text-gray-400 text-xs mb-1">WhatsApp</p>
                  <a
                    href="tel:+62"
                    className="hover:text-[#70A118] transition-colors"
                  >
                    +62 xxx-xxxx-xxxx
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>
            © {Date.now()} Growth Indonesia Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
