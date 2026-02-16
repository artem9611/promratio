import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function HomePage() {
  const articles = getAllArticles();
  const special = articles.find((a) => a.special);

  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-24">

        {special && (
          <section className="bg-black text-white p-16 rounded-[40px]">
            <div className="text-xs uppercase mb-4 opacity-60">
              Спецпроект
            </div>

            <h2 className="text-4xl font-black mb-6">
              {special.title}
            </h2>

            <p className="opacity-80 mb-8">
              {special.description}
            </p>

            <Link
              href={`/projects/${special.slug}`}
              className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-full"
            >
              Читать спецпроект
            </Link>
          </section>
        )}

        <section>
          <h2 className="text-3xl font-semibold mb-12">
            Последние материалы
          </h2>

          <div className="space-y-12">
            {articles
              .filter((a) => !a.special)
              .map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block border-b pb-6 hover:opacity-70"
                >
                  <h3 className="text-2xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500">
                    {article.description}
                  </p>
                </Link>
              ))}
          </div>
        </section>

      </div>
    </main>
  );
}
