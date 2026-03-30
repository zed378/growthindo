import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const targets = [
  "Business owner yang ingin scaling",
  "Tim kecil–menengah yang butuh arah",
  "Founder yang butuh sparring partner",
  "Bisnis yang merasa \"stuck\""
];

export function WhoThisIsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cocok untuk:
            </h2>
          </motion.div>

          {/* Target List */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {targets.map((target, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-green-50 transition-colors"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-[#70A118] flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <CheckCircle2 size={20} className="text-white" />
                    </motion.div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-800">
                    {target}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
