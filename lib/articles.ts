export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  parent: string;
  category: string;
  special?: boolean;
};

export const articles: Article[] = [
  {
    slug: "ekonomika-stanka",
    title: "Экономика станка: где теряется маржа",
    description: "Разбор структуры себестоимости обработки.",
    date: "2026-02-10",
    parent: "ekonomika",
    category: "sebestoimost",
  },
  {
    slug: "volfram-2026",
    title: "Вольфрам 2026: Хроника Идеального Шторма",
    description:
      "25 причин, почему дешёвого инструмента больше не будет.",
    date: "2026-02-16",
    parent: "ekonomika",
    category: "sebestoimost",
    special: true,
  },
];

export function getAllArticles() {
  return articles.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(
  parent: string,
  category: string
) {
  return articles.filter(
    (a) =>
      a.parent === parent &&
      a.category === category
  );
}

export function getAllCategories(parent: string) {
  return Array.from(
    new Set(
      articles
        .filter((a) => a.parent === parent)
        .map((a) => a.category)
    )
  );
}
