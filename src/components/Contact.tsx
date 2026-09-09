import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-5 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-24 lg:px-10 lg:pt-32"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[350px] w-[500px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[120px] sm:h-[500px] sm:w-[700px] sm:blur-[140px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/10 pb-16 sm:pb-20 md:pb-24"
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">
            08 / Contact
          </p>

          <h2 className="mt-5 max-w-5xl text-[3.35rem] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-[clamp(3.5rem,8vw,8rem)]">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-white/30">USEFUL.</span>
          </h2>

          <div className="mt-9 flex flex-col justify-between gap-7 sm:mt-12 sm:gap-8 md:flex-row md:items-end">
            <p className="max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
              Interested in working together or discussing an engineering
              opportunity? I'd be happy to connect.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:brightness-110 sm:w-auto sm:px-7"
              >
                Connect on LinkedIn ↗
              </a>

              <a
                href="mailto:soumyadeep.dbsslg@gmail.com"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/70 transition duration-300 hover:border-white/40 hover:text-white sm:w-auto sm:px-7"
              >
                Email Me ↗
              </a>
            </div>
          </div>
        </motion.div>

        {/* Links / footer */}
        <div className="grid gap-9 py-8 sm:gap-12 sm:py-10 md:grid-cols-3">
          {/* Identity */}
          <div>
            <p className="text-sm font-semibold text-white">
              SD<span className="text-[var(--accent)]">.</span>
            </p>

            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/50">
              Java Full-Stack Engineer focused on backend systems, scalable
              applications and practical engineering.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-7 gap-y-3 md:justify-center">
            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white sm:text-xs"
            >
              GitHub ↗
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white sm:text-xs"
            >
              LinkedIn ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white sm:text-xs"
            >
              Resume ↗
            </a>
          </div>

          {/* Back to top */}
          <div className="flex md:justify-end">
            <a
              href="#home"
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white sm:text-xs"
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.13em] text-white/40 sm:pt-6 sm:text-[10px] sm:tracking-[0.15em] md:flex-row">
          <span>© {new Date().getFullYear()} Soumyadeep Das</span>

          <span>Built with React · TypeScript · Tailwind</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
