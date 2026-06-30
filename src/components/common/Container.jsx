export default function Section({
  children,
  className = "",
  padding = "py-24",
}) {
  return (
    <section className={`${padding} ${className}`}>
      {children}
    </section>
  );
}