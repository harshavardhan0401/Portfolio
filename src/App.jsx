import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";

export default function App() {
  return (
    <main className="bg-[#09090B] text-white min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}