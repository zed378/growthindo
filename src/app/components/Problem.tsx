import { X } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const painPoints = [
  "Bisnis sudah berjalan, tapi tidak berkembang",
  "Tim bekerja, tapi tidak memiliki arah yang jelas",
  "Sudah mencoba banyak cara, tapi tidak konsisten",
  "Strategi ada, tapi sulit dieksekusi",
];

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto overflow-x-hidden">
          {/* Title */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Banyak bisnis tidak gagal karena kurang ide — tapi karena tidak
              punya sistem yang tepat.
            </h2>
          </motion.div>

          {/* Pain Points */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 md:p-8 bg-white rounded-xl border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <X size={18} className="text-red-600" />
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-800">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="inline-block px-8 py-6 bg-gradient-to-r from-[#70A118] to-[#548C1A] text-white rounded-xl shadow-lg">
              <p className="text-xl md:text-2xl font-semibold">
                Tanpa sistem dan struktur yang kuat, pertumbuhan akan selalu
                terbatas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
