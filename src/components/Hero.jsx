import React from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  FileDown,
  Terminal,
  Cpu,
  Brain,
  Code2,
  Sparkles,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Glowing Ambient Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>B.Tech CSE (AIML) • 2nd Year</span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                YASH{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  PANDEY
                </span>
              </h1>

              {/* Sub-headline */}
              <div className="flex items-center gap-2.5 pt-1">
                <Brain className="w-5 h-5 text-cyan-400 shrink-0" />
                <h2 className="text-lg sm:text-2xl font-semibold text-slate-200 tracking-tight">
                  AI/ML Engineer in the Making
                </h2>
              </div>
            </div>

            {/* Core Mission Quote */}
            <div className="relative pl-4 border-l-2 border-cyan-500/50 py-1">
              <p className="text-base sm:text-xl font-medium text-cyan-300/90 italic font-mono">
                "Building intelligent systems. Solving real-world problems."
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Computer Science Engineering student passionate about Machine Learning, Data
              Analytics, and problem-solving. I build practical applications and continuously explore
              new technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,102,255,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-[#0e1628]/80 hover:bg-[#152038] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:text-white"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-[#0e1628]/80 hover:bg-[#152038] border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:text-purple-300"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 w-full max-w-lg">
              <div>
                <span className="block text-xs font-mono text-slate-400">Core Focus</span>
                <span className="text-sm font-bold text-slate-200">AI / ML & DSA</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-400">Primary Langs</span>
                <span className="text-sm font-bold text-slate-200">Python & C++</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-400">Status</span>
                <span className="text-sm font-bold text-cyan-400">B.Tech 4th Sem</span>
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic Developer Terminal & AI Pipeline Interface */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backlight for Terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-75"></div>

            {/* Futuristic Terminal Window */}
            <div className="relative rounded-2xl bg-[#090e1a]/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>yash@quantum-cse:~/workspace</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-cyan-300 border border-cyan-500/20">
                  ACTIVE
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-4">
                {/* Code execution simulation */}
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-cyan-400">$</span>
                    <span>python -m ml_pipeline.evaluate --model placement</span>
                  </div>
                  <div className="pl-4 text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Loaded model: LogisticRegression (accuracy: 85.84%)</span>
                  </div>
                  <div className="pl-4 text-slate-400">
                    <span>Feature columns: [academic_scores, technical_skills, projects]</span>
                  </div>
                  <div className="pl-4 text-cyan-300">
                    <span>Inference API: FastAPI mounted on port 8000 [Ready]</span>
                  </div>
                </div>

                {/* AI / ML Pipeline Flow Visualizer */}
                <div className="p-3.5 rounded-xl bg-[#060a14] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      Model Pipeline Architecture
                    </span>
                    <span className="text-cyan-400 text-[10px]">scikit-learn + FastAPI</span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5 text-[10px] text-center pt-1">
                    <div className="p-2 rounded bg-slate-900/80 border border-cyan-500/20 text-cyan-300">
                      <span className="block font-bold">Data Prep</span>
                      <span className="text-[9px] text-slate-400">Pandas</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/80 border border-blue-500/20 text-blue-300">
                      <span className="block font-bold">Feature Eng</span>
                      <span className="text-[9px] text-slate-400">Encoding</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/80 border border-purple-500/20 text-purple-300">
                      <span className="block font-bold">Classifier</span>
                      <span className="text-[9px] text-slate-400">LogisticReg</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/80 border border-emerald-500/20 text-emerald-300">
                      <span className="block font-bold">REST API</span>
                      <span className="text-[9px] text-slate-400">FastAPI</span>
                    </div>
                  </div>
                </div>

                {/* Developer Focus Highlights */}
                <div className="pt-2 border-t border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Problem Solving Track</span>
                    <span className="text-cyan-400 font-semibold">C++ & DSA Practicing</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Full-Stack Cloud Work</span>
                    <span className="text-slate-300 font-semibold">React + FastAPI + AWS</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">University Affiliation</span>
                    <span className="text-slate-300 font-semibold">Quantum University</span>
                  </div>
                </div>
              </div>

              {/* Terminal Footer Status Bar */}
              <div className="px-4 py-2 bg-[#0c1220] border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Aspiring AI/ML Engineer</span>
                </span>
                <span className="text-slate-500 font-mono">UTF-8 • Git Synced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
