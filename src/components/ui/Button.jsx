export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...rest
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20",
    outline:
      "border border-white/10 hover:border-emerald-500 hover:bg-emerald-500/10",
  };

  const combined = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={rest.target ?? "_blank"}
        rel={rest.rel ?? "noopener noreferrer"}
        className={combined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combined} {...rest}>
      {children}
    </button>
  );
}