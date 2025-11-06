import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-16" // Changed from py-24 to py-16
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-lg transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: "rgba(139, 94, 60, 0.03)",
                border: "1px solid rgba(139, 94, 60, 0.1)",
              }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="group-hover:translate-x-1 transition-transform duration-300">
                    {project.name}
                  </h3>
                  <ExternalLink
                    size={20}
                    className="flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "#8B5E3C" }}
                  />
                </div>

                <p
                  className="mb-4 text-sm"
                  style={{ color: "#0B0B0B", opacity: 0.7 }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(139, 94, 60, 0.1)",
                        color: "#8B5E3C",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-4"
                  style={{ backgroundColor: "#8B5E3C" }}
                />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
