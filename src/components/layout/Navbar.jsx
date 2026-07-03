import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

import Container from "../common/Container";
import Button from "../ui/Button";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <Container>
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 backdrop-blur-xl">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-3xl font-bold tracking-tight">
              HV<span className="text-emerald-500">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="/resume.pdf" variant="outline">
              Resume ↗
            </Button>
          </div>

          {/* Mobile menu toggle — only element visible on the right below md */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-emerald-500/30 hover:bg-emerald-500/10 md:hidden"
          >
            {isOpen ? (
              <HiXMark className="text-xl" />
            ) : (
              <HiBars3 className="text-xl" />
            )}
          </button>
        </nav>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mx-auto mt-3 w-full max-w-6xl rounded-3xl border border-white/10 bg-[#0B1220]/95 p-6 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-1 text-base text-zinc-300">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-3 transition hover:bg-emerald-500/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-3 border-t border-white/10 pt-4">
                <Button
                  href="/resume.pdf"
                  variant="outline"
                  className="w-full justify-center"
                >
                  Resume ↗
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
