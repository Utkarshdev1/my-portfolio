"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Tech Lead",
    role: "Xebia · IDFC First Bank Project",
    text: "Utkarsh took full ownership of the Login and Auth journeys without being asked twice. He flagged security issues proactively, fixed them cleanly, and made sure nothing regressed. The kind of engineer you trust with the hard stuff.",
  },

  {
    name: "Delivery Manager",
    role: "Xebia · Wholesale Banking",
    text: "He was one of the few engineers who could move between retail and wholesale banking features without losing context. Good communicator, no ego, always shipped what he committed to.",
  },

  {
    name: "Engineering Peer",
    role: "React Native Team",
    text: "Utkarsh built the shared component library almost single-handedly. It became something the whole team relied on. That kind of initiative is rare — he saw the problem, solved it, and documented it properly.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-[#050816] text-white px-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="uppercase tracking-[4px] text-gray-500 text-sm mb-5">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Trusted by people I’ve worked with.
          </h2>
        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* CARD */}
              <div className="h-full rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-500 hover:border-green-500/30 hover:bg-white/[0.07]">
                {/* QUOTE */}
                <div className="mb-8">
                  <span className="text-6xl text-green-500 leading-none">
                    “
                  </span>
                </div>

                {/* TEXT */}
                <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                  {item.text}
                </p>

                {/* PERSON */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.name}</h3>

                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
