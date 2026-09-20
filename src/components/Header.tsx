"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/articles";
import SearchBox from "@/components/SearchBox";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--border)] shadow-sm">
      <div className="bg-[var(--accent)] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <span className="font-medium tracking-wide">
            Unfiltered • Uncensored • Investigative
          </span>
          <span className="hidden sm:inline opacity-90">by Thabo Makwakwa</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 bg-[var(--primary)] rounded flex items-center justify-center text-white font-bold text-lg">
              IF
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                Inside Factor
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-widest text-[var(--muted)] -mt-0.5">
                Investigative Journalism
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--primary)] hover:bg-red-50 rounded-md transition-colors"
              >
                {cat}
              </Link>
            ))}
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--primary)] hover:bg-red-50 rounded-md transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="hidden md:block w-48 lg:w-56">
            <SearchBox />
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-[var(--border)] pt-3 space-y-3">
            <SearchBox compact />
            <nav>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/category/${cat.toLowerCase()}`}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-[var(--primary)] rounded"
                  onClick={() => setOpen(false)}
                >
                  {cat}
                </Link>
              ))}
              <Link
                href="/about"
                className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-[var(--primary)] rounded"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
