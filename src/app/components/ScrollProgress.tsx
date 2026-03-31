import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:block rotate-180">
      <div className="relative w-1 h-32 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#70A118] to-[#8CB217] rounded-full"
          style={{ height: `${scrollProgress}%` }}
          initial={{ height: "0%" }}
          animate={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
}
