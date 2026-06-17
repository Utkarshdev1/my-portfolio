import { useReveal } from "../hooks/useReveal";

const skillGroups = [
  {
    title: "Mobile Engineering",
    skills: ["React Native", "iOS & Android", "React Navigation", "Redux", "FCM Push Notifications", "Firebase Crashlytics", "CleverTap", "Detox / Appium", "Performance Profiling", "Lazy Loading / Code Splitting"],
  },
  {
    title: "Frontend Engineering",
    skills: ["React.js", "TypeScript", "JavaScript", "Redux", "Context API", "REST APIs", "GraphQL", "Node.js", "Figma Handoff"],
  },
  {
    title: "Security & Auth",
    skills: ["OAuth2", "JWT", "Biometric Auth", "OWASP", "Secure Token Storage", "Vulnerability Assessment", "Secure Coding"],
  },
  {
    title: "Testing & Delivery",
    skills: ["Jest", "React Testing Library", "CI/CD (Jenkins / GitLab)", "Git / GitHub", "Code Review Leadership", "Agile / Scrum", "Java / Spring Boot"],
  },
];

export default function Skills() {
  const header = useReveal();

  return (
    <section className="relative py-32 bg-[#050816] text-white px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 blur-[140px] rounded-full" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={header} className="reveal mb-20">
          <p className="uppercase tracking-[4px] text-gray-500 text-sm mb-5">Expertise</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            6.5 years of building real products with these.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <SkillCard key={index} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <h3 className="text-2xl font-semibold mb-8">{group.title}</h3>
      <div className="flex flex-wrap gap-4">
        {group.skills.map((skill, i) => (
          <div key={i} className="px-5 py-3 rounded-full bg-black/30 border border-white/10 text-gray-300 text-sm hover:border-green-500/40 hover:text-white transition duration-300">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
