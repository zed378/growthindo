import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const differentiators = [
  "Pendekatan yang disesuaikan dengan kebutuhan bisnis",
  "Pendampingan menyeluruh dari strategi hingga implementasi",
  "Solusi yang praktis, aplikatif, dan relevan",
  "Fokus pada hasil dan dampak nyata",
  "Fleksibel untuk berbagai skala organisasi",
  "Didukung oleh pengalaman di bidang HR & organizational development"
];

export function Differentiation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Lebih dari Sekadar Konsultan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 md:p-8 bg-white rounded-xl border-2 border-green-100 hover:border-[#70A118] transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle2 size={24} className="text-[#70A118] flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg text-gray-800">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
