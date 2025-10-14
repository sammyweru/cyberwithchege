export default function CTF() {
  return (
    <section id="ctf" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          CTF Challenges
        </h2>
        
        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
          
          <div className="relative z-10 space-y-4">
            <p className="text-2xl md:text-3xl font-semibold text-primary animate-pulse">
              Coming Soon
            </p>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Exciting Capture The Flag challenges are on the way. Stay tuned for security puzzles and hands-on hacking scenarios.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </section>
  );
}
