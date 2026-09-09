import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/30 sm:text-xs sm:tracking-[0.3em]">
            <span className="text-[var(--accent)]">07</span> / About
          </p>

          <h2 className="max-w-4xl text-[3rem] font-bold leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            BEYOND THE
            <br />
            <span className="text-white/20">CODE.</span>
          </h2>
        </motion.div>

        <div className="grid gap-14 sm:gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-3xl text-xl leading-relaxed tracking-tight text-white/70 sm:text-2xl md:text-3xl">
              I’m a Full-Stack Software Engineer with a strong backend focus,
              interested in building reliable, scalable and maintainable
              software.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/40 sm:mt-8 sm:text-base">
              My experience spans backend development, REST APIs, databases,
              asynchronous processing, testing and modern frontend applications.
              I enjoy taking a problem from an idea to a working
              production-ready solution.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/40 sm:mt-6 sm:text-base">
              I care about clean code, measurable improvements, automation and
              continuously expanding my engineering toolkit.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-t border-white/10 pt-5 sm:pt-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/30 sm:text-xs sm:tracking-[0.25em]">
                Education
              </p>

              <h3 className="mt-6 text-xl font-semibold tracking-tight sm:mt-8 sm:text-2xl">
                Bachelor’s Degree (B.Tech)
              </h3>

              <p className="mt-3 text-sm text-white/60 sm:text-base">
                Electrical & Electronics Engineering
              </p>

              <p className="mt-2 text-xs leading-relaxed text-white/30 sm:text-sm">
                SRM Institute of Science and Technology, Chennai, India
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/30 sm:mt-6 sm:gap-4 sm:text-sm">
                <span>2019 — 2023</span>
                <span>·</span>
                <span>CGPA 9.3 / 10.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
