import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const about = {
  mainText: "GROWTH INDONESIA CONSULTING adalah perusahaan konsultan yang berfokus pada pengembangan SDM (Human Resources) dan penguatan fungsi organisasi (Functional Development) secara strategis, terukur, dan berkelanjutan.",
  helps: [
    "Sistem HR yang kuat",
    "Talenta yang kompeten",
    "Budaya kerja yang adaptif"
  ],
  closing: "Dengan pendekatan berbasis kebutuhan bisnis, data, dan praktik terbaik, kami memastikan setiap solusi memberikan dampak nyata terhadap kinerja organisasi."
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
              Tentang Kami
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {about.mainText}
            </p>
          </motion.div>

          <motion.div
            className="bg-green-50 rounded-2xl p-8 md:p-10 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl font-semibold text-gray-900 mb-6">
              Kami membantu organisasi membangun:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {about.helps.map((help, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-[#70A118]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#70A118]"></div>
                  <span className="font-medium text-gray-800">{help}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {about.closing}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
