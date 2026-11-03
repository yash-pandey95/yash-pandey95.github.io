import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Sparkles, FolderGit2, Cpu } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning & Predictive' },
    { id: 'fullstack', label: 'Full-Stack & Cloud' },
    { id: 'analytics', label: 'Data Analytics' },
  ];

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ml') {
      return (
        proj.id === 'student-placement-predictor' ||
        proj.id === 'customer-churn-prediction-system'
      );
    }
    if (activeFilter === 'fullstack') {
      return proj.id === 'silver-business-management-system';
    }
    if (activeFilter === 'analytics') {
      return proj.id === 'data-analytics-projects';
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-World Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
            <p className="text-slate-400 text-sm mt-3 max-w-xl">
              End-to-end applications demonstrating machine learning pipelines, RESTful model serving, cloud deployments, and exploratory data analytics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] font-semibold'
                    : 'bg-[#0d1424]/80 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Architecture & Engineering Standards Note */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Authentic Engineering & Transparency</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                All metrics, model accuracies, and statuses represent actual experiments and test evaluations without inflated benchmark claims.
              </p>
            </div>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 hover:underline shrink-0"
          >
            <span>Explore All Repositories on GitHub &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
