import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="relative py-40 bg-[#050816] text-white px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full" />
      <div ref={ref} className="reveal max-w-5xl mx-auto text-center relative z-10">
        <p className="uppercase tracking-[4px] text-gray-500 text-sm mb-6">Let's Connect</p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-10">
          Let's build something
          <span className="block text-green-500">impactful together.</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14">
          Open to senior frontend and mobile engineering roles, React Native projects, fintech products, and startup conversations.
        </p>

        <a
          href="mailto:utkarshkr1710@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition duration-300 mb-20"
        >
          Let's Talk
          <ArrowUpRight size={22} />
        </a>

        <div className="flex justify-center flex-wrap gap-6">
          <a href="https://www.linkedin.com/in/utkarshkumar-frontend/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
          </a>

          <a href="mailto:utkarshkr1710@gmail.com" className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span className="text-gray-300 group-hover:text-white">Email</span>
          </a>
        </div>

        <div className="mt-24 pt-10 border-t border-white/10 text-gray-500 text-sm">
          © 2026 Utkarsh Kumar. Built with React & Tailwind CSS.
        </div>
      </div>
    </section>
  );
}
