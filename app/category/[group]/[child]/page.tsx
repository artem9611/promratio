import Link from "next/link";
import { notFound } from "next/navigation";
import { ECONOMICS_ARTICLES } from "@/lib/economics-articles";
import { Metadata } from "next";

type Params = {
  params: Promise<{
    group: string;
    child: string;
  }>;
};

// 🔹 Генерация статических подкатегорий
export async function generateStaticParams() {
  return Object.keys(ECONOMICS_ARTICLES).map((child) => ({
    group: "ekonomika",
    child,
  }));
}

// 🔹 SEO
export async function generateMetadata(
  { params }: Params
): Promise<Metadata> {
  const { child } = await params;

  return {
    title: `${child} | Экономика | ПромРацио`,
    description: `Статьи раздела ${child} по экономике промышленности.`,
  };
}

export default async function SubcategoryPage({ params }: Params) {
  const { group, child } = await params;

  if (group !== "ekonomika") return notFound();

  const articles =
    ECONOMICS_ARTICLES[
      child as keyof typeof ECONOMICS_ARTICLES
    ];

  if (!articles) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">
        {child}
      </h1>

      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/category/${group}/${child}/${article.slug}`}
              className="text-lg hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
