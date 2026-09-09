import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-10"
    >
      {/* Background */}
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

        {/* Blue glow */}
        <div
          className="absolute right-[15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-20 blur-[130px]"
          style={{ background: "var(--accent)" }}
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px]">
          {/* LEFT — Typography */}
          <div>
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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

            {/* Name */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-[clamp(4rem,8vw,8.5rem)] font-extrabold leading-[0.82] tracking-[-0.07em]"
              >
                SOUMYADEEP
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[clamp(4rem,8vw,8.5rem)] font-extrabold leading-[0.82] tracking-[-0.07em] text-white/20"
              >
                DAS<span className="text-[var(--accent)]">.</span>
              </motion.h1>
            </div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 text-xl font-medium tracking-tight text-white/70 md:text-2xl"
            >
              JAVA FULL-STACK ENGINEER
              <span className="mx-3 text-white/20">·</span>
              BACKEND FOCUSED
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/45"
            >
              Backend-focused software engineer with experience building
              scalable microservices, React applications and AI-powered
              solutions.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:brightness-110"
              >
                View my work ↘
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/50 hover:bg-white/[0.03]"
              >
                Let's talk ↗
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-7 flex gap-6"
            >
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
            </motion.div>
          </div>

          {/* RIGHT — Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            {/* Outer frame */}
            <div className="relative overflow-hidden border border-white/10 bg-white/[0.02] p-2">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/Soumyadeep_profile.png"
                  alt="Soumyadeep Das"
                  className="h-full w-full object-cover object-center grayscale-[15%] transition duration-700 hover:scale-[1.02]"
                />

                {/* Image gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent" />

                {/* Accent line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-24"
                  style={{ background: "var(--accent)" }}
                />
              </div>

              {/* Corner accent */}
              <div
                className="absolute -right-px -top-px h-16 w-16 border-r border-t"
                style={{ borderColor: "var(--accent)" }}
              />
            </div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-5 -left-5 border border-white/10 bg-[#080808]/90 px-5 py-3 backdrop-blur-md"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Based in
              </p>
              <p className="mt-1 text-sm font-medium text-white/80">India</p>
            </motion.div>

            {/* Experience label */}
            <div className="absolute -right-18 top-6 hidden border border-white/10 bg-[#080808]/90 px-4 py-3 backdrop-blur-md xl:block">
              <p className="text-xs font-medium text-white/70">3+ YEARS</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">
                Software Engineering
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
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
