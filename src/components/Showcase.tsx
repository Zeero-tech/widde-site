const items: {
  src: string;
  alt: string;
  colSpan: number;
  rowSpan: number;
}[] = [
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600", alt: "Fashion store", colSpan: 2, rowSpan: 2 },
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600", alt: "Brand showcase", colSpan: 1, rowSpan: 1 },
  { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600", alt: "E-commerce", colSpan: 1, rowSpan: 1 },
  { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600", alt: "Shopping", colSpan: 1, rowSpan: 1 },
  { src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600", alt: "Product display", colSpan: 1, rowSpan: 1 },
  { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", alt: "Product shot", colSpan: 1, rowSpan: 1 },
];

function BoardBlock({ offset }: { offset: number }) {
  return (
    <div
      className="grid flex-shrink-0 gap-3"
      style={{
        gridTemplateColumns: "repeat(3, 280px)",
        gridTemplateRows: "repeat(3, 180px)",
        gridAutoFlow: "dense",
      }}
    >
      {items.map((item, i) => (
        <div
          key={`${offset}-${i}`}
          className="relative rounded-2xl overflow-hidden bg-amber-700"
          style={{
            gridColumn: `span ${item.colSpan}`,
            gridRow: `span ${item.rowSpan}`,
          }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={item.src}
            alt={item.alt}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="bg-[#f6f6f6] py-10 md:py-20 overflow-hidden">
      <div className="flex">
        <div className="flex gap-3 animate-ticker">
          {Array.from({ length: 6 }).map((_, i) => (
            <BoardBlock key={i} offset={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
