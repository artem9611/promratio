import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-black mb-8 inline-block"
        >
          ← Назад к материалам
        </Link>

        <h1 className="text-5xl font-semibold tracking-tight mb-6">
          {article.title}
        </h1>

        <div className="text-sm text-gray-400 mb-12">
          {article.author} · {new Date(article.date).toLocaleDateString("ru-RU")}
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {article.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
