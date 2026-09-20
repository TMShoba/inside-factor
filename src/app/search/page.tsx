import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import SearchBox from "@/components/SearchBox";
import { articles } from "@/data/articles";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export const metadata = {
  title: "Search | Inside Factor",
  description: "Search investigative journalism and news from Inside Factor",
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  const results = query
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query) ||
          a.author.toLowerCase().includes(query)
      )
    : [];

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold mb-2">Search</h1>
          <p className="text-[var(--muted)] text-sm mb-6">
            Find investigations, politics, business and more
          </p>

          <div className="max-w-xl mb-10">
            <SearchBox />
          </div>

          {query ? (
            <>
              <p className="text-sm text-[var(--muted)] mb-6">
                {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
                <span className="font-semibold text-gray-800">&ldquo;{q}&rdquo;</span>
              </p>
              {results.length === 0 ? (
                <div className="bg-white border border-[var(--border)] rounded-lg p-8 text-center">
                  <p className="text-gray-600 mb-4">No articles matched your search.</p>
                  <Link href="/" className="text-[var(--primary)] font-medium hover:underline">
                    ← Back to home
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-[var(--muted)]">Type a keyword above to search.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
