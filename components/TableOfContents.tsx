"use client";

import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string }[]
  >([]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("article h2")
    );

    const mapped = elements.map((el, index) => {
      const id = `section-${index}`;
      el.id = id;

      return {
        id,
        text: el.textContent || "",
      };
    });

    setHeadings(mapped);
  }, []);

  if (!headings.length) return null;

  return (
    <aside className="hidden lg:block w-64 pr-8 text-sm text-gray-500">
      <div className="sticky top-28">
        <div className="font-semibold mb-4 text-gray-700">
          В статье
        </div>

        <ul className="space-y-2">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className="hover:text-black transition"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
