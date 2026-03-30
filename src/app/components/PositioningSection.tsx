import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const beliefs = [
  "Strategi harus bisa dijalankan",
  "Training harus mengubah perilaku",
  "Growth harus terasa, bukan sekadar terlihat bagus di slide"
];

export function PositioningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758691736836-0413b066787a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwYnJhaW5zdG9ybWluZyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzc0NjkzNDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Team brainstorming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#70A118]/95 to-[#548C1A]/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-white">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kami bukan sekadar konsultan.
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-green-100">
              Kami partner berpikir dan bertindak.
            </p>
          </motion.div>

          {/* Beliefs */}
          <div className="space-y-6 mb-8">
            <motion.p 
              className="text-xl md:text-2xl font-medium text-center mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Kami percaya:
            </motion.p>
            {beliefs.map((belief, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 size={24} className="text-green-200" />
                </div>
                <p className="text-lg md:text-xl text-white">{belief}</p>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg text-green-100 italic">
              Pendekatan ini juga sejalan dengan tren consulting modern yang menggabungkan strategi dan eksekusi, bukan hanya teori
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
