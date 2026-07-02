import { motion } from "framer-motion";
import Button from "./Button";
import { slideLeft } from "../../utils/animations";

export default function FeaturedProjectCard() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideLeft}
      className="group relative w-full overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1220] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(16,185,129,0.18)] hover:border-emerald-500/40"
    >
      {/* Shine Effect */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          rounded-[24px]
        "
      >
        <div
          className="
            absolute
            -left-1/2
            top-0
            h-full
            w-1/2
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/5
            to-transparent
            translate-x-[-200%]
            transition-transform
            duration-[1800ms]
            group-hover:translate-x-[350%]
          "
        />
      </div>

      {/* Glow */}
      <div
        className="
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

      {/* Label */}
      <span className="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
        Featured Project
      </span>

      {/* Title */}
      <h3 className="mt-5 text-3xl font-bold text-white">
        CRUX
      </h3>

      {/* Subtitle */}
      <p className="mt-2 text-sm leading-6 text-gray-400">
        A platform that helps college students discover teammates,
        collaborate on projects, and showcase their skills.
      </p>

      {/* Tech Stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {["React", "Firebase", "Tailwind"].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Stats */}
      <motion.div 
        className="mt-5 grid grid-cols-3 gap-3"
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.15,
          delayChildren:1.2,
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15, },
            visible: { opacity: 1, y: 0,},
          }}
         className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-center">
          <p className="text-lg font-bold text-emerald-400">
            3+
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            Features
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15, },
            visible: { opacity: 1, y: 0,},
          }}
         className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-center">
          <p className="text-xl font-bold text-emerald-400">
            100%
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            Responsive
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15, },
            visible: { opacity: 1, y: 0,},
          }}
         className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-center">           <p className="text-xl font-bold text-emerald-400">
            Live
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            Status
          </p>
        </motion.div>
      </motion.div>

      {/* Current Focus */}
      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3.5">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Current Focus
        </p>

        <h4 className="mt-1.5 text-base font-semibold leading-6 text-white">
          Building the future of student collaboration.
        </h4>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        <Button>
          Live Demo →
        </Button>

        <Button variant="outline">
          GitHub
        </Button>
      </div>
    </motion.div>
  );
}