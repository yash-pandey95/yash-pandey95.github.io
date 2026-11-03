import React, { useState } from 'react';
import {
  Binary,
  Code2,
  Terminal,
  ExternalLink,
  Github,
  Cpu,
  Sparkles,
  GitBranch,
  Network,
  Workflow,
  ListFilter,
  CheckCircle2,
} from 'lucide-react';

export default function DSA() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const dsaTopics = [
    {
      name: 'Arrays',
      category: 'Linear Data Structures',
      concept: 'Contiguous memory, sliding window, two-pointer techniques, prefix sums',
    },
    {
      name: 'Strings',
      category: 'Linear & Pattern Matching',
      concept: 'Substrings, string manipulation, anagram detection, palindromes',
    },
    {
      name: 'Linked Lists',
      category: 'Pointer-based Structures',
      concept: 'Singly, doubly linked lists, cycle detection (Floyd\'s algorithm), reversal',
    },
    {
      name: 'Stacks',
      category: 'LIFO Principles',
      concept: 'Monotonic stacks, parenthesis matching, expression evaluation',
    },
    {
      name: 'Queues',
      category: 'FIFO Principles',
      concept: 'Circular queues, double-ended queues (deque), priority queues',
    },
    {
      name: 'Trees',
      category: 'Hierarchical Structures',
      concept: 'Binary trees, BST properties, tree traversals (pre, in, post, level-order)',
    },
    {
      name: 'Graphs',
      category: 'Non-linear Networks',
      concept: 'Adjacency lists/matrices, BFS & DFS traversals, cycle detection',
    },
    {
      name: 'Recursion',
      category: 'Algorithmic Paradigms',
      concept: 'Base cases, call stack unwinding, divide and conquer logic',
    },
    {
      name: 'Backtracking',
      category: 'Search Optimization',
      concept: 'State-space tree exploration, pruning invalid branches, permutations',
    },
    {
      name: 'Dynamic Programming',
      category: 'Optimization Paradigms',
      concept: 'Optimal substructure, overlapping subproblems, memoization & tabulation',
    },
    {
      name: 'Sorting',
      category: 'Fundamental Algorithms',
      concept: 'QuickSort, MergeSort, insertion, time/space complexity trade-offs',
    },
    {
      name: 'Searching',
      category: 'Fundamental Algorithms',
      concept: 'Binary search variants, search space reduction O(log N)',
    },
    {
      name: 'Hashing',
      category: 'Direct Access Tables',
      concept: 'Hash maps, collision resolution, frequency tables, O(1) lookups',
    },
  ];

  return (
    <section id="dsa" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Binary className="w-3.5 h-3.5" />
            <span>Problem-Solving Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Structures & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Algorithms</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3" />
        </div>

        {/* Narrative & Philosophy Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-cyan-400 font-mono text-xs font-semibold">
                  Language: C++
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Focus: Algorithmic Rigor & Clean Code
                </span>
              </div>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                "I actively practice Data Structures and Algorithms using C++ to improve my problem-solving abilities and strengthen my understanding of fundamental computer science concepts."
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                By mastering both time and space complexity trade-offs, pointer management, and recursion mechanics in C++, I build a reliable conceptual bridge between low-level computational efficiency and modern high-level machine learning applications.
              </p>
            </div>

            {/* Profile Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 mt-6 border-t border-white/10">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0e1628] hover:bg-[#152038] border border-white/10 hover:border-cyan-500/40 transition-all shadow-sm"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-[#0e1628] hover:bg-[#152038] border border-white/10 hover:border-amber-400/40 hover:text-amber-300 transition-all shadow-sm"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Core Pillars Card */}
          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Core Practicing Pillars</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Foundational goals maintained through regular algorithmic exercises:
              </p>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-[#090e1a] border border-white/5 space-y-1">
                <span className="font-semibold text-cyan-300 block">Time & Space Analysis</span>
                <span className="text-slate-400 block text-[11px]">
                  Evaluating asymptotic bounds and optimizing Big-O bottlenecks.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#090e1a] border border-white/5 space-y-1">
                <span className="font-semibold text-purple-300 block">Pattern Recognition</span>
                <span className="text-slate-400 block text-[11px]">
                  Identifying sliding windows, two-pointers, and dynamic programming states.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#090e1a] border border-white/5 space-y-1">
                <span className="font-semibold text-emerald-300 block">Edge-Case Coverage</span>
                <span className="text-slate-400 block text-[11px]">
                  Handling boundary inputs, empty collections, and recursion termination.
                </span>
              </div>
            </div>

            <div className="pt-2 text-[10px] font-mono text-slate-500">
              * Active problem-solving logs maintained on GitHub repository.
            </div>
          </div>
        </div>

        {/* DSA Topic Visualizer Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
              <Workflow className="w-4 h-4 text-cyan-400" />
              <span>Practiced Topics & Structures</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {dsaTopics.length} Core Areas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dsaTopics.map((topic, idx) => (
              <div
                key={topic.name}
                onClick={() => setSelectedTopic(selectedTopic === topic.name ? null : topic.name)}
                className={`glass-panel p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                  selectedTopic === topic.name
                    ? 'border-cyan-500/60 bg-blue-950/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                    : 'border-white/10 hover:border-cyan-500/30 hover:bg-[#0e1628]/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    C++
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{topic.name}</h4>
                <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase">
                  {topic.category}
                </span>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {topic.concept}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
