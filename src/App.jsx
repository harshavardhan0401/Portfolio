import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";

export default function App() {
  return (
    <main className="bg-[#09090B] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}