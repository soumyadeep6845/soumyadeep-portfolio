import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-10 lg:pb-0 lg:pt-24"
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
          className="absolute right-[-30%] top-[35%] h-[350px] w-[350px] -translate-y-1/2 rounded-full opacity-20 blur-[100px] sm:right-[5%] sm:h-[450px] sm:w-[450px] sm:blur-[100px] lg:right-[15%] lg:top-1/2 lg:h-[500px] lg:w-[500px] lg:blur-[130px]"
          style={{ background: "var(--accent)" }}
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_440px]">
          {/* LEFT — Typography */}
          <div>
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex max-w-full items-center gap-3 sm:mb-8"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              </span>

              <span className="max-w-[280px] text-[10px] leading-relaxed tracking-[0.07em] text-white/65 sm:max-w-none sm:text-sm sm:tracking-wide">
                SOFTWARE ENGINEER · OPEN TO OPPORTUNITIES
              </span>
            </motion.div>

            {/* Name */}
            <div className="max-w-full overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="whitespace-nowrap text-[clamp(2.65rem,12vw,4.5rem)] font-extrabold leading-[0.84] tracking-[-0.075em] sm:text-[clamp(4rem,11vw,8.5rem)] lg:text-[clamp(4rem,8vw,8.5rem)]"
              >
                SOUMYADEEP
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="whitespace-nowrap text-[clamp(2.65rem,12vw,4.5rem)] font-extrabold leading-[0.84] tracking-[-0.075em] text-white/30 sm:text-[clamp(4rem,11vw,8.5rem)] lg:text-[clamp(4rem,8vw,8.5rem)]"
              >
                DAS<span className="text-[var(--accent)]">.</span>
              </motion.h1>
            </div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 max-w-xl text-base font-medium leading-relaxed tracking-tight text-white/70 sm:mt-8 sm:text-xl md:text-2xl"
            >
              JAVA FULL-STACK ENGINEER
              <span className="mx-2 hidden text-white/20 sm:inline md:mx-3">
                ·
              </span>
              <span className="block sm:inline">BACKEND FOCUSED</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-lg"
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
              className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <a
                href="#work"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:brightness-110 sm:w-auto"
              >
                View my work ↘
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/50 hover:bg-white/[0.03] sm:w-auto"
              >
                Let's talk ↗
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-5 flex gap-6 sm:mt-7"
            >
              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
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
            className="relative mx-auto mt-2 w-full max-w-[300px] sm:mt-0 sm:max-w-[360px] lg:max-w-[440px]"
          >
            {/* Outer frame */}
            <div className="relative overflow-hidden border border-white/10 bg-white/[0.02] p-1.5 sm:p-2">
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
                  className="absolute bottom-0 left-0 h-1 w-20 sm:w-24"
                  style={{ background: "var(--accent)" }}
                />
              </div>

              {/* Corner accent */}
              <div
                className="absolute -right-px -top-px h-12 w-12 border-r border-t sm:h-16 sm:w-16"
                style={{ borderColor: "var(--accent)" }}
              />
            </div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 left-2 border border-white/10 bg-[#080808]/90 px-4 py-2.5 backdrop-blur-md sm:-bottom-5 sm:-left-5 sm:px-5 sm:py-3"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/50 sm:text-[10px]">
                Based in
              </p>

              <p className="mt-1 text-xs font-medium text-white/80 sm:text-sm">
                India
              </p>
            </motion.div>

            {/* Experience label */}
            <div className="absolute -right-18 top-6 hidden border border-white/10 bg-[#080808]/90 px-4 py-3 backdrop-blur-md xl:block">
              <p className="text-xs font-medium text-white/70">3+ YEARS</p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/50">
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/50"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
