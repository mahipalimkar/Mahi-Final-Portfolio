import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Message sent! I'll get back to you soon.", {
      duration: 4000,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/mahipalimkar", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mahi-s-palimkar",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:mahi@example.com", label: "Email" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Let's Connect</h2>
          <p style={{ color: "#8B5E3C" }}>
            Always excited to collaborate on interesting projects or just chat
            about AI, design, and technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: "rgba(139, 94, 60, 0.1)",
                color: "#8B5E3C",
              }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-lg"
          style={{
            backgroundColor: "rgba(139, 94, 60, 0.03)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="name" style={{ color: "#0B0B0B" }}>
              Name
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border-[#8B5E3C]/30 focus:border-[#8B5E3C] transition-colors"
              style={{ backgroundColor: "#FBF8F3" }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" style={{ color: "#0B0B0B" }}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border-[#8B5E3C]/30 focus:border-[#8B5E3C] transition-colors"
              style={{ backgroundColor: "#FBF8F3" }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" style={{ color: "#0B0B0B" }}>
              Message
            </Label>
            <Textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="border-[#8B5E3C]/30 focus:border-[#8B5E3C] transition-colors resize-none"
              style={{ backgroundColor: "#FBF8F3" }}
            />
          </div>

          <Button
            type="submit"
            className="w-full transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "#8B5E3C",
              color: "#FBF8F3",
            }}
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
