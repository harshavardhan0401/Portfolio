import { motion } from "framer-motion";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import { fadeUp } from "../../utils/animations";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-300">
            My Skills
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            I enjoy building modern, scalable web applications using
            technologies across the frontend, backend and database.
          </p>
        </motion.div>

        {/* Skill cards will go here */}
      </Container>
    </Section>
  );
}