import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-10"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
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
          <span className="h-2 w-2 rounded-full bg-green-400" />

          <span className="text-sm tracking-wide text-white/50">
            SOFTWARE ENGINEER · INDIA
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
            DAS<span className="text-white">.</span>
          </motion.h1>
        </div>

        {/* Bottom information */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-xl text-lg leading-relaxed text-white/50 md:text-xl"
          >
            Full-Stack Software Engineer. <br />
            Backend-focused, with experience building scalable microservices,
            React applications and AI-powered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-end gap-4 md:justify-end"
          >
            <a
              href="#work"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105"
            >
              View my work ↘
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium transition hover:border-white/50"
            >
              Let's talk ↗
            </a>
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
