import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 px-5 py-5 transition-all duration-500 lg:px-8 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-[#080808]/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label="Back to home"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[9px] font-semibold tracking-tight text-white/70 transition duration-300 group-hover:border-[var(--accent)] group-hover:text-white">
            SD
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>

          <span className="hidden text-xs font-medium tracking-wide text-white/50 transition-colors group-hover:text-white sm:block">
            Soumyadeep Das
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-3.5 py-2 text-[11px] uppercase tracking-[0.12em] text-white/35 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[var(--accent)] transition-all duration-300 group-hover:w-4" />
            </a>
          ))}
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/60 transition duration-300 hover:border-[var(--accent)] hover:text-white"
        >
          Resume
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </nav>
    </motion.header>
  );
}

export default Navbar;
