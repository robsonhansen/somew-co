"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedLogo() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Cortina esquerda */}
          <motion.div
            className="absolute left-0 top-0 w-1/2 h-full bg-black"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          />

          {/* Cortina direita */}
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full bg-black"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          />

          {/* Logo central */}
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="z-10 w-32 md:w-48 lg:w-56"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{
              opacity: { duration: 1, ease: "easeOut" },
              scale: { duration: 1.2, ease: "easeOut" },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
