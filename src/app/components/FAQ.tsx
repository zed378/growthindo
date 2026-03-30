import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const faqs = [
  {
    question: "Apakah bisnis baru seperti kami cocok?",
    answer: "Ya, justru kami sering membantu bisnis di fase awal dan growth. Kami memahami tantangan unik yang dihadapi bisnis dalam tahap ini dan dapat memberikan solusi yang sesuai dengan kapasitas dan kebutuhan Anda."
  },
  {
    question: "Apakah harus langsung ambil program panjang?",
    answer: "Tidak. Kita bisa mulai dari sesi diskusi terlebih dahulu. Ini membantu kita saling memahami dan memastikan kami adalah partner yang tepat untuk perjalanan bisnis Anda."
  },
  {
    question: "Apakah bisa custom?",
    answer: "Semua pendekatan kami disesuaikan dengan kondisi Anda. Kami tidak percaya dengan solusi \"one size fits all\". Setiap bisnis memiliki konteks, tantangan, dan peluang yang unik."
  },
  {
    question: "Berapa lama biasanya proses konsultasi?",
    answer: "Durasi bervariasi tergantung kebutuhan dan scope. Bisa mulai dari sesi singkat problem-solving hingga program pendampingan beberapa bulan. Kami akan diskusikan timeline yang realistis di awal."
  },
  {
    question: "Apa yang membedakan Growth Indonesia Consulting dengan konsultan lain?",
    answer: "Kami tidak hanya memberikan rekomendasi, tapi ikut mendampingi implementasi. Fokus kami adalah perubahan nyata, bukan hanya slide presentasi yang bagus. Kami juga sangat transparan tentang posisi kami sebagai bisnis yang masih bertumbuh."
  }
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-lg text-gray-600">
              Mungkin Anda juga punya pertanyaan yang sama
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-gray-50 rounded-lg border-2 border-gray-100 px-6 hover:border-[#70A118] transition-colors"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#70A118] py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-12 text-center p-8 bg-green-50 rounded-xl border-2 border-[#70A118]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              Masih ada pertanyaan lain?
            </p>
            <p className="text-gray-600">
              Hubungi kami langsung untuk diskusi lebih lanjut
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
