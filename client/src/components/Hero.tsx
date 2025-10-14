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
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="Samuel Chege Waweru"
                className="relative rounded-3xl shadow-2xl w-full"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
