import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import SkillCard from "../../components/ui/SkillCard";

import { fadeUp } from "../../utils/animations";
import { skillCategories, currentlyLearning } from "../../data/Skills";
export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="My Skills"
            title="Technologies I work with"
            description="I enjoy building modern, scalable web applications using technologies across the frontend, backend, and tooling."
          />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          className="mt-6 rounded-3xl border border-dashed border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Currently Learning
            </h3>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {currentlyLearning.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
