import { MetadataRoute } from "next";
import { NAV_STRUCTURE } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://promratio.vercel.app";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];

  const categoryPages = NAV_STRUCTURE.map((group) => ({
    url: `${baseUrl}/category/${group.slug}`,
    lastModified: new Date(),
  }));

  const childPages = NAV_STRUCTURE.flatMap((group) =>
    group.children?.map((child) => ({
      url: `${baseUrl}/category/${group.slug}/${child.slug}`,
      lastModified: new Date(),
    })) ?? []
  );

  return [...staticPages, ...categoryPages, ...childPages];
}
