import { useReveal } from "../hooks/useReveal";

export default function SeedFusion() {
  const left = useReveal();
  const right = useReveal();

  return (
    <section className="relative py-32 bg-[#050816] text-white px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 blur-[140px] rounded-full" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div ref={left} className="reveal">
            <p className="uppercase tracking-[4px] text-gray-500 text-sm mb-5">Building Beyond Software</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Growing
              <span className="block text-green-500">SeedFusion Agrigrow LLP</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Alongside software engineering, I'm building an agriculture startup focused on seeds, innovation, scalable operations, and long-term impact.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              My goal is to combine technology, systems thinking, and entrepreneurship to create meaningful solutions in agriculture and beyond.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              {["Agriculture", "Startup", "Operations", "Branding"].map(tag => (
                <div key={tag} className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">{tag}</div>
              ))}
            </div>
            <a href="https://seedfusionagrigrow.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 text-black font-semibold hover:scale-105 transition duration-300">
              Visit SeedFusion
            </a>
          </div>

          <div ref={right} className="reveal relative">
            <div className="relative rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden p-10">
              <div className="mb-10">
                <p className="text-green-500 text-sm mb-3">Founder Journey</p>
                <h3 className="text-3xl font-bold mb-5">Building systems beyond code.</h3>
                <p className="text-gray-400 leading-relaxed">
                  From scalable software systems to agriculture operations, I enjoy building things that create long-term value.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "1", label: "Startup Building" },
                  { value: "Tech", label: "+ Business Mindset" },
                  { value: "2025", label: "Founded" },
                  { value: "∞", label: "Vision Ahead" },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl bg-black/30 border border-white/10 p-6">
                    <h4 className="text-3xl font-bold mb-2">{item.value}</h4>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
