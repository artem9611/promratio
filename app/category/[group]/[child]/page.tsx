import Link from "next/link";
import { notFound } from "next/navigation";
import { ECONOMICS_ARTICLES } from "@/lib/economics-articles";

type Params = {
  params: {
    group: string;
    child: string;
  };
};

export default function SubcategoryPage({ params }: Params) {
  const { group, child } = params;

  if (group !== "ekonomika") return notFound();

  const articles =
    ECONOMICS_ARTICLES[child as keyof typeof ECONOMICS_ARTICLES];

  if (!articles) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">
        {child.toUpperCase()}
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
