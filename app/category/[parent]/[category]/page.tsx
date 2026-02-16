import Link from "next/link";
import { getArticlesByCategory } from "@/lib/articles";

export default function CategoryPage({
  params,
}: {
  params: { parent: string; category: string };
}) {
  const articles = getArticlesByCategory(
    params.parent,
    params.category
  );

  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold mb-16 capitalize">
          {params.parent} / {params.category}
        </h1>

        <div className="space-y-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={
                article.special
                  ? `/projects/${article.slug}`
                  : `/articles/${article.slug}`
              }
              className="block border-b pb-6 hover:opacity-70"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {article.title}
              </h2>
              <p className="text-gray-500">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
