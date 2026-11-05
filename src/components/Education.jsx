import React from 'react';
import {
GraduationCap,
Calendar,
Building2,
BookOpen,
Sparkles,
CheckCircle,
} from 'lucide-react';

export default function Education() {
const coursework = [
'Artificial Intelligence & Machine Learning Fundamentals',
'Data Structures and Algorithms (C++)',
'Database Management Systems (MySQL & SQL)',
'Object-Oriented Programming (Java / C++)',
'Computer System Architecture & Operating Systems',
'Discrete Mathematics & Statistical Methods',
];

return ( <section id="education" className="py-24 relative overflow-hidden"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="flex flex-col items-start mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Academic Background</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Education{' '}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
          Timeline
        </span>
      </h2>

      <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
    </div>

    {/* Education Timeline */}
    <div className="max-w-4xl mx-auto">
      <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">

        {/* Timeline Icon */}
        <div className="absolute -left-[17px] top-0 p-2 rounded-xl bg-[#080B12] border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
        </div>

        {/* Education Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-6">

          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Currently Enrolled
            </span>

            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Expected Graduation: 2028</span>
            </span>

          </div>

          {/* Degree Details */}
          <div className="space-y-2">

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Bachelor of Technology (B.Tech)
            </h3>

            <div className="text-base sm:text-lg font-medium text-cyan-300">
              Computer Science Engineering
            </div>

            <div className="flex items-center gap-2 text-slate-300 font-mono text-xs sm:text-sm">
              <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 font-medium">
                Specialization: Artificial Intelligence and Machine Learning
              </span>
            </div>

          </div>

          {/* University Details */}
          <div className="p-4 rounded-xl bg-[#090e1a] border border-white/5 flex items-center gap-3">

            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
              <Building2 className="w-5 h-5" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-white">
                Quantum University
              </h4>

              <p className="text-xs text-slate-400">
                Department of Computer Science and Engineering
              </p>
            </div>

          </div>

          {/* Coursework */}
          <div className="space-y-3 pt-2">

            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Key Coursework & Academic Focus</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">

              {coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#060a14] border border-white/5 text-slate-300 flex items-start gap-2"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{course}</span>
                </div>
              ))}

            </div>
          </div>

          {/* Graduation Status */}
          <div className="p-3 rounded-lg bg-[#0c1424] border border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">

            <span>Graduation Status</span>

            <span className="text-cyan-400 font-semibold">
              Class of 2028
            </span>

          </div>

        </div>
      </div>
    </div>
  </div>
</section>
);
}
