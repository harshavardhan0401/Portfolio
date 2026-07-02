export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <span className="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-300">
        {eyebrow}
      </span>

      <h2 className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
