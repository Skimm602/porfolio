type MarqueeProps = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className }: MarqueeProps) {
  // Duplicate the sequence so the -50% loop is seamless.
  const sequence = [...items, ...items];

  return (
    <div
      className={`group relative flex overflow-hidden border-y border-line py-5 ${className ?? ""}`}
      aria-hidden
    >
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {sequence.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-2xl italic tracking-tight text-ink sm:text-3xl">
              {item}
            </span>
            <span className="mx-7 inline-block h-1.5 w-1.5 rounded-full bg-ink/40 sm:mx-10" />
          </span>
        ))}
      </div>
    </div>
  );
}
