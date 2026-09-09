import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Designing APIs and backend services with an emphasis on scalability, reliability and maintainability.",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Spring Security",
      "JPA / Hibernate",
      "Multithreading",
      "JVM",
    ],
    featured: true,
  },
  {
    number: "02",
    title: "Data & Caching",
    description:
      "Working with relational data, persistence layers and caching strategies for backend applications.",
    skills: [
      "MySQL",
      "Redis",
      "SQL",
      "Database Design",
      "Query Optimization",
      "JPA",
    ],
    featured: false,
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Building responsive interfaces and connecting them with production backend APIs.",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Axios"],
    featured: false,
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    description:
      "Containerizing applications and supporting automated build, deployment and monitoring workflows.",
    skills: ["Docker", "AWS", "Elastic Beanstalk", "Bamboo", "CI / CD", "Git"],
    featured: false,
  },
  {
    number: "05",
    title: "Quality & Engineering",
    description:
      "Improving software quality through testing, code analysis, modernization and engineering practices.",
    skills: [
      "JUnit",
      "Mockito",
      "SonarQube",
      "Snyk",
      "Gradle",
      "Maven",
      "System Design",
    ],
    featured: false,
  },
  {
    number: "06",
    title: "AI-Assisted Development",
    description:
      "Applying AI capabilities and AI-assisted workflows to improve development and code review processes.",
    skills: [
      "AI Applications",
      "LLM Integration",
      "Prompt Engineering",
      "AI Code Review",
      "Automated Testing",
    ],
    featured: false,
  },
  {
    number: "07",
    title: "Architecture & Distributed Systems",
    description:
      "Designing and implementing scalable, fault-tolerant systems that can handle high loads and complex business requirements.",
    skills: [
      "Microservices",
      "REST API Design",
      "Kafka",
      "Event-Driven Architecture",
      "Distributed Systems",
      "Fault Tolerance",
      "Scalability",
    ],
    featured: false,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:gap-6 lg:mb-20 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">
              04 / Engineering Stack
            </p>

            <h2 className="mt-4 text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:mt-5 sm:text-5xl md:text-7xl">
              Skills<span className="text-white/20">.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-relaxed text-white/40 sm:text-sm">
            Technologies are tools. The real focus is building reliable backend
            systems, useful products and maintainable software.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className={`group relative bg-[#050505] p-5 transition duration-500 hover:bg-white/[0.025] sm:p-7 md:p-9 ${
                group.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

              <div
                className={`${
                  group.featured
                    ? "grid gap-7 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
                    : ""
                }`}
              >
                {/* Heading */}
                <div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-mono text-[9px] text-white/20 sm:text-[10px]">
                      {group.number}
                    </span>

                    <span className="h-px w-6 bg-white/10 sm:w-7" />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-2xl">
                    {group.title}
                    <span className="text-[var(--accent)]">.</span>
                  </h3>

                  <p className="mt-2.5 max-w-lg text-xs leading-relaxed text-white/35 sm:mt-3 sm:text-sm">
                    {group.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.09em] text-white/40 transition duration-300 hover:border-white/25 hover:text-white/80 sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.12em]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex items-start gap-3 sm:mt-10 sm:items-center sm:gap-4"
        >
          <span className="mt-2 h-px w-8 shrink-0 bg-[var(--accent)] sm:mt-0 sm:w-12" />

          <p className="text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white/25 sm:text-xs sm:tracking-[0.2em]">
            Backend first · Full-stack capable · Product minded
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
