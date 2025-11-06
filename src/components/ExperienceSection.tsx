import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/projects";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "#8B5E3C", opacity: 0.3 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  className="absolute left-0 md:left-6 top-2 w-12 h-12 -ml-6 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "#FBF8F3",
                    border: "2px solid #8B5E3C",
                  }}
                >
                  <Briefcase size={20} style={{ color: "#8B5E3C" }} />
                </motion.div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: "rgba(139, 94, 60, 0.03)" }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                    <h3 style={{ fontFamily: "Georgia, serif" }}>{exp.role}</h3>
                    <span className="text-sm" style={{ color: "#8B5E3C" }}>
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="mb-3" style={{ color: "#4A6B5A" }}>
                    {exp.company}
                  </h4>
                  
                  <p className="mb-4" style={{ color: "#0B0B0B", opacity: 0.7 }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(74, 107, 90, 0.1)",
                          color: "#4A6B5A"
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
