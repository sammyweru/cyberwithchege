import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Samuel Chege Waweru
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
          Building and Defending the Secure Cloud | Cloud Security • DevSecOps • Networking
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            onClick={() => scrollToSection("projects")}
            data-testid="button-view-work"
            className="min-w-[180px]"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            data-testid="button-get-in-touch"
            className="min-w-[180px]"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
