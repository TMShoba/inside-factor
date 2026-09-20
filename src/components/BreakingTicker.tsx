import { getBreaking } from "@/data/articles";
import Link from "next/link";

export default function BreakingTicker() {
  const breaking = getBreaking();
  if (breaking.length === 0) return null;

  const items = [...breaking, ...breaking];

  return (
    <div className="bg-[var(--primary)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="shrink-0 bg-[var(--primary-dark)] px-4 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          Breaking
        </div>
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="ticker-track flex whitespace-nowrap gap-12">
            {items.map((article, i) => (
              <Link
                key={`${article.id}-${i}`}
                href={`/article/${article.slug}`}
                className="text-sm font-medium hover:underline"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
