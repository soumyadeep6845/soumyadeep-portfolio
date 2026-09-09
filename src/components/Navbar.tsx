import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "border border-white/10 bg-black/70 shadow-2xl backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="text-lg font-bold tracking-tighter">
          SD<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#work"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            Work
          </a>

          <a
            href="#experience"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            Experience
          </a>

          <a
            href="#skills"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            Skills
          </a>

          <a
            href="#about"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition duration-300 hover:bg-[var(--accent)] hover:text-white"
        >
          Resume ↗
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
