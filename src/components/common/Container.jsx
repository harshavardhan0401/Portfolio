export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-[1500px] px-10">
      {children}
    </div>
  );
}