import Link from "next/link";
import { notFound } from "next/navigation";
import { NAV_STRUCTURE } from "@/lib/navigation";
import { Metadata } from "next";

type Params = {
  params: Promise<{
    group: string;
  }>;
};

// 🔹 Генерация всех групп
export async function generateStaticParams() {
  return NAV_STRUCTURE.map((group) => ({
    group: group.slug,
  }));
}

// 🔹 SEO
export async function generateMetadata(
  { params }: Params
): Promise<Metadata> {
  const { group } = await params;

  const groupData = NAV_STRUCTURE.find(
    (g) => g.slug === group
  );

  if (!groupData) return {};

  return {
    title: `${groupData.title} | ПромРацио`,
    description: `Раздел ${groupData.title} — структурированные материалы по промышленной аналитике.`,
  };
}

export default async function GroupPage({ params }: Params) {
  const { group } = await params;

  const groupData = NAV_STRUCTURE.find(
    (g) => g.slug === group
  );

  if (!groupData) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        {groupData.title}
      </h1>

      <p className="text-gray-600 mb-12 max-w-2xl">
        Выберите направление внутри раздела.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groupData.children?.map((child) => (
          <Link
            key={child.slug}
            href={`/category/${group}/${child.slug}`}
            className="flex items-center justify-center text-center 
                       h-40 text-xl font-semibold 
                       border rounded-2xl 
                       bg-white hover:bg-gray-50 
                       transition-all duration-200 
                       hover:shadow-lg"
          >
            {child.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
