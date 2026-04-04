import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import founderImage from "../../imports/founder.webp";

const expertise = [
  {
    title: "Leadership Development",
    description:
      "Mengembangkan kapasitas kepemimpinan pemilik bisnis dan manajer",
  },
  {
    title: "Organizational Culture",
    description: "Membangun budaya kerja yang produktif dan berorientasi hasil",
  },
  {
    title: "HR System Building",
    description: "Menyusun sistem SDM yang terstruktur (SOP, KPI, rekrutmen)",
  },
  {
    title: "Performance Management",
    description: "Meningkatkan performa tim menjadi aset strategis bisnis",
  },
  {
    title: "Organizational Development",
    description:
      "Mendesain dan membangun  organisasi agar efektif, adaptif, dan berkelanjutan.",
  },
];

export function AboutFounder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 overflow-x-hidden">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dipimpin oleh Praktisi yang Memahami
            <br />
            Bisnis dan Manusia
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start mb-12">
            {/* Image Column */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={founderImage}
                    alt="Teguh Prasetyo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#70A118] rounded-full opacity-20"></div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Teguh Prasetyo, S.Kom.I., M.PSDM
                </h3>
                <p className="text-lg text-[#70A118] font-semibold">
                  Founder & Principal Consultant
                </p>
                <p className="text-gray-600 uppercase tracking-wide text-sm mt-1">
                  GROWTH INDONESIA CONSULTING
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Teguh Prasetyo memiliki pengalaman lebih dari satu dekade di
                  bidang Human Resource Development, dengan rekam jejak dalam
                  membantu berbagai organisasi membangun sistem dan
                  mengembangkan kualitas tim secara berkelanjutan.
                </p>
                <p>
                  Selain sebagai praktisi, beliau juga aktif sebagai pengajar di
                  berbagai institusi pendidikan, mengampu bidang Manajemen SDM,
                  Manajemen Strategis, hingga Kewirausahaan. Kombinasi ini
                  memberikan perspektif yang seimbang antara teori dan praktik
                  di dunia bisnis.
                </p>
                <p>
                  Dengan latar belakang pendidikan di bidang komunikasi dan
                  pengembangan sumber daya manusia, Teguh memiliki pendekatan
                  yang kuat dalam memahami dinamika manusia dalam organisasi —
                  mulai dari komunikasi interpersonal hingga strategi manajemen
                  yang kompleks.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Philosophy Statement */}
          <motion.div
            className="bg-[#70A118] text-white rounded-2xl p-8 md:p-10 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm uppercase tracking-wider mb-4 opacity-90">
              Filosofi Kami
            </p>
            <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed mb-4">
              "Keberhasilan bisnis tidak hanya ditentukan oleh sistem yang baik,
              tetapi oleh manusia dan budaya kerja yang sehat di dalamnya."
            </blockquote>
            <p className="text-white/90 leading-relaxed">
              Pendekatan yang digunakan berfokus pada{" "}
              <strong>experiential learning</strong> — metode pembelajaran
              berbasis pengalaman yang praktis, interaktif, dan langsung dapat
              diterapkan dalam konteks bisnis nyata, baik untuk UMKM maupun
              korporasi.
            </p>
          </motion.div>

          {/* Expertise Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Keahlian Utama
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#70A118] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#70A118] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="bg-gray-100 rounded-2xl p-8 md:p-10 text-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                Melalui <strong>GROWTH INDONESIA CONSULTING</strong>, Teguh
                telah mendampingi berbagai business owner dalam merapikan sistem
                internal dan mempersiapkan bisnis mereka untuk bertumbuh secara
                lebih terarah dan berkelanjutan.
              </p>
              <blockquote className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed border-l-4 border-[#70A118] pl-6 text-left">
                "Bisnis yang hebat dimulai dari manusia yang hebat. Tugas kami
                adalah memastikan setiap individu dalam organisasi Anda memiliki
                kapasitas untuk membawa bisnis ke level berikutnya."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
