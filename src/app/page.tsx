import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreakingTicker from "@/components/BreakingTicker";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";
import {
  articles,
  categories,
  getFeatured,
  getLatest,
  getByCategory,
} from "@/data/articles";
import Link from "next/link";

export default function Home() {
  const featured = getFeatured();
  const latest = getLatest(6);
  const rest = articles.filter((a) => a.id !== featured.id).slice(0, 4);

  return (
    <>
      <Header />
      <BreakingTicker />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ArticleCard article={featured} size="lg" />
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)] pb-2">
                Top Stories
              </h2>
              {rest.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.slug}`}
                  className="group flex gap-3 p-2 -mx-2 rounded-lg hover:bg-white transition-colors"
                >
                  <div className="w-24 h-20 shrink-0 rounded overflow-hidden bg-gray-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase text-[var(--primary)]">
                      {article.category}
                    </span>
                    <h3 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
                      {article.title}
                    </h3>
                    <time className="text-xs text-[var(--muted)] mt-1 block">
                      {new Date(article.date).toLocaleDateString("en-ZA", {
                        day: "numeric",
                        month: "short",
                      })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Latest</h2>
              <span className="text-sm text-[var(--muted)]">
                Updated continuously
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {categories.map((cat) => {
          const catArticles = getByCategory(cat).slice(0, 3);
          if (catArticles.length === 0) return null;
          return (
            <section
              key={cat}
              id={cat.toLowerCase()}
              className="max-w-7xl mx-auto px-4 py-10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[var(--primary)] rounded-full" />
                  {cat}
                </h2>
                <Link
                  href={`/category/${cat.toLowerCase()}`}
                  className="text-sm font-medium text-[var(--primary)] hover:underline"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} size="sm" />
                ))}
              </div>
            </section>
          );
        })}

        <section className="bg-white border-y border-[var(--border)]">
          <div className="max-w-xl mx-auto px-4 py-12">
            <NewsletterForm />
          </div>
        </section>

        <section className="bg-[var(--accent)] text-white">
          <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl font-bold mb-3">Inside Factor</h2>
            <p className="max-w-2xl mx-auto text-white/80 leading-relaxed">
              An independent platform for unfiltered investigative journalism.
              Founded by Thabo Makwakwa. We probe the deepest layers of reality
              — corruption, power, and the stories that matter to South Africa
              and the continent.
            </p>
            <Link
              href="/about"
              className="inline-block mt-4 text-sm font-medium text-white/90 underline hover:text-white"
            >
              Learn more about us →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
