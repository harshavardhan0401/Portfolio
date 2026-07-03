import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

import Button from "./Button";

export default function ProjectCard({ project, featured = false, index = 0 }) {
  const {
    name,
    tagline,
    description,
    image,
    tech = [],
    liveUrl,
    githubUrl,
    comingSoon,
  } = project;

  if (comingSoon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          {tagline}
        </span>

        <h3 className="font-display mt-3 text-xl font-semibold text-zinc-400">
          {name}
        </h3>

        <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1220] shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_30px_80px_rgba(16,185,129,0.18)] ${
        featured ? "md:grid md:grid-cols-2 md:items-stretch" : ""
      }`}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-emerald-400/30" />

      {/* Image */}
      <div
        className={`relative flex items-center justify-center overflow-hidden border-white/10 bg-white/5 ${
          featured
            ? "min-h-[240px] md:min-h-full md:border-r"
            : "aspect-video border-b"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={`${name} preview`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="font-display select-none text-3xl font-bold tracking-tight text-white/10">
            {name}
          </span>
        )}

        {featured && (
          <span className="absolute left-4 top-4 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
            Featured Project
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative flex flex-col p-6">
        <h3 className="font-display text-2xl font-bold text-white">
          {name}
        </h3>

        {tagline && (
          <p className="mt-1 text-sm font-medium text-emerald-400">
            {tagline}
          </p>
        )}

        <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
          {description}
        </p>

        {tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {(liveUrl || githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {liveUrl && (
              <Button href={liveUrl}>
                Live Demo
                <HiArrowUpRight className="text-base" />
              </Button>
            )}

            {githubUrl && (
              <Button href={githubUrl} variant="outline">
                <FaGithub className="text-base" />
                GitHub
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
