import { motion } from "framer-motion";

export default function SkillCard({ title, skills, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-emerald-400/20" />

      <h3 className="font-display relative text-xl font-semibold text-white">
        {title}
      </h3>

      <div className="relative mt-6 flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white"
          >
            <span className="text-base leading-none">{skill.icon}</span>
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
