import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logoSvg from "../../imports/simplify.svg";

import { phone, messageConsult, messageDiscuss } from "../../contants/whatsapp";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full overflow-x-hidden bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm">
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between w-full min-w-0 cursor-pointer">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 md:gap-3">
            <img
              src={logoSvg}
              alt="Growth Indonesia Consulting Logo"
              className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
            />
            <p className="text-base md:text-xl font-bold text-gray-900 w-auto">
              Growth Indonesia Consulting
            </p>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-[#70A118] transition-colors font-medium"
            >
              Layanan
            </a>
            <a
              href="#how-we-work"
              className="text-gray-700 hover:text-[#70A118] transition-colors font-medium"
            >
              Cara Kerja
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#70A118] transition-colors font-medium"
            >
              Tentang
            </a>

            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(messageConsult)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#70A118] hover:bg-[#548C1A] cursor-pointer">
                Konsultasi Gratis
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex-shrink-0 transition-all duration-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t pt-4 transition-all duration-500">
            <a
              href="#services"
              className="text-gray-700 hover:text-[#70A118] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </a>
            <a
              href="#how-we-work"
              className="text-gray-700 hover:text-[#70A118] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Cara Kerja
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#70A118] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </a>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(messageConsult)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-[#70A118] hover:bg-[#548C1A]">
                Konsultasi Gratis
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
