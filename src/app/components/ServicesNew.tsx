import { TrendingUp, Users, MessageSquare, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: TrendingUp,
    title: "Business & Growth Strategy",
    description:
      "Membantu Anda menemukan arah yang tepat dan realistis untuk bertumbuh",
  },
  {
    icon: Users,
    title: "Team & Leadership Development",
    description: "Meningkatkan kualitas tim agar selaras dengan tujuan bisnis",
  },
  {
    icon: MessageSquare,
    title: "Practical Coaching",
    description:
      "Pendampingan langsung untuk membantu implementasi, bukan hanya ide",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving Session",
    description: "Diskusi terarah untuk menyelesaikan bottleneck bisnis Anda",
  },
];

export function ServicesNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto overflow-x-hidden">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa yang bisa kami bantu
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#70A118] bg-white h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-12 h-12 rounded-lg bg-green-100 text-[#70A118] flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Icon size={24} />
                          </motion.div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
