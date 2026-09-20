import Link from "next/link";
import type { Article } from "@/data/articles";

type Props = {
  article: Article;
  size?: "sm" | "md" | "lg";
};

export default function ArticleCard({ article, size = "md" }: Props) {
  const isLarge = size === "lg";
  const isSmall = size === "sm";

  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-[var(--border)] hover:shadow-lg transition-shadow duration-300">
      <Link href={`/article/${article.slug}`} className="block">
        <div
          className={`relative overflow-hidden bg-gray-200 ${
            isLarge ? "aspect-[16/9]" : isSmall ? "aspect-[4/3]" : "aspect-[16/10]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-[var(--primary)] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            {article.category}
          </span>
        </div>
        <div className={`p-4 ${isLarge ? "p-5" : ""}`}>
          <h3
            className={`font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-snug ${
              isLarge
                ? "text-xl md:text-2xl line-clamp-3"
                : isSmall
                ? "text-sm line-clamp-2"
                : "text-base line-clamp-2"
            }`}
          >
            {article.title}
          </h3>
          {!isSmall && (
            <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
              {article.excerpt}
            </p>
          )}
          <div className="mt-3 flex items-center gap-2 text-xs text-[var(--muted)]">
            <span className="font-medium text-gray-700">{article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-ZA", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}
