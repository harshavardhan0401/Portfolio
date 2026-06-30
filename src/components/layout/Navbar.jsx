import Container from "../common/Container";
import Button from "../ui/Button";

export default function Navbar() {
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

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">

            <li>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="transition hover:text-white">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </li>

          </ul>

          <Button variant="outline">
            Resume ↗
          </Button>

        </nav>
      </Container>
    </header>
  );
}