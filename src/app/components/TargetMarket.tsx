import { Building2, TrendingUp, Users, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const targets = [
  {
    icon: TrendingUp,
    title: "UMKM & Startup"
  },
  {
    icon: Building2,
    title: "Perusahaan berkembang & korporasi"
  },
  {
    icon: Users,
    title: "BUMN & anak perusahaan"
  },
  {
    icon: GraduationCap,
    title: "Institusi pendidikan & organisasi publik"
  }
];

export function TargetMarket() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kami bekerja dengan berbagai organisasi
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {targets.map((target, index) => {
              const Icon = target.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#70A118]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-green-100 text-[#70A118] flex items-center justify-center">
                      <Icon size={28} />
                    </div>
                  </div>
                  <p className="text-lg md:text-xl font-semibold text-gray-800">
                    {target.title}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-block px-8 py-6 bg-gradient-to-r from-[#70A118] to-[#548C1A] text-white rounded-xl shadow-lg">
              <p className="text-lg md:text-xl font-semibold">
                Terutama bagi mereka yang ingin membangun sistem yang kuat untuk pertumbuhan jangka panjang.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
