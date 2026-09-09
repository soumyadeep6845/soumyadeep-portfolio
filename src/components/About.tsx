import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">
            05 / About
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            BEYOND THE
            <br />
            <span className="text-white/20">CODE.</span>
          </h2>
        </motion.div>

        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-3xl text-2xl leading-relaxed tracking-tight text-white/70 md:text-3xl">
              I’m a Full-Stack Software Engineer with a strong
              backend focus, interested in building reliable,
              scalable and maintainable software.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/40">
              My experience spans backend development, REST APIs,
              databases, asynchronous processing, testing and
              modern frontend applications. I enjoy taking a
              problem from an idea to a working production-ready
              solution.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/40">
              I care about clean code, measurable improvements,
              automation and continuously expanding my engineering
              toolkit.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-t border-white/10 pt-6">

              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Education
              </p>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                Bachelor’s Degree (B.Tech)
              </h3>

              {/* Replace these placeholders with exact resume details */}
              <p className="mt-3 text-white/60">
                Electrical & Electronics Engineering
              </p>

              <p className="mt-2 text-sm text-white/30">
                SRM Institute of Science and Technology, Chennai, India
              </p>

              <p className="mt-1 text-sm text-white/30">
                2019 - 2023
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;