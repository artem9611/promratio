"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_STRUCTURE } from "@/lib/navigation";

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
      }
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <nav
        ref={rootRef}
        className="fixed top-0 left-0 right-0 bg-white border-b z-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex space-x-6 py-4 items-center">
            {NAV_STRUCTURE.map((group) => (
              <li key={group.slug} className="relative group">
                {/* Trigger */}
                <div className="flex items-center space-x-2 py-2 px-1">
                  <Link
                    href={`/category/${group.slug}`}
                    className="font-medium border-b-2 border-transparent hover:border-current"
                    onClick={() => setOpen(null)}
                  >
                    {group.title}
                  </Link>

                  {/* Кнопка для мобильных */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen((prev) =>
                        prev === group.slug ? null : group.slug
                      );
                    }}
                    className="p-1 rounded hover:bg-gray-100 md:hidden"
                  >
                    ▼
                  </button>
                </div>

                {/* Submenu */}
                <div
                  className={`
                    absolute left-0 top-full z-50 bg-white border rounded shadow-lg min-w-[220px]
                    hidden
                    group-hover:block
                    ${open === group.slug ? "block" : ""}
                  `}
                >
                  <ul>
                    {group.children?.map((child) => (
                      <li key={child.slug}>
                        <Link
                          href={`/category/${group.slug}/${child.slug}`}
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setOpen(null)}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="h-16" />
    </>
  );
}
