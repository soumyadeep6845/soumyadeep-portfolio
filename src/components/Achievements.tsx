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
      className="border-t border-white/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            05 / Recognition
          </p>

          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
            Proof of Work<span className="text-white/20">.</span>
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
              className="group relative bg-[#050505] p-7 transition duration-500 hover:bg-white/[0.025] md:p-9"
            >
              {/* Accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/20">
                  {achievement.number}
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                  {achievement.label}
                </span>
              </div>

              <div className="mt-14">
                <p className="text-5xl font-semibold tracking-[-0.05em] text-white">
                  {achievement.value}
                </p>

                <h3 className="mt-5 text-lg font-medium text-white/80">
                  {achievement.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/35">
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
