import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/30">
            <span className="text-[var(--accent)]">07</span> / Get In Touch
          </p>

          <h2 className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.07em]">
            LET'S BUILD
            <br />
            <span className="text-white/20">SOMETHING</span>
            <br />
            USEFUL<span className="text-white">.</span>
          </h2>
        </motion.div>

        {/* CTA */}
        <div className="mt-20 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="max-w-lg text-lg leading-relaxed text-white/50 md:text-xl">
              Open to software engineering opportunities, challenging technical
              problems and teams building products that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col items-start md:items-end"
          >
            <a
              href="mailto:soumyadeep.dbsslg@gmail.com"
              className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Email Me
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <div className="mt-8 flex gap-6">
              <a
                href="https://www.linkedin.com/in/soumya0021/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 transition-colors hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/soumyadeep6845"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 transition-colors hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#home"
          whileHover={{ y: -4 }}
          className="mt-16 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white"
        >
          Back to top
          <span className="text-[var(--accent)]">↑</span>
        </motion.a>

        {/* Footer */}
        <footer className="mt-32 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-6 text-xs text-white/25 md:flex-row">
            <div>
              <span className="font-medium text-white/50">SOUMYADEEP DAS</span>
              <span className="mx-2">·</span>
              Full-Stack Software Engineer
            </div>

            <div className="flex gap-6">
              <span>Built with React + TypeScript</span>
              <span>© 2026</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
