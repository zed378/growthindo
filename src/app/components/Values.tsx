import { Heart, Shield, Target, Users as UsersIcon, Award } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const values = [
  {
    icon: Target,
    title: "Growth Mindset",
    description: "Bertumbuh secara berkelanjutan",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Profesional dan dapat dipercaya",
  },
  {
    icon: Heart,
    title: "Impact Oriented",
    description: "Fokus pada hasil nyata",
  },
  {
    icon: UsersIcon,
    title: "Collaboration",
    description: "Membangun kemitraan",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Memberikan kualitas terbaik",
  },
];

export function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto overflow-x-hidden">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nilai yang Kami Pegang
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 md:p-8 bg-green-50 rounded-2xl border-2 border-green-100 hover:border-[#70A118] transition-all hover:shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#70A118] text-white flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
