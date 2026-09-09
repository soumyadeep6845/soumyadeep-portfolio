import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "AI Code Review Assistant",
    category: "AI · BACKEND · FULL-STACK",
    description:
      "An AI-powered platform that analyzes source code and generates automated review feedback through a secure, scalable backend architecture.",
    problem:
      "Developed to streamline code review workflows by combining AI-assisted analysis with authentication, caching and asynchronous processing.",
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
    ],
    highlights: [
      "AI-powered source-code analysis",
      "JWT authentication & role-based authorization",
      "Redis caching to reduce repeated AI API calls",
      "Kafka-based asynchronous request processing",
      "Dockerized application architecture",
      "CodeMirror-powered code editor",
    ],
    github: "https://github.com/soumyadeep6845/code-review-assistant-backend",
    demo: "https://youtu.be/KdJRcu-eE5Y?si=bly3o9mi56yKppkr",
    featured: true,
  },
  {
    number: "02",
    title: "YouTube Playlist Tracker",
    category: "FULL-STACK · API",
    description:
      "A full-stack application for tracking YouTube playlists through a Spring Boot backend, React frontend and YouTube API integration.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "YouTube API"],
    highlights: [
      "RESTful backend APIs",
      "YouTube API integration",
      "Persistent playlist data",
      "React-based interface",
    ],
    github:
      "https://github.com/soumyadeep6845/youtube-playlist-tracker-backend",
    demo: "https://github.com/soumyadeep6845/youtube-playlist-tracker-backend",
    featured: false,
  },
];

function ArchitectureFlow() {
  const nodes = [
    {
      label: "CLIENT",
      title: "React UI",
      detail: "CodeMirror",
    },
    {
      label: "API",
      title: "Spring Boot",
      detail: "JWT / REST",
    },
    {
      label: "QUEUE",
      title: "Kafka",
      detail: "Async processing",
    },
    {
      label: "AI",
      title: "Code Review",
      detail: "LLM analysis",
    },
  ];

  return (
    <div className="mt-12 border border-white/10 bg-white/[0.015] p-6 md:p-8">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            Request Architecture
          </p>
          <p className="mt-2 text-sm text-white/50">
            From source code to automated review
          </p>
        </div>

        <div className="hidden text-[10px] uppercase tracking-[0.2em] text-white/20 sm:block">
          SYSTEM FLOW
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {nodes.map((node, index) => (
          <div key={node.label} className="flex items-center md:contents">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className="group relative flex-1 border border-white/10 bg-[#080808] p-5 transition duration-300 hover:border-white/25"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  {node.label}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-70" />
              </div>

              <p className="mt-5 text-sm font-semibold text-white/85">
                {node.title}
              </p>

              <p className="mt-1 text-xs text-white/30">{node.detail}</p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
            </motion.div>

            {index < nodes.length - 1 && (
              <div className="hidden px-2 text-white/20 md:block">→</div>
            )}

            {index < nodes.length - 1 && (
              <div className="py-1 text-center text-white/20 md:hidden">↓</div>
            )}
          </div>
        ))}
      </div>

      {/* Supporting services */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="border border-white/10 bg-[#080808] p-4">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="text-xs font-medium text-white/60">Redis</span>
            <span className="ml-auto text-[9px] uppercase tracking-wider text-white/20">
              Cache
            </span>
          </div>
        </div>

        <div className="border border-white/10 bg-[#080808] p-4">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="text-xs font-medium text-white/60">MySQL</span>
            <span className="ml-auto text-[9px] uppercase tracking-wider text-white/20">
              Persistence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="work" className="border-t border-white/10 px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              02 / Selected Work
            </p>

            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
              Projects<span className="text-white/20">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/40">
            A selection of systems and applications built around backend
            engineering, APIs, AI and full-stack development.
          </p>
        </motion.div>

        {/* Featured project */}
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.015]"
            >
              {/* Top accent */}
              <div
                className="absolute left-0 top-0 h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), transparent 65%)",
                }}
              />

              <div className="p-7 md:p-10 lg:p-14">
                {/* Header */}
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[var(--accent)]">
                        {project.number}
                      </span>

                      <span className="h-px w-8 bg-white/15" />

                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                      {project.title}
                      <span className="text-[var(--accent)]">.</span>
                    </h3>
                  </div>

                  {/* Links */}
                  <div className="flex shrink-0 items-start gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-medium text-white/60 transition duration-300 hover:border-white/40 hover:text-white"
                    >
                      GitHub ↗
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-xs font-medium text-white transition duration-300 hover:brightness-110"
                      >
                        Watch Demo ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="max-w-2xl text-lg leading-relaxed text-white/55">
                      {project.description}
                    </p>

                    <div className="mt-8">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                        Engineering Focus
                      </p>

                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/40">
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Key Capabilities
                    </p>

                    <div className="mt-4 space-y-3">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-white/55"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architecture */}
                <ArchitectureFlow />

                {/* Stack */}
                <div className="mt-10 border-t border-white/10 pt-7">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/35 transition-colors hover:border-white/25 hover:text-white/60"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

        {/* Secondary project */}
        <div className="mt-6">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.01] transition duration-500 hover:border-white/20"
              >
                {/* Accent */}
                <div className="absolute left-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

                <div className="p-7 md:p-10 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-5">
                      <span className="pt-1 font-mono text-xs text-white/20">
                        {project.number}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                          {project.title}
                          <span className="text-[var(--accent)]">.</span>
                        </h3>
                      </div>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  </div>

                  {/* Description */}
                  <div className="mt-9 max-w-3xl">
                    <p className="text-base leading-relaxed text-white/50 md:text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Project details */}
                  <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-2">
                    {/* Engineering focus */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                        Engineering Focus
                      </p>

                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/35">
                        Built as a full-stack application with a Spring Boot
                        backend, React frontend and MySQL persistence, with
                        integration to the YouTube API for playlist-related
                        data.
                      </p>
                    </div>

                    {/* Capabilities */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                        Key Capabilities
                      </p>

                      <div className="mt-4 space-y-3">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-3 text-sm text-white/45"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="mt-10 border-t border-white/10 pt-7">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/35 transition-colors hover:border-white/25 hover:text-white/60"
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
    </section>
  );
}

export default Projects;
