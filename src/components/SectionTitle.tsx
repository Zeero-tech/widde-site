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
      <span className="block text-[10px] md:text-xs font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-3">
        {label}
      </span>
      {title && (
        <h2
          id={id}
          className="text-lg md:text-2xl font-normal text-black leading-[1.25]"
        >
          {title}
        </h2>
      )}
    </div>
  );
}
