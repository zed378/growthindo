import { CheckCircle2, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const processes = [
  "Menyiapkan sistem HR sejak fase opening bisnis",
  "Membangun struktur dan operasional HR",
  "Memastikan sistem berjalan secara konsisten dalam aktivitas harian",
];

const strengths = [
  "Real",
  "Tidak overclaim",
  "Menunjukkan end-to-end capability",
];

export function FeaturedCase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto overflow-x-hidden">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Dari Perencanaan Hingga Operasional: Membangun Sistem HR dari Nol
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0NjkzNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kinville workspace"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#70A118] rounded-2xl -z-10 hidden lg:block"></div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-green-50 rounded-2xl p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#70A118] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">K</span>
                  </div>
                  <span className="text-2xl font-semibold text-gray-900">
                    Kinville - The Araya
                  </span>
                </div>

                <p className="text-lg text-gray-700 mb-6">
                  Pada proyek Kinville – The Araya, kami terlibat sebagai growth
                  partner dalam:
                </p>

                <div className="space-y-4 mb-6">
                  {processes.map((process, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <CheckCircle2
                        size={24}
                        className="text-[#70A118] flex-shrink-0 mt-0.5"
                      />
                      <p className="text-gray-700">{process}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="bg-gradient-to-r from-[#70A118] to-[#548C1A] text-white rounded-xl p-6 md:p-8 mb-6">
                <h3 className="text-xl font-semibold mb-3">Result:</h3>
                <p className="text-lg">
                  HR system tidak hanya terbentuk — tetapi berjalan dan sustain
                  dalam operasional bisnis.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
