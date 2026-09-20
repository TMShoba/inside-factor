"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { articles } from "@/data/articles";
import Link from "next/link";

export default function SearchBox({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const results =
    query.trim().length < 2
      ? []
      : articles
          .filter((a) => {
            const q = query.toLowerCase();
            return (
              a.title.toLowerCase().includes(q) ||
              a.excerpt.toLowerCase().includes(q) ||
              a.category.toLowerCase().includes(q) ||
              a.author.toLowerCase().includes(q)
            );
          })
          .slice(0, 6);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      setOpen(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div ref={ref} className={`relative ${compact ? "w-full" : "w-full max-w-xs"}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search news..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-[var(--border)] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)]"
            aria-label="Search articles"
          />
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </form>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[var(--border)] rounded-lg shadow-lg z-50 overflow-hidden">
          <ul className="max-h-80 overflow-y-auto">
            {results.map((article) => (
              <li key={article.id}>
                <Link
                  href={`/article/${article.slug}`}
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className="block px-3 py-2.5 hover:bg-red-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase text-[var(--primary)]">
                    {article.category}
                  </span>
                  <p className="text-sm font-medium line-clamp-1">{article.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full text-left px-3 py-2 text-xs font-medium text-[var(--primary)] border-t border-[var(--border)] hover:bg-gray-50"
          >
            View all results for &ldquo;{query}&rdquo; →
          </button>
        </div>
      )}
    </div>
  );
}
