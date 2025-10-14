export default function CTF() {
  return (
    <section id="ctf" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          CTF Challenges
        </h2>
        
        <div className="relative py-8">
          <div className="flex justify-center mb-12">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="animate-pulse"
            >
              {/* Desk */}
              <rect x="20" y="140" width="160" height="8" fill="hsl(var(--primary))" opacity="0.3" />
              
              {/* Monitor */}
              <rect x="65" y="80" width="70" height="50" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="2" />
              <rect x="70" y="85" width="60" height="40" fill="hsl(var(--primary))" opacity="0.2" />
              
              {/* Loading spinner on screen */}
              <circle cx="100" cy="105" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="15 10" className="animate-spin" style={{ transformOrigin: '100px 105px' }} />
              
              {/* Monitor stand */}
              <rect x="95" y="130" width="10" height="15" fill="hsl(var(--primary))" opacity="0.3" />
              <rect x="80" y="145" width="40" height="3" fill="hsl(var(--primary))" opacity="0.3" />
              
              {/* Person sitting */}
              {/* Head */}
              <circle cx="50" cy="110" r="12" fill="hsl(var(--primary))" opacity="0.6" />
              
              {/* Body */}
              <rect x="44" y="122" width="12" height="25" fill="hsl(var(--primary))" opacity="0.5" rx="2" />
              
              {/* Arms - one typing */}
              <rect x="56" y="128" width="20" height="6" fill="hsl(var(--primary))" opacity="0.5" rx="3" className="animate-pulse" />
              
              {/* Thought bubbles */}
              <circle cx="30" cy="90" r="4" fill="hsl(var(--primary))" opacity="0.3" className="animate-bounce" style={{ animationDelay: '0ms' }} />
              <circle cx="22" cy="80" r="6" fill="hsl(var(--primary))" opacity="0.4" className="animate-bounce" style={{ animationDelay: '100ms' }} />
              <circle cx="15" cy="68" r="8" fill="hsl(var(--primary))" opacity="0.5" className="animate-bounce" style={{ animationDelay: '200ms' }} />
            </svg>
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
