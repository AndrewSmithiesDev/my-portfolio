import About from "@/components/about/About";
import ContactSection from "@/components/contact/ContactSection";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";

export default function Page() {
  return (
    <>
    <Hero />
    <About />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
    </>
  ); 
}
