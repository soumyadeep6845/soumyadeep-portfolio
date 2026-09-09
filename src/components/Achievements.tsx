import { motion } from "framer-motion";

const achievements = [
  {
    number: "01",
    title: "Star Of The Month",
    description:
      "Nominated for the Star Of The Month award at ValueLabs for noteworthy performance in software development.",
  },
  {
    number: "02",
    title: "Institute Rank — 43",
    description:
      "Achieved an institute rank of 43 among 6000+ active users on the GeeksforGeeks platform.",
  },
  {
    number: "03",
    title: "15% Scholarship",
    description:
      "Recipient of a 15% scholarship during the 1st and 2nd year at SRM University.",
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">
            <span className="text-[var(--accent)]">05</span> / Recognition
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            A FEW
            <br />
            <span className="text-white/20">MILESTONES.</span>
          </h2>
        </motion.div>

        <div className="grid border-l border-t border-white/10 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group min-h-[280px] border-b border-r border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.03] md:p-10"
            >
              <div className="flex h-full flex-col justify-between">

                <span className="text-xs tracking-[0.2em] text-white/25">
                  {achievement.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {achievement.title}
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-white/40 transition-colors group-hover:text-white/60">
                    {achievement.description}
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

export default Achievements;