import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}
        <a href="#home" className="text-lg font-bold tracking-tighter">
          SD<span className="text-white/40">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#work"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Work
          </a>

          <a
            href="#experience"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Experience
          </a>

          <a
            href="#skills"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#about"
            className="text-sm text-white/60 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-white/50 hover:bg-white hover:text-black md:block"
        >
          Resume ↗
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
