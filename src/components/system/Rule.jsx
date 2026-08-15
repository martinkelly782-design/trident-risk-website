// Thin hairline divider primitive.
export default function Rule({ className = "" }) {
  return <div className={`h-px w-full bg-hairline ${className}`} />;
}
