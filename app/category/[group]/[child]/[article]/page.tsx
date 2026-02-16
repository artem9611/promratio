import { notFound } from "next/navigation";
import { ECONOMICS_ARTICLES } from "@/lib/economics-articles";

type Params = {
  params: {
    group: string;
    child: string;
    article: string;
  };
};

export default function ArticlePage({ params }: Params) {
  const { group, child, article } = params;

  if (group !== "ekonomika") return notFound();

  const articles =
    ECONOMICS_ARTICLES[child as keyof typeof ECONOMICS_ARTICLES];

  if (!articles) return notFound();

  const articleData = articles.find((a) => a.slug === article);

  if (!articleData) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        {articleData.title}
      </h1>

      <p className="text-gray-700 leading-relaxed">
        {articleData.content}
      </p>
    </div>
  );
}
