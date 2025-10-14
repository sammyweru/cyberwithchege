import heroImage from "@assets/Gemini_Generated_Image_2m4eca2m4eca2m4e_1760444391861.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Samuel Chege
                </span>
                <br />
                <span className="text-foreground">Waweru</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                Building and Defending the Secure Cloud
              </h2>
              
              <div className="flex flex-wrap gap-3 text-base md:text-lg">
                <span className="px-4 py-2 bg-card rounded-lg border border-card-border">
                  Cloud Security
                </span>
                <span className="px-4 py-2 bg-card rounded-lg border border-card-border">
                  Networking
                </span>
                <span className="px-4 py-2 bg-card rounded-lg border border-card-border">
                  DevSecOps
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl" />
              <img
                src={heroImage}
                alt="Samuel Chege Waweru"
                className="relative rounded-full shadow-2xl w-full h-full object-cover object-top"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
