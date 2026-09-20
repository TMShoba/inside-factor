import Link from "next/link";
import { categories } from "@/data/articles";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-[var(--accent)] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[var(--primary)] rounded flex items-center justify-center text-white font-bold text-lg">
                IF
              </div>
              <div>
                <span className="text-xl font-bold">Inside Factor</span>
                <p className="text-xs text-white/70 uppercase tracking-wider">
                  Investigative Journalism
                </p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Unfiltered and uncensored news. Probing the deepest layers of
              reality. By Thabo Makwakwa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/90">
              Sections
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/category/${cat.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/90">
              Site
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-white transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <a
                  href="https://x.com/insightfactor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Follow on X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Inside Factor. All rights reserved.</p>
          <p>Unfiltered • Uncensored • Investigative</p>
        </div>
      </div>
    </footer>
  );
}
