import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Target,
  Brain,
  Code2,
  BookOpen,
  Compass,
  CheckCircle,
} from 'lucide-react';

export default function About() {
  const professionalInterests = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Analytics',
    'Data Science',
    'Software Development',
    'Data Structures and Algorithms',
    'Backend Development',
    'Cloud Deployment',
  ];

  const infoCardItems = [
    { label: 'Degree', value: 'B.Tech CSE (AIML)' },
    { label: 'University', value: 'Quantum University' },
    { label: 'Focus', value: 'AI/ML, DSA, Data Analytics' },
    { label: 'Programming Language', value: 'Python, C++' },
    { label: 'Currently Learning', value: 'Machine Learning and Advanced DSA' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am a B.Tech Computer Science Engineering student specializing in Artificial
                Intelligence and Machine Learning at <span className="text-white font-semibold">Quantum University</span>.
              </p>
              <p>
                I am passionate about solving problems using programming, exploring Machine
                Learning algorithms, and developing real-world applications.
              </p>
              <p>
                I have worked on Machine Learning projects involving predictive modeling, data
                preprocessing, model evaluation, and deployment.
              </p>
              <p>
                I am also actively practicing Data Structures and Algorithms using{' '}
                <span className="text-cyan-400 font-mono font-medium">C++</span> to improve my
                problem-solving and programming skills.
              </p>
              <p>
                My current focus is on strengthening my Machine Learning fundamentals, improving my
                Data Analytics skills, and building projects that demonstrate both technical
                knowledge and practical business understanding.
              </p>
              <div className="pt-2 border-t border-white/5">
                <p className="text-cyan-300 font-medium italic">
                  "I believe that the best way to learn technology is by building, experimenting, and continuously improving."
                </p>
              </div>
            </div>

            {/* Career Goal Card */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-950/20 via-[#0d1424]/80 to-purple-950/20">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Career Goal
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                    To become a skilled AI/ML Engineer and secure a good software engineering or machine learning internship and placement.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Interests */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Professional Interests</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {professionalInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-[#0e1628] border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Information Card & Quick Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Profile Overview Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 pb-5 border-b border-white/10">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Academic & Technical Profile</h3>
                  <p className="text-xs text-slate-400 font-mono">Undergraduate Engineering Snapshot</p>
                </div>
              </div>

              <div className="divide-y divide-white/5 text-sm pt-2">
                {infoCardItems.map((item) => (
                  <div key={item.label} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-mono text-slate-400">{item.label}</span>
                    <span className="text-slate-200 font-medium sm:text-right text-xs sm:text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status footer inside card */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Academic Status</span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  2nd Year (4th Semester)
                </span>
              </div>
            </div>

            {/* Mindset / Approach Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Learning & Engineering Mindset</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Iterative Machine Learning workflow: Exploratory Data Analysis &rarr; Preprocessing &rarr; Baseline &rarr; Tuning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Consistent C++ DSA practice to strengthen core logic, algorithmic complexity, and memory efficiency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Bridging data modeling with functional backends (FastAPI) and modern cloud deployment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
