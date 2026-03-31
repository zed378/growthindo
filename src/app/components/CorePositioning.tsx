import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const principles = [
  "Strategi harus bisa dijalankan",
  "Training harus mengubah perilaku",
  "Growth harus terasa, bukan sekadar terlihat bagus di slide",
];

export function CorePositioning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwY29uc3VsdGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzQ4NDA1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business strategy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#70A118]/95 to-[#548C1A]/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-white overflow-x-hidden">
          {/* Main Statement */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              GROWTH INDONESIA CONSULTING hadir sebagai mitra strategis untuk
              membantu organisasi bertumbuh secara sehat, efektif, dan
              berkelanjutan.
            </h2>
          </motion.div>

          {/* Principles */}
          <div className="mb-12">
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-center mb-8 text-green-100"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Kami percaya:
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={24}
                      className="text-green-200 flex-shrink-0 mt-1"
                    />
                    <p className="text-lg text-white">{principle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-block px-8 py-6 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
              <p className="text-xl md:text-2xl font-semibold italic">
                Karena perubahan nyata hanya terjadi ketika strategi bertemu
                dengan eksekusi.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
