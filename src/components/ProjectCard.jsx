import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  Layers,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Database,
  Cloud,
  Cpu,
  BarChart2,
} from 'lucide-react';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  // Status badge styling
  const getStatusBadge = (statusType, badgeText) => {
    switch (statusType) {
      case 'completed':
      case 'deployed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {badgeText}
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
            <Clock className="w-3 h-3 text-amber-400" />
            {badgeText}
          </span>
        );
      case 'ongoing':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <BarChart2 className="w-3 h-3 text-cyan-400" />
            {badgeText}
          </span>
        );
    }
  };

  return (
    <div className="glass-panel rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg shadow-black/40 hover:shadow-cyan-500/10">
      <div className="p-6 sm:p-7 space-y-5">
        {/* Header: Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
          <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
            {project.category}
          </span>
          {getStatusBadge(project.statusType, project.badge)}
        </div>

        {/* Title & Former Name */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          {project.previousName && (
            <span className="inline-block mt-1 text-xs font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              {project.previousName}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Metric / Highlight Banner */}
        {project.metric && (
          <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs font-mono text-cyan-300 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{project.metric}</span>
          </div>
        )}

        {/* Technology Badges */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
            Technologies Used
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-300 bg-[#0a101d] border border-white/10 group-hover:border-cyan-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable Technical Details Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 pt-1 focus:outline-none"
        >
          <span>{expanded ? 'Hide Architecture & Features' : 'View Key Features & Pipeline'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Expanded Technical Details */}
        {expanded && (
          <div className="pt-4 border-t border-white/10 space-y-4 text-xs animate-in fade-in duration-200">
            {project.features && (
              <div>
                <span className="font-mono text-slate-400 block mb-2 font-semibold">
                  Core Project Features:
                </span>
                <ul className="space-y-1.5 text-slate-300">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture && (
              <div className="pt-2">
                <span className="font-mono text-slate-400 block mb-2 font-semibold">
                  System Architecture:
                </span>
                <div className="space-y-1.5">
                  {project.architecture.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded bg-[#060a14] border border-white/5 text-slate-300 font-mono text-[11px]"
                    >
                      {arch}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.collectionItems && (
              <div className="pt-2">
                <span className="font-mono text-slate-400 block mb-2 font-semibold">
                  Analytical Focus Areas:
                </span>
                <div className="space-y-2">
                  {project.collectionItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-[#060a14] border border-white/5 space-y-0.5"
                    >
                      <span className="font-semibold text-slate-200 block">{item.title}</span>
                      <span className="text-slate-400 text-[11px] block">{item.focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.disclaimer && (
              <div className="p-3 rounded-lg bg-slate-900/90 border border-white/10 text-[11px] text-slate-400 flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{project.disclaimer}</span>
              </div>
            )}

            {project.statusNote && (
              <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/20 text-[11px] text-amber-300/90 flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{project.statusNote}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Action Buttons Footer */}
      <div className="p-5 sm:px-7 bg-[#090e1a]/90 border-t border-white/5 flex items-center justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
        >
          <Github className="w-3.5 h-3.5 text-cyan-400" />
          <span>Repository</span>
        </a>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(0,102,255,0.3)] transition-all"
          >
            <span>Live System</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-[11px] font-mono text-slate-500 italic">
            {project.statusType === 'in-progress' ? 'Model in Training' : 'Internal / Analytical'}
          </span>
        )}
      </div>
    </div>
  );
}
