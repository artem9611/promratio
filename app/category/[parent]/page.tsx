import Link from "next/link";
import { getAllCategories } from "@/lib/articles";

export default function ParentCategoryPage({
  params,
}: {
  params: { parent: string };
}) {
  const categories = getAllCategories(params.parent);

  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold mb-16 capitalize">
          {params.parent}
        </h1>

        <div className="space-y-8">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${params.parent}/${category}`}
              className="block border-b pb-6 hover:opacity-70"
            >
              <h2 className="text-2xl font-semibold capitalize">
                {category}
              </h2>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
