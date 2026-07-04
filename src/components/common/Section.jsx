export default function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`scroll-mt-28 py-24 ${className}`}>
      {children}
    </section>
  );
}