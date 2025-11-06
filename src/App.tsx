import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { BlogsSection } from "./components/BlogsSection";
import { TenThingsSection } from "./components/TenThingsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBF8F3" }}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogsSection />
        <TenThingsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
