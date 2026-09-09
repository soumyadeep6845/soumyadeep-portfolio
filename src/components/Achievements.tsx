import { motion } from "framer-motion";

const achievements = [
  {
    number: "01",
    value: "STAR",
    title: "Employee Of The Month Nomination",
    description:
      "Nominated for noteworthy performance and contribution to software development at ValueLabs.",
    label: "PROFESSIONAL",
  },
  {
    number: "02",
    value: "#43",
    title: "GeeksforGeeks Institute Rank",
    description:
      "Ranked 43 among 6,000+ active users at the institute level on GeeksforGeeks.",
    label: "PROBLEM SOLVING",
  },
  {
    number: "03",
    value: "15%",
    title: "Academic Scholarship",
    description:
      "Received a 15% scholarship during the first and second year at SRM University.",
    label: "ACADEMIC",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">
            05 / Recognition
          </p>

          <h2 className="mt-4 text-[2.8rem] font-semibold leading-none tracking-[-0.05em] text-white sm:mt-5 sm:text-5xl md:text-7xl">
            Proof of Work<span className="text-white/30">.</span>
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group relative bg-[#050505] p-5 transition duration-500 hover:bg-white/[0.025] sm:p-7 md:p-9"
            >
              {/* Accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between gap-4">
                <span className="shrink-0 font-mono text-[10px] text-white/40">
                  {achievement.number}
                </span>

                <span className="text-right text-[8px] uppercase tracking-[0.18em] text-white/40 sm:text-[9px] sm:tracking-[0.2em]">
                  {achievement.label}
                </span>
              </div>

              <div className="mt-10 sm:mt-14">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  {achievement.value}
                </p>

                <h3 className="mt-4 text-base font-medium leading-snug text-white/80 sm:mt-5 sm:text-lg">
                  {achievement.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-white/50 sm:text-sm">
                  {achievement.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
