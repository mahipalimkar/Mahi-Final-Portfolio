import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ✅ Correct lucide icons
import { Bot, Pointer, CircuitBoard, PenTool } from "lucide-react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Bot,
      title: "Agentic AI",
      description:
        "Investigating autonomous LLM agents with planning, tool-use, memory, and self-improvement for reliable execution.",
    },
    {
      icon: Pointer,
      title: "Human–Computer Interaction",
      description:
        "Designing interaction paradigms that make AI systems intuitive, trustworthy, and emotionally intelligent.",
    },
    {
      icon: CircuitBoard,
      title: "Reinforcement Learning",
      description:
        "Exploring reward shaping, curriculum learning, and scalable environments for intelligent decision-making agents.",
    },
    {
      icon: PenTool,
      title: "Product Design",
      description:
        "Transforming emerging AI capabilities into seamless, meaningful, user-centered product experiences.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex items-center justify-center px-6 pb-8"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6" style={{ fontFamily: "Georgia, serif" }}>
            About Me
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            <p style={{ color: "#0B0B0B", fontFamily: "Georgia, serif" }}>
              I'm a Machine Learning developer passionate about creating
              technology that feels human and inspires. When I first started my
              journey at uni, I was as clueless as a neural network in its first
              epoch. Slowly, I fell in love with Machine Learning and OpenCV,
              and began building projects at the intersection of the two. These
              days, I'm diving deep into Reinforcement Learning; because it's
              simply fascinating how efficiently an agent can learn its
              environment with almost no human intervention. I love systems that
              learn, adapt, and feel alive, and I’m constantly exploring how to
              make AI more intuitive, intelligent, and human-aligned.
            </p>

            <p
              style={{
                color: "#0B0B0B",
                opacity: 1,
                fontFamily: "Georgia, serif",
              }}
            >
              When I'm not training models or writing code, you'll find me
              reading books, re-watching my favourite comfort shows for probably
              the 100th time, or vibing to Bollywood music. Also, I’m a feminist
              — obviously.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h3 style={{ color: "#8B5E3C" }}>Currently Exploring</h3>
        </motion.div>

        {/* ✅ Highlights grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "rgba(139, 94, 60, 0.04)",
                border: "1px solid rgba(139, 94, 60, 0.1)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "rgba(139, 94, 60, 0.1)",
                  color: "#8B5E3C",
                }}
              >
                <item.icon size={24} />
              </motion.div>

              <h4 className="mb-2">{item.title}</h4>
              <p className="text-sm" style={{ color: "#0B0B0B", opacity: 0.7 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <a
            href="#contact"
            className="inline-block cursor-pointer transition-all duration-300 hover:transform hover:scale-102 hover:shadow-lg"
          >
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "rgba(74, 107, 90, 0.08)" }}
            >
              <p
                className="text-base mb-2"
                style={{
                  color: "#4A6B5A",
                  fontFamily: "Georgia, serif",
                }}
              >
                Open to collaboration
              </p>
              <p
                style={{
                  color: "#0B0B0B",
                  fontFamily: "Georgia, serif",
                }}
              >
                I'm always excited to work on meaningful projects that push
                boundaries and make a positive impact. Let's build something
                together.
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
