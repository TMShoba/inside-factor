import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";

export const metadata = {
  title: "About | Inside Factor",
  description:
    "Inside Factor — independent investigative journalism by Thabo Makwakwa. Unfiltered, uncensored news from South Africa.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            About Inside Factor
          </h1>

          <div className="prose prose-lg text-gray-700 space-y-5 leading-relaxed">
            <p className="text-xl text-gray-800 font-medium">
              Unfiltered. Uncensored. Investigative.
            </p>
            <p>
              Inside Factor is an independent newsroom dedicated to hard-hitting
              investigative journalism in South Africa and across the continent.
              We probe the deepest layers of reality — corruption, power,
              governance, and the stories that matter.
            </p>
            <p>
              Founded in the tradition of fearless reporting associated with
              journalist <strong>Thabo Makwakwa</strong>, the platform exists to
              give readers access to uncensored analysis and original
              investigation without commercial or political capture.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-8">Our focus</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Investigations into public and private sector corruption</li>
              <li>Politics, power and accountability</li>
              <li>Business, SOEs and economic governance</li>
              <li>Crime, security and justice</li>
              <li>African affairs and geopolitics</li>
            </ul>
            <h2 className="text-xl font-bold text-gray-900 mt-8">Contact</h2>
            <p>
              For tips, corrections or media enquiries, follow the conversation
              on{" "}
              <a
                href="https://x.com/insightfactor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] font-medium hover:underline"
              >
                X (@insightfactor)
              </a>
              .
            </p>
          </div>

          <div className="mt-12 p-6 bg-white border border-[var(--border)] rounded-xl">
            <NewsletterForm />
          </div>

          <p className="mt-8">
            <Link href="/" className="text-[var(--primary)] font-medium hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
