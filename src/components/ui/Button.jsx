export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20",
    outline:
      "border border-white/10 hover:border-emerald-500 hover:bg-emerald-500/10",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}