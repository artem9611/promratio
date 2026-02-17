"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_STRUCTURE } from "@/lib/navigation";

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const clearClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = (delay = 200) => {
    clearClose();
    closeTimer.current = window.setTimeout(() => {
      setOpen(null);
    }, delay);
  };

  return (
    <>
      <nav
        ref={rootRef}
        className="fixed top-0 left-0 right-0 bg-white border-b z-50"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          
          {/* Логотип */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            ПромРацио
          </Link>

          {/* Меню */}
          <ul className="flex space-x-8 items-center">
            {NAV_STRUCTURE.map((group) => (
              <li
                key={group.slug}
                className="relative"
                onMouseEnter={() => {
                  clearClose();
                  setOpen(group.slug);
                }}
                onMouseLeave={() => scheduleClose()}
              >
                <div className="flex items-center gap-1">
                  
                  {/* Клик по группе ведёт на страницу группы */}
                  <Link
                    href={`/category/${group.slug}`}
                    className="font-medium hover:text-gray-700"
                    onClick={() => setOpen(null)}
                  >
                    {group.title}
                  </Link>

                  {group.children && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen((prev) =>
                          prev === group.slug ? null : group.slug
                        );
                      }}
                      className="p-1"
                      aria-expanded={open === group.slug}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`w-4 h-4 transition-transform ${
                          open === group.slug ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 01.707.293l5 5a1 1 0 11-1.414 1.414L10 5.414 5.707 9.707A1 1 0 114.293 8.293l5-5A1 1 0 0110 3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Выпадающее подменю */}
                {group.children && open === group.slug && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg"
                    onMouseEnter={clearClose}
                    onMouseLeave={() => scheduleClose()}
                  >
                    <ul>
                      {group.children.map((child) => (
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
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Отступ под фиксированное меню */}
      <div className="h-16" />
    </>
  );
}
