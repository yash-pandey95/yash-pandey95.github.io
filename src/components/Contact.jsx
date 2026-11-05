import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  FileDown,
  Send,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '',subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const placeholderEmail = 'yashpan9548@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(placeholderEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    return;
  }

  setIsSending(true);

  try {
    const response = await fetch("https://formspree.io/f/xaeekjro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormSubmitted(true);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } else {
      alert("Unable to send message. Please try again.");
    }

  } catch (error) {
    console.error("Form submission error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSending(false);
  }
};

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Opportunities & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
            I am always interested in learning, collaborating on interesting projects, and exploring opportunities in Machine Learning, Data Analytics, and Software Development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Quick Channels & Links */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              {/* GitHub Card */}
              <a
                href="https://github.com/yash-pandey95"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-[#0e1628] transition-all duration-300 flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">Explore code & project repositories</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/yash-pandey01/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 hover:bg-[#0e1628] transition-all duration-300 flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      LinkedIn
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">Connect professionally & network</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Email Card with Copy Trigger */}
              <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white">Email Address</h3>
                    <p className="text-xs text-slate-400 font-mono truncate">{placeholderEmail}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Download Resume Card */}
              <a
                href={`${import.meta.env.BASE_URL}Yash_Pandey_Resume01.pdf`}
                download="Yash_Pandey_Resume01.pdf"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-emerald-500/40 hover:bg-[#0e1628] transition-all duration-300 flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                    <FileDown className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Download Resume
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">PDF Format • Engineering Profile</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-all" />
              </a>
            </div>

            {/* Response Time & Location Note */}
            <div className="p-4 rounded-xl bg-[#090e1a] border border-white/5 text-xs text-slate-400 font-mono space-y-1">
              <div className="text-slate-300 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for Opportunities & Discussions</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Interested in AI/ML internships, research collaborations, and software engineering roles.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Message / Inquiry Box */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Send a Direct Message
                </h3>
              </div>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Acknowledged!</h4>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Thank you for reaching out. Please also connect directly via LinkedIn or email for immediate collaboration.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sundar Pichai"
                        className="w-full bg-[#090e1a] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full bg-[#090e1a] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject / Discussion Topic</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. ML Internship / Project Collaboration / Tech Discussion"
                      className="w-full bg-[#090e1a] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Yash, I came across your portfolio and would love to discuss..."
                      className="w-full bg-[#090e1a] border border-white/10 rounded-xl p-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-white/5 text-[10px] text-slate-400 font-mono flex items-center justify-between">
              <span>Direct Inquiries</span>
              <span className="text-cyan-400">Response within 24-48 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
