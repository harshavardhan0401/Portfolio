export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105",
    outline:
      "border border-white/20 text-white hover:bg-white/10 hover:scale-105",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}