import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Assessment",
    description:
      "Memahami kondisi, tantangan, dan tujuan bisnis secara menyeluruh",
  },
  {
    number: "02",
    title: "Design Solution",
    description: "Merancang solusi yang sesuai dengan konteks organisasi",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Mendampingi proses implementasi secara praktis",
  },
  {
    number: "04",
    title: "Evaluation",
    description: "Mengukur efektivitas dan dampak program",
  },
  {
    number: "05",
    title: "Continuous Improvement",
    description: "Menyempurnakan solusi untuk pertumbuhan berkelanjutan",
  },
];

export function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-we-work" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pendekatan yang Terstruktur untuk Hasil yang Terukur
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-white rounded-xl border-2 border-green-100 hover:border-[#70A118] transition-all hover:shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#70A118] text-white flex items-center justify-center text-lg font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Image */}
            <motion.div
              className="relative order-first lg:order-last lg:sticky lg:top-24"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwc2VtaW5hcnxlbnwxfHx8fDE3NzQ4NDA1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional training"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#70A118] rounded-2xl -z-10 hidden lg:block"></div>
            </motion.div>
          </div>

          {/* Closing Statement */}
          <motion.div
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
          >
            <div className="inline-block px-8 py-6 bg-gradient-to-r from-[#70A118] to-[#548C1A] text-white rounded-xl shadow-lg">
              <p className="text-xl md:text-2xl font-semibold">
                Kami tidak hanya merancang solusi — kami memastikan solusi
                tersebut bekerja.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
