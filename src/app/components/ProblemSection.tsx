import { X } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const problems = [
  "Sudah jalan, tapi tidak berkembang",
  "Tim bekerja, tapi tidak terarah",
  "Sudah coba berbagai cara, tapi tidak konsisten",
  "Tidak punya strategi yang jelas",
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto overflow-x-hidden">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Banyak bisnis tahu mereka ingin bertumbuh.
              <br />
              <span className="font-semibold">
                Tapi sering terjebak di sini:
              </span>
            </p>
          </motion.div>

          {/* Problems List */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border-l-4 border-red-400"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <X size={16} className="text-red-600" />
                  </div>
                </div>
                <p className="text-gray-800 text-lg">{problem}</p>
              </motion.div>
            ))}
          </div>

          {/* Solution Statement */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="inline-block px-8 py-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-[#70A118]">
              <p className="text-xl md:text-2xl text-gray-800 font-medium">
                Kami membantu mengubah kondisi tersebut menjadi{" "}
                <span className="text-[#70A118] font-semibold">
                  arah yang jelas
                </span>{" "}
                dan{" "}
                <span className="text-[#70A118] font-semibold">
                  langkah yang bisa dijalankan
                </span>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
