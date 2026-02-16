import Link from "next/link";
import { articles } from "@/lib/articles";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-6xl font-semibold tracking-tight mb-16">
          ПромРацио
        </h1>

        <div className="space-y-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block group"
            >
              <h2 className="text-3xl font-semibold group-hover:underline mb-3">
                {article.title}
              </h2>

              <p className="text-lg text-gray-500 leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
