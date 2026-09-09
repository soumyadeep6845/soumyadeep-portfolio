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
    <section className="border-t border-white/10 px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 sm:text-xs sm:tracking-[0.3em]">
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
            <h2 className="max-w-3xl text-[1.55rem] font-medium leading-[1.4] tracking-tight sm:text-3xl sm:leading-relaxed md:text-4xl">
              Full-Stack Software Engineer with a{" "}
              <span className="text-white/40">strong backend focus</span>,
              experienced in building APIs, backend services, data-driven
              workflows and production-ready applications.
            </h2>

            <div className="mt-7 flex flex-wrap gap-2 sm:mt-12 sm:gap-3">
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
                  className="rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] text-white/50 transition-colors hover:border-white/30 hover:text-white sm:px-5 sm:py-2.5 sm:text-sm"
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
