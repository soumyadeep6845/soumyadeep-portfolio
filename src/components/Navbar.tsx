import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMobileNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    closeMenu();

    if (!target) {
      return;
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 px-3 py-4 transition-all duration-500 sm:px-5 lg:px-8 ${
        scrolled ? "py-3" : "py-4 sm:py-5"
      }`}
    >
      <nav
        className={`relative mx-auto max-w-7xl rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:rounded-full sm:px-4 ${
          menuOpen || scrolled
            ? "border-white/10 bg-[#080808]/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-2.5"
            aria-label="Back to home"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[9px] font-semibold tracking-tight text-white/80 transition duration-300 group-hover:border-[var(--accent)] group-hover:text-white">
              SD
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>

            <span className="hidden text-xs font-medium tracking-wide text-white/65 transition-colors group-hover:text-white sm:block">
              Soumyadeep Das
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-3.5 py-2 text-[11px] uppercase tracking-[0.12em] text-white/60 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[var(--accent)] transition-all duration-300 group-hover:w-4" />
              </a>
            ))}
          </div>

          {/* Desktop Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/75 transition duration-300 hover:border-[var(--accent)] hover:text-white md:flex"
          >
            Resume
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition duration-300 hover:border-white/30 hover:text-white md:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="relative flex h-4 w-4 items-center justify-center">
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 0 : -3,
                }}
                transition={{ duration: 0.2 }}
                className="absolute h-px w-4 bg-current"
              />

              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? 0 : 3,
                }}
                transition={{ duration: 0.2 }}
                className="absolute h-px w-4 bg-current"
              />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <motion.div
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="border-t border-white/10 px-1 pb-2 pt-4"
              >
                {/* Mobile Links */}
                <div className="flex flex-col">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(event) =>
                        handleMobileNavigation(event, item.href)
                      }
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: 0.05 + index * 0.04,
                      }}
                      className="group flex items-center justify-between border-b border-white/10 px-3 py-3.5 text-xs font-medium uppercase tracking-[0.14em] text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      <span>{item.label}</span>

                      <span className="text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                        →
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Resume */}
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.25 }}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white/80 transition duration-300 hover:border-[var(--accent)] hover:text-white"
                >
                  Resume
                  <span>↗</span>
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Navbar;
