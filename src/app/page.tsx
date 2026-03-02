export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-8 py-6">
          <nav className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Animated Logo */}
              <div className="logo-container">
                <svg width="36" height="36" viewBox="0 0 100 100" className="logo-svg">
                  <defs>
                    <radialGradient id="star-gradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1a1a1a" />
                      <stop offset="100%" stopColor="#666" />
                    </radialGradient>
                  </defs>

                  {/* White rotated square background */}
                  <rect
                    x="10" y="10"
                    width="80" height="80"
                    fill="white"
                    transform="rotate(10, 50, 50)"
                    className="logo-bg"
                    rx="2"
                  />

                  {/* Four-pointed star made of 4 triangles */}
                  <g className="star-group">
                    {/* Top triangle */}
                    <polygon
                      points="50,15 60,40 40,40"
                      fill="url(#star-gradient)"
                      className="star-piece piece-top"
                    />
                    {/* Right triangle */}
                    <polygon
                      points="85,50 60,60 60,40"
                      fill="url(#star-gradient)"
                      className="star-piece piece-right"
                    />
                    {/* Bottom triangle */}
                    <polygon
                      points="50,85 40,60 60,60"
                      fill="url(#star-gradient)"
                      className="star-piece piece-bottom"
                    />
                    {/* Left triangle */}
                    <polygon
                      points="15,50 40,40 40,60"
                      fill="url(#star-gradient)"
                      className="star-piece piece-left"
                    />
                  </g>
                </svg>
              </div>
              <span className="text-base font-medium">Pupixel</span>
            </div>
            <span className="text-sm text-white/50">Coming Soon</span>
          </nav>
        </header>

        <div className="line"></div>

        {/* Main */}
        <main className="flex-1 flex items-center justify-center px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
              <span className="gradient-text">Empowering Everyone</span>
              <br />
              <span className="text-white/90">to Share Real Life Stories</span>
            </h1>

            <p className="text-lg text-white/50 max-w-xl mx-auto mb-12">
              AI-powered tools for capturing and sharing authentic moments.
            </p>

            <a
              href="mailto:contact@pupixel.ai"
              className="btn-glow inline-block text-sm text-white/70 border border-white/20 rounded-full px-6 py-3"
            >
              Get in touch →
            </a>
          </div>
        </main>

        <div className="line"></div>

        {/* Footer */}
        <footer className="w-full px-8 py-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-white/40">
              Pixelbeat Inc.
            </span>
            <span className="text-sm text-white/40">
              © 2026 Pupixel
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
