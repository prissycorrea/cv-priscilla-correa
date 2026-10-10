/** Infinite scrolling strip of technologies (pauses on hover, static with reduced motion). */
export default function TechMarquee({ items, label }: { items: string[]; label: string }) {
  const row = (copy: boolean) => (
    <ul aria-hidden={copy || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap text-sm text-white/45">
          <span className="px-6">{item}</span>
          <span aria-hidden className="text-[0.6rem] text-[#a78bfa]">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
      <p className="sr-only">{label}</p>
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
