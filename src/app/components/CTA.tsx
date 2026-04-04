import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

import { phone, messageConsult, messageDiscuss } from "../../contants/whatsapp";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-br from-[#70A118] to-[#548C1A] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Setiap bisnis memiliki potensi untuk bertumbuh.
            </h2>
            <p className="text-xl md:text-2xl mb-10 md:mb-12 text-green-100">
              Yang membedakan adalah bagaimana sistem dan tim Anda dibangun.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(messageDiscuss)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="group text-lg px-8 py-6 h-auto bg-white text-[#70A118] hover:bg-green-50 w-full sm:w-auto cursor-pointer"
                >
                  Jadwalkan Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
