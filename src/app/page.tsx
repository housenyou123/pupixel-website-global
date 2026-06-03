"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/600df1642d57773bee9d56f4050135af", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

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
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className="logo-mark"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="32" height="32" rx="8" fill="white" />
                <path
                  d="M8.5 20H13.5L16 12.5L21 27L23.5 20H28"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="8.5" y="8.5" width="4.5" height="4.5" rx="1" fill="black" />
              </svg>
              <span className="text-base font-medium">pixelbeat</span>
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

            {submitted ? (
              <div className="inline-flex items-center gap-2 text-sm text-green-400 border border-green-400/30 rounded-full px-6 py-3 bg-green-400/5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                You&apos;re on the list! We&apos;ll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 text-sm text-white bg-white/5 border border-white/20 rounded-full px-5 py-3 outline-none focus:border-white/40 transition-colors placeholder:text-white/30"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow text-sm text-white/90 border border-white/20 rounded-full px-6 py-3 whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Notify me"}
                </button>
              </form>
            )}
          </div>
        </main>

        <div className="line"></div>

        {/* Footer */}
        <footer className="w-full px-8 py-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-white/40">
              PIXELBEAT PTE. LTD.
            </span>
            <span className="text-sm text-white/40">
              © 2026 pixelbeat
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
