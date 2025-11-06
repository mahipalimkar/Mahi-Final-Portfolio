import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-8">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold text-3xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Hi, I am Mahi Palimkar.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-normal text-2xl mb-4 inline-block"
              style={{ fontFamily: "Georgia, serif", color: "#8B5E3C" }}
            >
              CS Undergrad at VJTI, Machine Learning enthusiast
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ color: "#8B5E3C" }}
            >
              Building intelligent systems with empathy. Exploring the
              intersection of Machine learning, Computer Vision, and User
              Experience.
            </motion.p>

            {/* Philosophy / Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4"
            >
              <h3 className="mb-4 text-xl" style={{ color: "#8B5E3C" }}>
                My Philosophy
              </h3>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  "Build practical systems before fancy ones",
                  "Learn by trying, not waiting",
                  "Clean ideas → clean systems",
                  "Curiosity compounds",
                ].map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span
                      className="text-xs mt-1.5 flex-shrink-0"
                      style={{ color: "#8B5E3C" }}
                    >
                      •
                    </span>
                    <p
                      className="text-sm"
                      style={{ color: "#0B0B0B", opacity: 0.8 }}
                    >
                      {principle}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="pt-4"
            >
              <div
                className="inline-block px-5 py-4 rounded-lg"
                style={{ backgroundColor: "rgba(74, 107, 90, 0.05)" }}
              >
                <p
                  className="text-sm"
                  style={{
                    color: "#0B0B0B",
                    opacity: 0.85,
                    fontStyle: "italic",
                  }}
                >
                  Outside tech, I like uncovering small joys: reading books,
                  writing content and poetry, early morning walks, and long
                  drives that accidentally turn into brainstorm sessions.
                </p>
              </div>
            </motion.div>

            {/* Increased gap between Personal Touch and Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 pt-8"
            >
              <a
                href="#projects"
                className="px-6 py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105" // Increased py from 3 to 4
                style={{
                  backgroundColor: "#8B5E3C",
                  color: "#FBF8F3",
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105" // Increased py from 3 to 4
                style={{
                  backgroundColor: "rgba(139, 94, 60, 0.1)",
                  color: "#8B5E3C",
                  border: "1px solid #8B5E3C",
                }}
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Polaroid photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <motion.div
              initial={{ rotate: -2 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] rounded-sm"
              style={{
                width: "400px", // overall polaroid width
                padding: "10px 10px 25px 10px", // polaroid bottom space
                border: "2px solid #000", // changed to solid black border
              }}
            >
              {/* Image container — resized correctly */}
              <div className="w-full h-[260px] overflow-hidden rounded-sm bg-neutral-200">
                <ImageWithFallback
                  src="/mahiphoto3.jpg"
                  alt="Mahi Palimkar"
                  className="w-full h-full object-cover scale-[1.05]"
                  style={{
                    filter: "brightness(0.98) contrast(1.05) saturate(1.03)",
                  }}
                />
              </div>

              <p className="text-center text-[11px] mt-[6px] text-neutral-700 italic opacity-80 tracking-wide">
                Mahi — 2025
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
