import { Users, GraduationCap, Building2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: Users,
    title: "Human Resource Development (HRD Consulting)",
    description: "Membangun fondasi sistem HR yang selaras dengan strategi bisnis",
    items: [
      "HR Audit & Assessment",
      "Struktur Organisasi & Job Description",
      "Rekrutmen & Seleksi",
      "KPI / OKR System",
      "HR Policy & SOP"
    ],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: GraduationCap,
    title: "Learning & Talent Development (LTD)",
    description: "Mengembangkan kompetensi individu dan tim",
    items: [
      "Training & Workshop",
      "Leadership Development",
      "Coaching & Mentoring",
      "Talent Mapping"
    ],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Building2,
    title: "Functional & Organizational Development (FOD)",
    description: "Meningkatkan efektivitas dan efisiensi organisasi",
    items: [
      "Organizational Diagnosis",
      "Business Process Improvement",
      "Change Management",
      "Culture & Engagement Program"
    ],
    color: "bg-green-100 text-[#70A118]"
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-16 md:py-24 bg-gray-50">
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
              Layanan Kami
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#70A118] bg-white h-full">
                    <CardContent className="p-6 md:p-8">
                      <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#70A118] mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
