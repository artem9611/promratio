"use client";

import { useEffect, useState } from "react";

export default function VolframPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll<HTMLElement>("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const top = section.offsetTop;

        if (window.scrollY >= top - 300) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Спецпроект Volfram 2026
      </h1>

      <section id="overview" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Обзор</h2>
        <p className="text-gray-700 leading-relaxed">
          Volfram 2026 — стратегическая инициатива по трансформации
          производственных процессов с фокусом на автоматизацию,
          цифровизацию и повышение эффективности.
        </p>
      </section>

      <section id="technology" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Технологии</h2>
        <p className="text-gray-700 leading-relaxed">
          Проект включает внедрение интеллектуальных систем
          анализа данных, роботизации и цифрового управления
          производственными линиями.
        </p>
      </section>

      <section id="roadmap" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Дорожная карта</h2>
        <p className="text-gray-700 leading-relaxed">
          Реализация разбита на этапы: аудит текущих процессов,
          пилотные внедрения, масштабирование и интеграция
          в общую архитектуру предприятия.
        </p>
      </section>
    </div>
  );
}
