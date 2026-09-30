export function NavScrim() {
  return (
    <div aria-hidden="true" className="hidden md:block fixed inset-0 z-40 transition-opacity duration-300" style={{backgroundColor: "rgba(20, 20, 22, 0.18)", opacity: "0", pointerEvents: "none"}} />
  );
}
