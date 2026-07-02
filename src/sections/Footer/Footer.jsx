import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

import Container from "../../components/common/Container";

const CURRENT_YEAR = new Date().getFullYear();

// TODO: keep these in sync with the real links in Contact.jsx
const SOCIALS = [
  { icon: HiEnvelope, href: "mailto:your.email@example.com", label: "Email" },
  { icon: FaGithub, href: "https://github.com/harshavardhan0401", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/harsha-vardhan-029447355/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-zinc-500">
            © {CURRENT_YEAR} Harsha Vardhan. Built with React &amp; Tailwind CSS.
          </p>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
