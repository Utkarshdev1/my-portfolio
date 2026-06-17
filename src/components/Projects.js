import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    label: "Fintech / Banking",
    title: "IDFC First Bank",
    subtitle: "Retail & Wholesale Banking Platform",
    description: "Spent 3+ years building the banking features millions of people use daily. Credit card payments, account opening, tax flows, login with biometrics. Owned the security layer end to end and built a shared component library the whole team adopted.",
    tech: ["React Native", "React", "TypeScript", "Redux", "OAuth2", "JWT", "Firebase", "CleverTap"],
    metrics: [
      { value: "10M+", label: "Users on iOS & Android" },
      { value: "30%", label: "Fewer production bugs" },
      { value: "25%", label: "Faster feature delivery" },
      { value: "3+", label: "Years on platform" },
    ],
  },
  {
    label: "Product / From Scratch",
    title: "GetWork",
    subtitle: "Job Platform for Students & Recruiters",
    description: "Built the entire app from scratch as the sole senior engineer. Job search, real-time 1:1 and group chat, a live hiring pipeline, and a college community for students, alumni and recruiters. Nine months, one app, shipped and live.",
    tech: ["React Native", "Firebase", "Redux", "Node.js", "Crashlytics", "FCM"],
    metrics: [
      { value: "9mo", label: "Zero to production" },
      { value: "1", label: "Engineer who built it" },
      { value: "25%", label: "Faster screen onboarding" },
      { value: "Real-time", label: "Chat and notifications" },
    ],
  },
  {
    label: "Enterprise / Insurance",
    title: "Dror Labs",
    subtitle: "Enterprise Mobile Apps, Max Life Insurance & Others",
    description: "First two years of my career, working on enterprise mobile apps for clients where quality and stability weren't optional. Max Life Insurance was the main one. Spent a lot of time on performance, wrote cleaner integrations than I inherited, and started a code review process that hadn't existed before.",
    tech: ["React Native", "JavaScript", "REST APIs", "Git", "Agile"],
    metrics: [
      { value: "2yrs", label: "Enterprise mobile work" },
      { value: "5+", label: "Projects delivered" },
      { value: "0", label: "Code reviews before I joined" },
      { value: "Max Life", label: "Insurance flagship client" },
    ],
  },
  {
    label: "Startup / Entrepreneurship",
    title: "SeedFusion Agrigrow LLP",
    subtitle: "Agriculture Startup, Founded 2025",
    description: "Building an agriculture business focused on seeds, distribution, and modern operations. Applying the same systems thinking from software to a real-world supply chain. Long game, big vision.",
    tech: ["Operations", "Branding", "Distribution", "Business Strategy"],
    metrics: [
      { value: "2025", label: "Founded" },
      { value: "1", label: "Startup building" },
      { value: "Tech", label: "Meets agriculture" },
      { value: "Long", label: "Term vision" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-[#050816] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Header() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal mb-20">
      <p className="uppercase tracking-[4px] text-gray-500 text-sm mb-5">Selected Work</p>
      <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
        Work that shipped and actually made a difference.
      </h2>
    </div>
  );
}

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-green-500/20 transition duration-500">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-green-500 text-sm font-medium uppercase tracking-widest mb-4">{project.label}</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-500 mb-6">{project.subtitle}</p>
          <p className="text-gray-400 leading-relaxed text-lg mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-black/30 border border-white/10 text-sm text-gray-300">{item}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="rounded-2xl bg-black/30 border border-white/10 p-6">
              <h4 className="text-3xl font-bold text-white mb-1">{metric.value}</h4>
              <p className="text-gray-500 text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
