import { motion } from "framer-motion";

const experiences = [
  {
    period: "MAY 2024 — NOV 2025",
    role: "Senior Software Engineer",
    company: "VALUELABS SOLUTIONS LLP",
    location: "Hyderabad, Telangana, India · Hybrid",
    description:
      "Worked on backend and full-stack engineering, focusing on Java-based services, automation, application quality and production-ready software delivery.",
    achievements: [
      "Built Groovy-based data processing pipelines handling 900K+ records.",
      "Reduced a highly manual workflow from approximately 225 days of effort to around 4 hours.",
      "Improved unit and integration test coverage from approximately 70% to 84% within 15 days.",
      "Reduced SonarQube and Snyk vulnerabilities by approximately 40% through a Java 17 upgrade across 6+ repositories.",
      "Contributed to improving sprint predictability from 81% to 89% through engineering quality and delivery improvements.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Groovy",
      "MySQL",
      "JUnit",
      "Mockito",
      "SonarQube",
      "Snyk",
    ],
  },
  {
    period: "JAN 2023 — APR 2024",
    role: "Software Engineer",
    company: "VALUELABS SOLUTIONS LLP",
    location: "Hyderabad, Telangana, India · Hybrid",
    description:
      "Developed and maintained software applications with a focus on backend services, APIs, databases and engineering quality.",
    achievements: [
      "Developed backend functionality using Java and Spring Boot.",
      "Worked with REST APIs and relational databases.",
      "Contributed to automated testing and code quality practices.",
      "Collaborated within Agile development and sprint-based delivery.",
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "JUnit", "Git"],
  },
  {
    period: "JAN 2022 — APR 2022",
    role: "Software Developer",
    company: "HighRadius · Internship",
    location: "Bhubaneswar, Odisha, India · Remote",
    description:
      "Completed the Highway to HighRadius Internship Program, building and deploying an AI-enabled Fintech B2B cloud application as a full-stack web-based product.",
    achievements: [
      "Built and deployed an AI-enabled Fintech B2B cloud application.",
      "Worked across the full-stack product development lifecycle, including user requirements, user experience and application design.",
      "Developed data models and machine learning models alongside UI components and backend design.",
    ],
    technologies: [
      "Java",
      "JDBC",
      "React.js",
      "HTML",
      "CSS",
      "MySQL",
      "Machine Learning",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">
            <span className="text-[var(--accent)]">03</span> / Experience
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            BUILDING
            <br />
            <span className="text-white/20">IN PRODUCTION.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.role}-${experience.period}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-1 hidden h-[9px] w-[9px] rounded-full bg-white md:block" />

                <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
                  {/* Left */}
                  <div>
                    <p className="text-xs tracking-[0.2em] text-white/30">
                      {experience.period}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-sm text-white/50">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-sm text-white/30">
                      {experience.location}
                    </p>
                  </div>

                  {/* Right */}
                  <div>
                    <p className="max-w-2xl text-lg leading-relaxed text-white/50">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mt-10 space-y-5">
                      {experience.achievements.map((achievement) => (
                        <div key={achievement} className="flex gap-4">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />

                          <p className="text-sm leading-relaxed text-white/60">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mt-10 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-white/40"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
