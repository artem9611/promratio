import { MetadataRoute } from "next";
import { getAllArticles, getAllCategories } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://promratio.vercel.app";

  const articles = getAllArticles().map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  const categories = getAllCategories().map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...articles,
    ...categories,
  ];
}
