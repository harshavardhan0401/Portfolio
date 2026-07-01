import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiCodeBracket,
  HiMapPin,
  HiRocketLaunch,
} from "react-icons/hi2";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/ui/Button";

import { fadeUp } from "../../utils/animations";

export default function About() {
  return (
    <Section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_520px]">
          {/* ================= LEFT SIDE ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <span className="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-300">
              About Me
            </span>

            <h2 className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
              Building software that solves real problems.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I'm Harsha Vardhan, a third-year Computer Science student
              passionate about Full Stack Development. I enjoy building clean,
              responsive web applications with React, Java, and Firebase while
              constantly improving my problem-solving skills through Data
              Structures and Algorithms.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              My goal is to build products that are simple to use, visually
              appealing, and capable of solving real-world problems.
            </p>

            <div className="mt-8">
              <Button>
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex justify-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              className="
                group
                relative
                w-full
                max-w-[520px]
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-br
                from-[#111827]
                to-[#0B1220]
                p-7
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                transition-all
                duration-500
                hover:border-emerald-500/30
                hover:shadow-[0_30px_80px_rgba(16,185,129,0.18)]
              "
            >
              {/* Glow (matches FeaturedProjectCard) */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-emerald-500/15
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:scale-125
                  group-hover:bg-emerald-400/30
                "
              />

              <div className="relative space-y-5">
                {/* Education */}
                <div
                  className="
                    flex items-center gap-4 rounded-2xl
                    border border-white/10 bg-white/5 p-4
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-emerald-500/30
                    hover:bg-emerald-500/10
                  "
                >
                  <HiAcademicCap className="text-2xl text-emerald-400" />

                  <div>
                    <h4 className="font-semibold text-white">
                      B.Tech Computer Science
                    </h4>

                    <p className="text-sm text-zinc-400">
                      Entering 3rd Year
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div
                  className="
                    flex items-center gap-4 rounded-2xl
                    border border-white/10 bg-white/5 p-4
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-emerald-500/30
                    hover:bg-emerald-500/10
                  "
                >
                  <HiCodeBracket className="text-2xl text-emerald-400" />

                  <div>
                    <h4 className="font-semibold text-white">
                      Full Stack Development
                    </h4>

                    <p className="text-sm text-zinc-400">
                      React • Java • Firebase
                    </p>
                  </div>
                </div>

                {/* Project */}
                <div
                  className="
                    flex items-center gap-4 rounded-2xl
                    border border-white/10 bg-white/5 p-4
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-emerald-500/30
                    hover:bg-emerald-500/10
                  "
                >
                  <HiRocketLaunch className="text-2xl text-emerald-400" />

                  <div>
                    <h4 className="font-semibold text-white">
                      Building CRUX
                    </h4>

                    <p className="text-sm text-zinc-400">
                      Student Collaboration Platform
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div
                  className="
                    flex items-center gap-4 rounded-2xl
                    border border-white/10 bg-white/5 p-4
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-emerald-500/30
                    hover:bg-emerald-500/10
                  "
                >
                  <HiMapPin className="text-2xl text-emerald-400" />

                  <div>
                    <h4 className="font-semibold text-white">
                      Andhra Pradesh
                    </h4>

                    <p className="text-sm text-zinc-400">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Highlights */}
              <div className="mt-8">
                <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Quick Highlights
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-500/30 hover:bg-emerald-500/10">
                    <p className="text-2xl font-bold text-emerald-400">
                      3+
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">
                      Projects
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-500/30 hover:bg-emerald-500/10">
                    <p className="text-2xl font-bold text-emerald-400">
                      React
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">
                      Primary Stack
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-500/30 hover:bg-emerald-500/10">
                    <p className="text-2xl font-bold text-emerald-400">
                      Java
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">
                      Backend
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-500/30 hover:bg-emerald-500/10">
                    <p className="text-2xl font-bold text-emerald-400">
                      Open
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">
                      Internship
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}