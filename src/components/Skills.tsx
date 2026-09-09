import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    skills: ["Java", "Groovy", "TypeScript"],
  },
  {
    number: "02",
    title: "Backend",
    skills: [
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Spring Security",
      "JWT",
    ],
  },
  {
    number: "03",
    title: "Data",
    skills: ["MySQL", "Redis"],
  },
  {
    number: "04",
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML", "CSS"],
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "AWS",
      "CI/CD",
      "Gradle",
      "Maven",
      "Bamboo",
    ],
  },
  {
    number: "06",
    title: "Quality & Engineering",
    skills: [
      "JUnit",
      "Mockito",
      "SonarQube",
      "Snyk",
      "Git",
      "JIRA",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 grid gap-8 md:grid-cols-2"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">
              04 / Technical Arsenal
            </p>

            <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              TOOLS OF
              <br />
              <span className="text-white/20">THE TRADE.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-md text-lg leading-relaxed text-white/50">
              Technologies I use to design, build, test and ship
              production-ready software.
            </p>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group min-h-[280px] border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.03] md:p-10"
            >
              <div className="flex h-full flex-col">

                {/* Number */}
                <span className="text-xs tracking-[0.2em] text-white/25">
                  {group.number}
                </span>

                {/* Title */}
                <h3 className="mt-8 text-xl font-medium tracking-tight">
                  {group.title}
                </h3>

                {/* Skills */}
                <div className="mt-auto flex flex-wrap gap-2 pt-10">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45 transition-all duration-300 group-hover:border-white/20 group-hover:text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;