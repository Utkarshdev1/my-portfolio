import { useReveal } from "../hooks/useReveal";

const experiences = [
  {
    year: "Mar 2022 - Present",
    role: "Senior Consultant - Frontend & Mobile",
    company: "Xebia · Client: IDFC First Bank · Pune, India",
    description: "Most of my time here has gone into building the things users actually interact with every day. Paying a credit card bill, checking a statement, logging in securely. The scale is real: 10M+ users on iOS and Android. I've also handled the security side, login flows, token management, OWASP compliance, and fixed a few vulnerabilities that could have been nasty if left alone.",
    achievements: [
      "Shipped features used by 10M+ users on iOS & Android",
      "Reduced production bugs by 30% through code reviews",
      "Built shared component library, cut delivery time by 25%",
      "Owned Login & Signup: OAuth2, JWT, Biometrics, OWASP",
      "Found & fixed token leakage and insecure storage issues",
      "Built wholesale journeys: Fixed Deposits, Tax Payments, Borrowings",
      "Set up CleverTap analytics to track where users dropped off",
      "Recognised by IDFC First Bank leadership for technical work",
    ],
  },
  {
    year: "Jul 2021 - Mar 2022",
    role: "Senior Developer - React Native",
    company: "GetWork · Remote",
    description: "This was a build-from-scratch job. No existing codebase, no handover docs, just a product idea and a small team. I set up the architecture, made the stack decisions, and shipped the whole thing. Real-time chat, job tracking, a college community feature. Nine months, one app, shipped.",
    achievements: [
      "Built the entire app from scratch, no existing codebase",
      "Real-time 1:1 and group chat using Firebase",
      "College community network for students, alumni & recruiters",
      "Live hiring pipeline from Applied to Offer with real-time status",
      "Component library cut new screen build time by 25%",
      "Crashlytics + FCM push notifications kept users coming back",
    ],
  },
  {
    year: "Aug 2019 - Jul 2021",
    role: "React Native Developer",
    company: "Dror Labs · Pune, India",
    description: "Where I actually learned to write software properly. Worked on enterprise apps, Max Life Insurance was the big one, and figured out early that slow apps and messy code cost everyone time. Spent a lot of effort on performance and introduced code reviews to the team, which hadn't been a thing before. It made a real difference to what went out to production.",
    achievements: [
      "Delivered production mobile apps for Max Life Insurance",
      "Fixed render bottlenecks and reduced app load times noticeably",
      "Introduced code reviews, raised release quality across the team",
      "Built reusable components shared across multiple client projects",
      "Integrated third-party SDKs and REST APIs across 5+ projects",
    ],
  },
];

export default function Experience() {
  const header = useReveal();
  const edu = useReveal();

  return (
    <section id="experience" className="relative py-32 bg-[#050816] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={header} className="reveal mb-24">
          <p className="uppercase tracking-[4px] text-gray-500 text-sm mb-5">Experience</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            6.5 years. Three companies. One consistent thing.
          </h2>
        </div>

        <div ref={edu} className="reveal mb-20 flex flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-6">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Education</p>
            <h3 className="text-lg font-semibold">B.Tech in Computer Science</h3>
            <p className="text-gray-400 text-sm">Sikkim Manipal Institute of Technology · Graduated 2019</p>
          </div>
        </div>

        <div className="relative border-l border-white/10 ml-4 space-y-20">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal relative pl-10">
      <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
      <p className="text-green-500 font-medium mb-3">{exp.year}</p>
      <h3 className="text-3xl font-bold mb-2">{exp.role}</h3>
      <p className="text-gray-400 mb-6 text-lg">{exp.company}</p>
      <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">{exp.description}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {exp.achievements.map((item, i) => (
          <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
            <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <p className="text-gray-300 text-sm">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
