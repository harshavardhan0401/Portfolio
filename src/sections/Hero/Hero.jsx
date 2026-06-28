import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/ui/Button";
export default function Hero() {
  return (
    <Section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl" />
      <Container>
        <div className="max-w-4xl">

          <p className="text-blue-400 font-medium mb-4">
            Full Stack Developer
          </p>

          <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Crafting modern
            <br />
                  web experiences
            <br />
               that users love.
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 leading-8">
            Hi, I'm Harsha Vardhan — a Full Stack Developer passionate about
            building modern web applications with React, Java and Firebase.
            <div className="mt-10 flex flex-wrap gap-4">
                <Button>
                    Explore Projects →
                </Button>

                <Button variant="outline">
                     Download Resume
                </Button>
            </div>
          </p>

        </div>
      </Container>
    </Section>
  );
}