import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/articles";

export async function GET() {
  const baseUrl = "https://promratio.vercel.app";
  const articles = getAllArticles();

  const rssItems = articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${baseUrl}/articles/${article.slug}</link>
      <guid>${baseUrl}/articles/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    </item>
  `
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>ПромРацио</title>
      <description>Инженерное медиа о рациональном мышлении в промышленности</description>
      <link>${baseUrl}</link>
      ${rssItems}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
