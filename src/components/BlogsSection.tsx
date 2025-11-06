import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { blogs } from "../data/projects";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function BlogsSection() {
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
      id="blogs"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Recent Writings</h2>
          <p style={{ color: "#8B5E3C" }}>
            Thoughts on AI, machine learning, and building better technology
          </p>
        </motion.div>

        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "rgba(139, 94, 60, 0.03)",
                  border: "1px solid rgba(139, 94, 60, 0.1)"
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="mb-3 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2">
                      {blog.title}
                      <ArrowRight 
                        size={20} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: "#8B5E3C" }}
                      />
                    </h3>
                    
                    <p className="mb-4" style={{ color: "#0B0B0B", opacity: 0.7 }}>
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: "rgba(139, 94, 60, 0.1)",
                            color: "#8B5E3C"
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm" style={{ color: "#8B5E3C" }}>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
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
