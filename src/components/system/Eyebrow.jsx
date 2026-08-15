// Small uppercase label used for section eyebrows and metadata headings.
export default function Eyebrow({ as: Tag = "span", className = "", children }) {
  return (
    <Tag className={`text-[11px] font-semibold uppercase tracking-[0.22em] text-ink ${className}`}>
      {children}
    </Tag>
  );
}
