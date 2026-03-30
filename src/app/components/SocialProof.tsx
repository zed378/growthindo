import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const clients = [
  "PT. Maju Klenger Abadi",
  "PT. Pabrik Acc Sukses",
  "PT. Alkautsar Cater Indonesia",
  "CV. Gema Asa Semesta",
  "Kinville"
];

export function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gray-50 border-y">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Dipercaya oleh berbagai organisasi
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-[#70A118] transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-sm md:text-base font-medium text-gray-700 text-center">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
