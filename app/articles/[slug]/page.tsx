import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllArticles,
  getArticleBySlug,
  getArticlesByCategory,
} from "@/lib/articles";
import Breadcrumbs from "@/components/Breadcrumbs";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);

  if (!article) notFound();

  const related = getArticlesByCategory(
    article.parent,
    article.category
  ).filter((a) => a.slug !== article.slug);

  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <article className="max-w-3xl mx-auto">

        <Breadcrumbs
          parent={article.parent}
          category={article.category}
          title={article.title}
        />

        <h1 className="text-5xl font-semibold mb-6">
          {article.title}
        </h1>

        <p className="text-gray-500 mb-12">
          {article.description}
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Здесь будет основной текст статьи.
          </p>
        </div>

        {related.length > 0 && (
          <div className="mt-24 border-t pt-12">
            <h3 className="text-2xl font-semibold mb-8">
              Другие материалы в разделе
            </h3>

            <div className="space-y-6">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={
                    a.special
                      ? `/projects/${a.slug}`
                      : `/articles/${a.slug}`
                  }
                  className="block hover:opacity-70"
                >
                  <h4 className="text-lg font-medium">
                    {a.title}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {a.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
