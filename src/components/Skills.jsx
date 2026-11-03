import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import {
  Code2,
  Brain,
  Database,
  Server,
  Layout,
  Wrench,
  Search,
  Sparkles,
  Layers,
} from 'lucide-react';

const categoryIcons = {
  programming: Code2,
  'ml-ds': Brain,
  'ml-algorithms': Layers,
  backend: Server,
  database: Database,
  frontend: Layout,
  tools: Wrench,
};

const badgeStyles = {
  Core: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  Applied: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  Foundation: 'bg-slate-700/30 text-slate-300 border-slate-600/30',
  Exploring: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  Everyday: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Domains' },
    { id: 'programming', label: 'Programming & DSA' },
    { id: 'ml-ds', label: 'Machine Learning' },
    { id: 'ml-algorithms', label: 'ML Algorithms' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'tools', label: 'Tools & Cloud' },
  ];

  const filteredCategories = skillCategories
    .filter((cat) => (selectedFilter === 'all' ? true : cat.id === selectedFilter))
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const matchingSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: matchingSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Competence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
            <p className="text-slate-400 text-sm mt-3 max-w-xl">
              Categorized technical competencies with practical focus areas across AI/ML workflows, backend integration, algorithmic fundamentals, and cloud tooling.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, algorithm, tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d1424] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] font-semibold'
                  : 'bg-[#0d1424]/80 text-slate-400 hover:text-slate-200 hover:bg-[#131d34] border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.id] || Code2;
            return (
              <div
                key={category.id}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {category.title}
                        </h3>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {category.skills.length} skills
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-4">{category.description}</p>

                  {/* Skills List with Visual Hierarchy */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-[#090e1a]/80 border border-white/5 hover:border-cyan-500/20 transition-all flex items-center justify-between gap-2"
                      >
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-semibold text-slate-200 truncate">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono truncate">
                            {skill.level}
                          </span>
                        </div>
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded border shrink-0 uppercase tracking-wider font-semibold ${
                            badgeStyles[skill.badge] || badgeStyles.Applied
                          }`}
                        >
                          {skill.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>Hierarchy Applied</span>
                  <span className="text-cyan-400">Verified Stack</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend / Transparency note */}
        <div className="mt-12 p-4 rounded-xl bg-[#0d1424]/40 border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-mono text-[11px]">Visual Hierarchy Tags:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded border bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
              CORE: Primary Daily Focus
            </span>
            <span className="px-2 py-0.5 rounded border bg-blue-500/10 text-blue-400 border-blue-500/30">
              APPLIED: Hands-on in Projects
            </span>
            <span className="px-2 py-0.5 rounded border bg-slate-700/30 text-slate-300 border-slate-600/30">
              FOUNDATION: Coursework & Principles
            </span>
            <span className="px-2 py-0.5 rounded border bg-purple-500/10 text-purple-400 border-purple-500/30">
              EXPLORING: Actively Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
