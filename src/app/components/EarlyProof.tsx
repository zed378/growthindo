import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const focuses = [
  "Menyusun arah pertumbuhan",
  "Mengidentifikasi peluang",
  "Meningkatkan kualitas pengambilan keputusan",
];

export function EarlyProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto overflow-x-hidden">
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
                alt="Team collaboration workspace"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#70A118] rounded-2xl -z-10 hidden lg:block"></div>
          </motion.div>

          {/* Right - Content */}
          <div>
            {/* Section Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perjalanan Kami
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Kami masih dalam tahap awal perjalanan.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              {/* Current Work */}
              <div className="bg-white p-6 rounded-2xl border-2 border-[#70A118] shadow-lg">
                <p className="text-lg text-gray-700 mb-4">
                  Saat ini kami bekerja bersama:
                </p>

                <div className="flex items-center gap-3 mb-6 p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#70A118] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">K</span>
                  </div>
                  <span className="text-2xl font-semibold text-gray-900">
                    Kinville
                  </span>
                </div>

                <p className="text-lg text-gray-700 mb-4">
                  Dalam proses ini, kami fokus membantu:
                </p>

                <div className="space-y-3">
                  {focuses.map((focus, index) => (
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
                      <p className="text-gray-700">{focus}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Core Belief */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 0.6 }}
              >
                <div className="px-6 py-4 bg-gradient-to-r from-[#70A118] to-[#548C1A] text-white rounded-xl">
                  <p className="text-lg md:text-xl font-semibold">
                    Kami percaya kualitas kerja lebih penting daripada jumlah
                    klien.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
