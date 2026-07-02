import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectCard from "../../components/ui/ProjectCard";

import { fadeUp } from "../../utils/animations";
import { projects } from "../../data/projects";

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section id="projects">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="My Work"
            title="Projects I've built"
            description="A few things I've shipped — from a full-stack platform to smaller tools — each one built to solve a real problem, not just fill a portfolio slot."
          />
        </motion.div>

        <div className="mt-14 space-y-6">
          {featured && <ProjectCard project={featured} featured index={0} />}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, index) => (
              <ProjectCard project={project} index={index + 1} key={project.id} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
