import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] items-center">
      <div className="shell">
        <p className="label">Error 404</p>
        <h1 className="mt-6 font-display text-6xl tracking-tightest text-ink sm:text-8xl md:text-9xl">
          Off the plan.
        </h1>
        <p className="mt-6 max-w-md font-body text-lg text-ink/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          <Link href="/" className="link-underline font-mono text-[11px] uppercase tracking-widest2 text-ink">
            Back home
          </Link>
          <Link href="/projects" className="link-underline font-mono text-[11px] uppercase tracking-widest2 text-ink">
            View work
          </Link>
        </div>
      </div>
    </div>
  );
}
