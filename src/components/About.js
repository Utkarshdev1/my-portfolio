import MyPic from "../Images/mypic.jpeg";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const left = useReveal();
  const right = useReveal();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] text-white px-6 pt-28">
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div ref={left} className="reveal">
          <p className="uppercase tracking-[4px] text-gray-400 text-sm mb-6">
            Senior Frontend & Mobile Engineer • Pune, India
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            React & React Native
            <span className="block text-green-500">engineer with 6.5 years</span>
            of shipping real products.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
            Most of my work has been in fintech and banking, building the
            features people use every day on their phones. Currently at Xebia,
            working on IDFC First Bank's apps used by 10M+ users.
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300">
              View Work
            </a>
            <a href="/resume.pdf" download="Utkarsh_Kumar_Resume.pdf" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition duration-300">
              Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-10 mt-10">
            <div>
              <h2 className="text-3xl font-bold">6.5+</h2>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">20+</h2>
              <p className="text-gray-500">Projects Built</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">1</h2>
              <p className="text-gray-500">Startup Building</p>
            </div>
          </div>
        </div>

        <div ref={right} className="reveal reveal-scale relative flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
            <img
              src={MyPic}
              alt="Utkarsh Kumar"
              className="relative w-[350px] md:w-[420px] h-[500px] object-cover rounded-[32px] border border-white/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
              <p className="text-sm text-gray-400 mb-1">Currently Building</p>
              <h3 className="font-semibold text-lg">SeedFusion Agrigrow LLP</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
