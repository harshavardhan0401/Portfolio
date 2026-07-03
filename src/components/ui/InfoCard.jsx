export default function InfoCard({ icon: Icon, title, subtitle, className = "" }) {
  return (
    <div
      className={`
        flex items-center gap-4 rounded-2xl
        border border-white/10 bg-white/5 p-4
        transition-all duration-300
        hover:-translate-y-1
        hover:border-emerald-500/30
        hover:bg-emerald-500/10
        ${className}
      `}
    >
      {Icon && <Icon className="text-2xl text-emerald-400 shrink-0" />}

      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        {subtitle && <p className="text-sm text-zinc-400">{subtitle}</p>}
      </div>
    </div>
  );
}
