import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    featured: true,
    name: "AI Code Review Assistant",
    category: "AI · BACKEND · FULL-STACK",
    description:
      "An AI-powered code review platform that analyzes source code and generates structured feedback, with caching and asynchronous processing designed to reduce repeated AI API calls and improve scalability.",
    problem:
      "Automating repetitive code-review feedback while keeping API usage efficient and the review workflow responsive.",
    stack: [
      "Java 17",
      "Spring Boot",
      "React",
      "TypeScript",
      "MySQL",
      "Redis",
      "Kafka",
      "Docker",
      "JWT",
      "AWS",
    ],
    highlights: [
      "AI-powered automated code analysis",
      "Redis-based review caching",
      "Kafka-based asynchronous processing",
      "JWT authentication with Spring Security",
      "Dockerized application architecture",
    ],
    github: "#",
    demo: "#",
  },
  {
    number: "02",
    featured: false,
    name: "YouTube Playlist Tracker",
    category: "FULL-STACK · API · DATA",
    description:
      "A full-stack application that integrates with the YouTube API to track and organize playlist information through a Spring Boot backend and React frontend.",
    problem:
      "Making playlist information easier to retrieve, organize and interact with through a dedicated application.",
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "YouTube API",
    ],
    highlights: [
      "Spring Boot REST backend",
      "YouTube API integration",
      "React-based frontend",
      "MySQL persistence",
    ],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="work"
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
            03 / Selected Work
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            THINGS
            <br />
            <span className="text-white/20">I'VE BUILT.</span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16">

          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group"
            >
              <div
                className={`overflow-hidden border border-white/10 ${
                  project.featured
                    ? "bg-white/[0.025]"
                    : "bg-white/[0.015]"
                }`}
              >

                {/* Project top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8">
                  <span className="text-xs tracking-[0.2em] text-white/30">
                    PROJECT {project.number}
                  </span>

                  <span className="text-xs tracking-[0.15em] text-white/30">
                    {project.category}
                  </span>
                </div>

                {/* Project content */}
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

                  {/* Left */}
                  <div className="p-8 md:p-12 lg:p-16">

                    <h3
                      className={`font-semibold tracking-[-0.04em] ${
                        project.featured
                          ? "text-4xl md:text-6xl"
                          : "text-3xl md:text-4xl"
                      }`}
                    >
                      {project.name}
                    </h3>

                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
                      {project.description}
                    </p>

                    {/* Problem */}
                    <div className="mt-10 border-l border-white/20 pl-5">
                      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/30">
                        Problem
                      </p>

                      <p className="text-sm leading-relaxed text-white/50">
                        {project.problem}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
                      >
                        GitHub ↗
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/40 hover:text-white"
                      >
                        Live Demo ↗
                      </a>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="border-t border-white/10 p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-16">

                    <div>
                      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
                        Engineering Highlights
                      </p>

                      <div className="space-y-4">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />

                            <p className="text-sm leading-relaxed text-white/60">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stack */}
                    <div className="mt-14">
                      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
                        Stack
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40 transition-colors hover:border-white/30 hover:text-white/70"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;