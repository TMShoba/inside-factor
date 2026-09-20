import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { categories, getByCategory } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.toLowerCase() }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const name = categories.find((c) => c.toLowerCase() === slug);
  if (!name) return { title: "Category | Inside Factor" };
  return {
    title: `${name} | Inside Factor`,
    description: `Latest ${name.toLowerCase()} coverage from Inside Factor investigative journalism.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const name = categories.find((c) => c.toLowerCase() === slug);
  if (!name) notFound();

  const list = getByCategory(name);

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm text-[var(--muted)] hover:text-[var(--primary)]"
            >
              ← Home
            </Link>
            <h1 className="text-3xl font-bold mt-2 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[var(--primary)] rounded-full" />
              {name}
            </h1>
            <p className="text-[var(--muted)] text-sm mt-1">
              {list.length} article{list.length !== 1 ? "s" : ""}
            </p>
          </div>

          {list.length === 0 ? (
            <p className="text-gray-600">No articles in this section yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
