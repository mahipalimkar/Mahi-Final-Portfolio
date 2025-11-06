import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { tenThings } from "../data/projects";
import { Heart } from "lucide-react";

export function TenThingsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="10-things"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart size={28} style={{ color: "#8B5E3C" }} fill="#8B5E3C" />
            <h2>10 Things I Love</h2>
          </div>
          <p style={{ color: "#8B5E3C" }}>Small joys and daily inspirations</p>
        </motion.div>

        <div className="space-y-4">
          {tenThings.map((thing, index) => (
            <motion.div
              key={`thing-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-5 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-2"
              style={{
                backgroundColor: "rgba(139, 94, 60, 0.03)",
                border: "1px solid rgba(139, 94, 60, 0.1)",
              }}
            >
              <div className="flex items-center gap-4">
                <motion.span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{
                    backgroundColor: "rgba(139, 94, 60, 0.1)",
                    color: "#8B5E3C",
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {index + 1}
                </motion.span>
                <span style={{ color: "#0B0B0B" }}>{thing}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
