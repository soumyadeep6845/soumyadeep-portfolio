import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-10"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background: "var(--accent)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          </span>

          <span className="text-sm tracking-wide text-white/50">
            SOFTWARE ENGINEER · OPEN TO OPPORTUNITIES
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(4rem,11vw,10rem)] font-bold leading-[0.85] tracking-[-0.07em]"
          >
            SOUMYADEEP
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-[clamp(4rem,11vw,10rem)] font-bold leading-[0.85] tracking-[-0.07em] text-white/20"
          >
            DAS<span className="text-[var(--accent)]">.</span>
          </motion.h1>

          {/* Professional positioning */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-xl font-medium tracking-tight text-white/70 md:text-3xl"
          >
            FULL-STACK SOFTWARE ENGINEER
            <span className="mx-3 text-white/20">·</span>
            JAVA-BACKEND FOCUSED
          </motion.p>
        </div>

        {/* Bottom information */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
              Backend-focused software engineer with experience building
              scalable microservices, React applications and AI-powered
              solutions.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-start md:items-end"
          >
            {/* Primary actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:brightness-110"
              >
                View my work ↘
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/50"
              >
                Let's talk ↗
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-5">
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-white/40"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
