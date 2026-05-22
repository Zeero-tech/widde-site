export default function SectionTitle({
  label,
  title,
  id,
  className,
}: {
  label: string;
  title?: string;
  id?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="block text-xs md:text-sm font-bold text-text-muted uppercase tracking-[2px] mb-3">
        {label}
      </span>
      {title && (
        <h2
          id={id}
          className="text-2xl md:text-3xl font-normal text-black leading-[1.25]"
        >
          {title}
        </h2>
      )}
    </div>
  );
}
