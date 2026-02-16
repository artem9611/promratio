import { notFound } from "next/navigation";
import { ECONOMICS_ARTICLES } from "@/lib/economics-articles";
import { Metadata } from "next";

type Params = {
  params: {
    group: string;
    child: string;
    article: string;
  };
};

// 🔹 Генерация статических путей
export async function generateStaticParams() {
  const paths: {
    group: string;
    child: string;
    article: string;
  }[] = [];

  Object.entries(ECONOMICS_ARTICLES).forEach(
    ([child, articles]) => {
      articles.forEach((article) => {
        paths.push({
          group: "ekonomika",
          child,
          article: article.slug,
        });
      });
    }
  );

  return paths;
}

// 🔹 Автоматическое SEO
export async function generateMetadata(
  { params }: Params
): Promise<Metadata> {
  const { child, article } = params;

  const articleData =
    ECONOMICS_ARTICLES[
      child as keyof typeof ECONOMICS_ARTICLES
    ]?.find((a) => a.slug === article);

  if (!articleData) return {};

  return {
    title: `${articleData.title} | ПромРацио`,
    description: articleData.content.slice(0, 150),
  };
}

export default function ArticlePage({ params }: Params) {
  const { group, child, article } = params;

  if (group !== "ekonomika") return notFound();

  const articles =
    ECONOMICS_ARTICLES[
      child as keyof typeof ECONOMICS_ARTICLES
    ];

  if (!articles) return notFound();

  const articleData = articles.find(
    (a) => a.slug === article
  );

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
