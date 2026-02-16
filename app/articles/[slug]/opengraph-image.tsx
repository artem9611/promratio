import { ImageResponse } from "next/og";
import { getArticleBySlug } from "@/lib/articles";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  const title = article?.title ?? "ПромРацио";
  const category = article?.category ?? "Инженерное медиа";

  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            opacity: 0.7,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {category}
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 24,
            opacity: 0.5,
            letterSpacing: 4,
          }}
        >
          PROMRATIO
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
