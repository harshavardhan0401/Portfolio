import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/ui/Button";
import FeaturedProjectCard from "../../components/ui/FeaturedProjectCard";

import useMousePosition from "../../hooks/useMousePosition";

import { fadeUp } from "../../utils/animations";

export default function Hero() {
  const { x, y } = useMousePosition();

  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Mouse Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(
            500px circle at ${x}px ${y}px,
            rgba(16,185,129,0.12),
            transparent 70%
          )`,
        }}
      />

      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for Internships
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="font-['Space_Grotesk'] text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Crafting modern
              <br />
              web experiences
              <br />
              that users love.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-8 max-w-xl text-lg leading-8 text-gray-400 md:text-xl"
            >
              Hi, I'm Harsha Vardhan — a Full Stack Developer passionate about
              building modern web applications with React, Java, Firebase, and
              creating beautiful user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button>
                Explore Projects →
              </Button>

              <Button variant="outline">
                Download Resume
              </Button>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                "React",
                "Java",
                "Firebase",
                "SQL",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-emerald-500/30 hover:bg-emerald-500/10"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="hidden lg:block">
            <FeaturedProjectCard />
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center text-zinc-500"
      >
        <span className="text-sm uppercase tracking-[0.25em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-3 h-8 w-[1px] bg-emerald-400"
        />
      </motion.div>
    </Section>
  );
}