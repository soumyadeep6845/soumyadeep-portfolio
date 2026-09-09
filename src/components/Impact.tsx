import { motion } from "framer-motion";

const metrics = [
  {
    value: "900K+",
    label: "Records Processed",
    description: "Automated large-scale data processing workflows.",
  },
  {
    value: "225 → 4",
    label: "Days to Hours",
    description: "Reduced a highly manual process to roughly four hours.",
  },
  {
    value: "84%",
    label: "Test Coverage",
    description: "Improved unit and integration test coverage.",
  },
  {
    value: "~40%",
    label: "Vulnerability Reduction",
    description:
      "Reduced SonarQube and Snyk vulnerabilities across repositories.",
  },
];

function Impact() {
  return (
    <section
      id="impact"
      className="border-t border-white/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24 grid gap-8 md:grid-cols-2"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">
              <span className="text-[var(--accent)]">01</span> / Impact
            </p>

            <h2 className="max-w-xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              ENGINEERING
              <br />
              THAT MOVES
              <br />
              <span className="text-white/20">NUMBERS.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-md text-lg leading-relaxed text-white/50">
              I focus on building reliable backend systems, automating
              repetitive workflows and improving software quality through
              measurable engineering outcomes.
            </p>
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group min-h-[260px] border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.03] md:p-10"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="text-xs text-white/30">0{index + 1}</span>

                <div>
                  <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">
                    {metric.value}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-white/70">
                    {metric.label}
                  </p>

                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/30 transition-colors group-hover:text-white/50">
                    {metric.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
