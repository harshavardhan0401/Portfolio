import Container from "../common/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-50">
      <Container>
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-tight">
            HV<span className="text-blue-500">.</span>
          </h1>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors">
              About
            </li>

            <li className="hover:text-white cursor-pointer transition-colors">
              Skills
            </li>

            <li className="hover:text-white cursor-pointer transition-colors">
              Projects
            </li>

            <li className="hover:text-white cursor-pointer transition-colors">
              Contact
            </li>
          </ul>

          <Button variant="outline">
            Resume
          </Button>
        </nav>
      </Container>
    </header>
  );
}