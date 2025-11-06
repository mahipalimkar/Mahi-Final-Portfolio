import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 text-center"
      style={{ borderTop: "1px solid rgba(139, 94, 60, 0.2)" }}
    >
      <p className="text-sm" style={{ color: "#8B5E3C" }}>
        © 2025 Mahi Palimkar
      </p>
    </motion.footer>
  );
}
