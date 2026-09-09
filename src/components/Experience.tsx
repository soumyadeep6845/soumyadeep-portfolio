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
    featured: true,
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
    featured: true,
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
      className="border-t border-white/10 px-5 py-18 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">
            03 / Experience
          </p>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:mt-5 sm:gap-6 md:flex-row md:items-end">
            <h2 className="text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl md:text-7xl">
              Experience<span className="text-white/30">.</span>
            </h2>

            <p className="max-w-md text-xs leading-relaxed text-white/60 sm:text-sm">
              Three years of building, improving and supporting software systems
              across backend, full-stack and enterprise environments.
            </p>
          </div>
        </motion.div>

        {/* Experience list */}
        <div className="relative">
          {/* Timeline */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-white/10 md:block" />

          <div className="space-y-4 sm:space-y-5">
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

                  <div className="p-5 sm:p-7 md:p-9 lg:p-10">
                    {/* Top row */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                      <div className="flex gap-4 sm:gap-5">
                        <span className="pt-1 font-mono text-[10px] text-white/40 sm:text-xs">
                          {experience.number}
                        </span>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 sm:gap-x-3 sm:gap-y-2">
                            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
                              {experience.role}
                            </h3>

                            <span className="hidden text-white/30 sm:inline">
                              ·
                            </span>

                            <span className="text-xs font-medium text-[var(--accent)] sm:text-sm">
                              {experience.company}
                            </span>
                          </div>

                          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-white/50 sm:gap-x-4 sm:text-xs">
                            <span>{experience.location}</span>
                            <span>{experience.type}</span>
                          </div>
                        </div>
                      </div>

                      <span className="shrink-0 pl-8 font-mono text-[9px] tracking-[0.1em] text-white/45 sm:text-[10px] sm:tracking-[0.12em] lg:pl-0">
                        {experience.period}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="mt-5 max-w-3xl text-xs leading-relaxed text-white/60 sm:mt-8 sm:text-sm md:text-base">
                      {experience.summary}
                    </p>

                    {/* Metrics */}
                    <div className="mt-6 grid border-y border-white/10 sm:mt-9 md:grid-cols-3">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <div
                            key={achievement.label}
                            className={`py-5 sm:py-6 ${
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
                            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                              {achievement.metric}
                            </p>

                            <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[var(--accent)] sm:text-[9px] sm:tracking-[0.18em]">
                              {achievement.label}
                            </p>

                            <p className="mt-2.5 text-[11px] leading-relaxed text-white/50 sm:mt-3 sm:text-xs">
                              {achievement.description}
                            </p>
                          </div>
                        ),
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 sm:mt-7 sm:gap-x-5">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-[9px] uppercase tracking-[0.12em] text-white/45 sm:text-[10px] sm:tracking-[0.14em]"
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
