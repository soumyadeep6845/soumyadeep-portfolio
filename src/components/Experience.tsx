import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    period: "MAY 2024 — NOV 2025",
    role: "Senior Software Engineer",
    company: "ValueLabs",
    location: "Hyderabad, India",
    type: "FULL-TIME",
    featured: true,
    summary:
      "Built and optimized backend systems for high-volume enterprise workflows, with a strong focus on reliability, automation and engineering quality.",
    achievements: [
      {
        metric: "900K+",
        label: "records processed",
        description:
          "Designed fault-tolerant distributed Groovy pipelines that reduced manual processing effort from 225 days to 4 hours.",
      },
      {
        metric: "84%",
        label: "test coverage",
        description:
          "Increased unit and integration test coverage from approximately 70% to 84% using JUnit and Mockito.",
      },
      {
        metric: "~40%",
        label: "fewer vulnerabilities",
        description:
          "Led Java 17 upgrades across 6+ repositories, reducing SonarQube and Snyk vulnerabilities.",
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Groovy",
      "Gradle",
      "JUnit",
      "Mockito",
      "AWS",
      "Bamboo",
    ],
  },
  {
    number: "02",
    period: "JAN 2023 — APR 2024",
    role: "Software Engineer",
    company: "ValueLabs",
    location: "Hyderabad, India",
    type: "FULL-TIME",
    featured: false,
    summary:
      "Developed production-grade backend microservices and supported high-availability enterprise systems across the development and production lifecycle.",
    achievements: [
      {
        metric: "3×",
        label: "faster PR turnaround",
        description:
          "Helped reduce PR turnaround time from approximately 3 days to 1 day through standardized code review practices.",
      },
      {
        metric: "6+",
        label: "repositories upgraded",
        description:
          "Contributed to Java 17 modernization efforts across multiple repositories while improving code security.",
      },
      {
        metric: "SLA",
        label: "production support",
        description:
          "Primary responder for ServiceNow production incidents, helping restore critical services within SLA.",
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST",
      "JSON",
      "XML",
      "Groovy",
      "Gradle",
    ],
  },
  {
    number: "03",
    period: "JAN 2022 — APR 2022",
    role: "Software Developer",
    company: "HighRadius Corporation",
    location: "Bhubaneswar, India · Remote",
    type: "INTERNSHIP",
    featured: false,
    summary:
      "Worked across the development lifecycle of an AI-enabled fintech B2B cloud application, gaining hands-on full-stack development experience.",
    achievements: [
      {
        metric: "FULL-STACK",
        label: "product development",
        description:
          "Worked across requirements, UX, data models, machine learning models, UI components and backend design.",
      },
      {
        metric: "AI",
        label: "fintech application",
        description:
          "Contributed to an AI-enabled B2B cloud application as part of the Highway to HighRadius Internship Program.",
      },
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            03 / Experience
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
              Experience<span className="text-white/20">.</span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/40">
              Three years of building, improving and supporting software systems
              across backend, full-stack and enterprise environments.
            </p>
          </div>
        </motion.div>

        {/* Experience list */}
        <div className="relative">
          {/* Timeline */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-white/10 md:block" />

          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[13px] top-8 hidden md:block">
                  <div
                    className={`h-3 w-3 rounded-full border ${
                      experience.featured
                        ? "border-[var(--accent)] bg-[var(--accent)]"
                        : "border-white/20 bg-[#050505]"
                    }`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`relative overflow-hidden border ${
                    experience.featured
                      ? "border-white/15 bg-white/[0.025]"
                      : "border-white/10 bg-white/[0.01]"
                  } transition duration-500 hover:border-white/20`}
                >
                  {experience.featured && (
                    <div
                      className="absolute left-0 top-0 h-px w-full"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--accent), transparent 60%)",
                      }}
                    />
                  )}

                  <div className="p-7 md:p-9 lg:p-10">
                    {/* Top row */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex gap-5">
                        <span className="pt-1 font-mono text-xs text-white/20">
                          {experience.number}
                        </span>

                        <div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                              {experience.role}
                            </h3>

                            <span className="text-white/20">·</span>

                            <span className="text-sm font-medium text-[var(--accent)]">
                              {experience.company}
                            </span>
                          </div>

                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/30">
                            <span>{experience.location}</span>
                            <span>{experience.type}</span>
                          </div>
                        </div>
                      </div>

                      <span className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-white/25">
                        {experience.period}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/45 md:text-base">
                      {experience.summary}
                    </p>

                    {/* Metrics */}
                    <div className="mt-9 grid border-y border-white/10 md:grid-cols-3">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <div
                            key={achievement.label}
                            className={`py-6 ${
                              achievementIndex !== 0
                                ? "border-t border-white/10 md:border-l md:border-t-0"
                                : ""
                            } ${
                              achievementIndex !==
                              experience.achievements.length - 1
                                ? "md:pr-7"
                                : ""
                            } ${achievementIndex !== 0 ? "md:pl-7" : ""}`}
                          >
                            <p className="text-2xl font-semibold tracking-tight text-white">
                              {achievement.metric}
                            </p>

                            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
                              {achievement.label}
                            </p>

                            <p className="mt-3 text-xs leading-relaxed text-white/35">
                              {achievement.description}
                            </p>
                          </div>
                        ),
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-[10px] uppercase tracking-[0.14em] text-white/25"
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
