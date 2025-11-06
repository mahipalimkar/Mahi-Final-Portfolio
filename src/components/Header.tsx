import { motion } from "motion/react";

export function Header() {
  const navItems = [
    "About",
    "Projects",
    "Experience",
    "Blogs",
    "10 Things I ❤️ ",
    "Contact",
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6"
      style={{
        backgroundColor: "rgba(251, 248, 243, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-xl"
          style={{ fontFamily: "Georgia, serif", color: "#0B0B0B" }}
        >
          Mahi Palimkar
        </a>
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm transition-colors duration-300 hover:opacity-70"
              style={{ color: "#8B5E3C" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
