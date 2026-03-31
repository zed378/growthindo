import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGxlYWRlcnNoaXAlMjB0ZWFtfGVufDF8fHx8MTc3NDg0MDU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Corporate business team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-green-50/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center overflow-x-hidden">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bangun Tim yang Kuat. Perkuat Sistem. Dorong Pertumbuhan Bisnis
            Berkelanjutan.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-semibold">GROWTH INDONESIA CONSULTING</span>{" "}
            membantu organisasi mengembangkan SDM dan memperkuat fungsi bisnis
            melalui pendekatan strategis, terukur, dan berdampak nyata.
          </motion.p>

          {/* Support line */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 italic mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Karena bisnis yang bertumbuh bukan hanya tentang ide — tapi tentang
            sistem, manusia, dan eksekusi yang tepat.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group bg-[#70A118] hover:bg-[#548C1A] text-lg px-8 py-6 h-auto w-full sm:w-auto"
              >
                Jadwalkan Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="group border-[#70A118] text-[#70A118] hover:bg-[#70A118] hover:text-white text-lg px-8 py-6 h-auto w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Diskusikan Kebutuhan Anda
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
