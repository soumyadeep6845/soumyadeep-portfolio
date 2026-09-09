import { motion } from "framer-motion";

const strengths = [
  "Backend Development",
  "REST API Design",
  "Microservices",
  "Database Design",
  "Testing & Code Quality",
  "Cloud & Containerization",
];

function RecruiterSnapshot() {
  return (
    <section className="border-t border-white/10 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Recruiter Snapshot
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-3xl text-3xl font-medium leading-relaxed tracking-tight md:text-4xl">
              Full-Stack Software Engineer with a{" "}
              <span className="text-white/40">
                strong backend focus
              </span>
              , experienced in building APIs, backend services,
              data-driven workflows and production-ready applications.
            </h2>

            <div className="mt-12 flex flex-wrap gap-3">
              {strengths.map((strength, index) => (
                <motion.span
                  key={strength}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/50 transition-colors hover:border-white/30 hover:text-white"
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default RecruiterSnapshot;