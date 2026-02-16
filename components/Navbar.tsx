"use client";

import Link from "next/link";
import { NAV_STRUCTURE } from "@/lib/navigation";

export default function Navbar() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="text-xl font-bold">
          ПромРацио
        </Link>

        <nav className="flex gap-8 text-sm font-medium">
          {NAV_STRUCTURE.map((item) => (
            <div key={item.slug} className="relative group">
              <Link
                href={item.slug === "projects" ? "/projects" : `/category/${item.slug}`}
                className="hover:opacity-60"
              >
                {item.title}
              </Link>

              {item.children && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <div className="py-1">
                    {item.children.map((child) => {
                      const href = item.slug === "projects"
                        ? `/projects/${child.slug}`
                        : `/category/${item.slug}/${child.slug}`;

                      return (
                        <Link
                          key={child.slug}
                          href={href}
                          className="block px-4 py-2 text-sm hover:bg-gray-50"
                        >
                          {child.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

      </div>
    </header>
  );
}
