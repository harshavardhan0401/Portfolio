import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import SkillCard from "../../components/ui/SkillCard";

import { fadeUp } from "../../utils/animations";
import { skillCategories } from "../../data/skills";

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
      </Container>
    </Section>
  );
}
