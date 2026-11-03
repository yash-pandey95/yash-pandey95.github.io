import React from 'react';
import { Github, Linkedin, ArrowUp, Heart, Terminal, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060910] border-t border-white/10 pt-12 pb-8 overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Yash Pandey
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                CSE (AIML)
              </span>
            </div>
            <p className="text-slate-400 text-xs">
              AI/ML Engineer in the Making • Quantum University
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-[#0d1424] border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-[#0d1424] border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-[#0d1424] border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all flex items-center gap-1 group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Legal & Credits Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-center sm:text-left text-xs font-mono">
          <div>
            <span>Designed and Built by Yash Pandey</span>
          </div>
          <div>
            <span>© 2026 Yash Pandey. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
