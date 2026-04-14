const items: {
  type: "image" | "video";
  src: string;
  alt?: string;
  span?: string;
}[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
    alt: "Fashion store",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600",
    alt: "Brand showcase",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    alt: "E-commerce experience",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    alt: "Shopping",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600",
    alt: "Product display",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    alt: "Product shot",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
    alt: "Lifestyle",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600",
    alt: "Beauty brand",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
    alt: "Fashion editorial",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600",
    alt: "Retail",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    alt: "Product",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600",
    alt: "Sneakers",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function Showcase() {
  return (
    <section className="bg-[#f6f6f6] py-10 md:py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 md:px-2">
        <div
          className="grid grid-cols-2 md:grid-cols-5 auto-rows-[160px] md:auto-rows-[180px] gap-3"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgb(233,233,233)] ${item.span ?? ""}`}
            >
              {item.type === "video" ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={item.src}
                />
              ) : (
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={item.src}
                  alt={item.alt ?? ""}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
