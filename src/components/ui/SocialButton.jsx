import { HiArrowUpRight } from "react-icons/hi2";

export default function SocialButton({ icon: Icon, label, value, href }) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-emerald-500/10"
    >
      <span className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-emerald-400 transition-colors duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
          <Icon />
        </span>

        <span>
          <span className="block text-sm font-semibold text-white">
            {label}
          </span>

          {value && (
            <span className="block text-sm text-zinc-400">{value}</span>
          )}
        </span>
      </span>

      <HiArrowUpRight className="shrink-0 text-lg text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
    </a>
  );
}
