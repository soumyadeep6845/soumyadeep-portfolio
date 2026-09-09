import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 pb-10 pt-32 lg:px-10"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[140px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/10 pb-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            08 / Contact
          </p>

          <h2 className="mt-6 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-white/20">USEFUL.</span>
          </h2>

          <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-lg text-base leading-relaxed text-white/40">
              Interested in working together or discussing an engineering
              opportunity? I'd be happy to connect.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:brightness-110"
              >
                Connect on LinkedIn ↗
              </a>

              <a
                href="mailto:soumyadeep.dbsslg@gmail.com"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/70 transition duration-300 hover:border-white/40 hover:text-white"
              >
                Email Me ↗
              </a>
            </div>
          </div>
        </motion.div>

        {/* Links / footer */}
        <div className="grid gap-12 py-10 md:grid-cols-3">
          {/* Identity */}
          <div>
            <p className="text-sm font-semibold text-white">
              SD<span className="text-[var(--accent)]">.</span>
            </p>

            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/25">
              Java Full-Stack Engineer focused on backend systems, scalable
              applications and practical engineering.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white"
            >
              Resume ↗
            </a>
          </div>

          {/* Back to top */}
          <div className="flex md:justify-end">
            <a
              href="#home"
              className="group flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white"
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.15em] text-white/20 md:flex-row">
          <span>© {new Date().getFullYear()} Soumyadeep Das</span>

          <span>Built with React · TypeScript · Tailwind</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
