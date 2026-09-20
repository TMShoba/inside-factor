import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article not found" };
  return {
    title: `${article.title} | Inside Factor`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 py-10">
          <div className="mb-6">
            <Link
              href="/"
              className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
            >
              ← Back to home
            </Link>
          </div>

          <span className="inline-block bg-[var(--primary)] text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-4">
            {article.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-[var(--muted)] mb-8 pb-6 border-b border-[var(--border)]">
            <span className="font-semibold text-gray-800">{article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-ZA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 bg-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
            <p className="text-xl font-medium text-gray-700">{article.excerpt}</p>
            <p>
              This is a sample article page for the Inside Factor newsroom
              platform. In a production environment this content would be
              managed through a CMS and would contain the full investigative
              report, documents, and multimedia.
            </p>
            <p>
              Inside Factor continues the tradition of hard-hitting,
              independent journalism that holds power to account — without fear
              or favour.
            </p>
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-white border-t border-[var(--border)]">
            <div className="max-w-7xl mx-auto px-4 py-10">
              <h2 className="text-xl font-bold mb-6">More in {article.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((a) => (
                  <Link
                    key={a.id}
                    href={`/article/${a.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gray-200 mb-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={a.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold text-sm leading-snug group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                      {a.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
