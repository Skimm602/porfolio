import { site } from "@/lib/site";

type PdfButtonProps = {
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  label?: string;
};

const base =
  "group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ease-editorial";

const styles: Record<NonNullable<PdfButtonProps["variant"]>, string> = {
  solid:
    "bg-ink text-paper px-6 py-4 hover:bg-secondary",
  outline:
    "border border-ink text-ink px-6 py-4 hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-muted",
};

export default function PdfButton({
  variant = "solid",
  className,
  label = "Download Portfolio",
}: PdfButtonProps) {
  return (
    <a
      href={site.pdf}
      download
      className={`${base} ${styles[variant]} ${className ?? ""}`}
    >
      <span>{label}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
        className="transition-transform duration-300 ease-editorial group-hover:translate-y-0.5"
        aria-hidden
      >
        <path d="M12 3v13" />
        <path d="m6 11 6 6 6-6" />
        <path d="M5 21h14" />
      </svg>
    </a>
  );
}
