import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import CTF from "@/components/CTF";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <CTF />
      <Contact />
      <Footer />
    </div>
  );
}
