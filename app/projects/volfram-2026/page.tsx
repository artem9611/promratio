"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function Volfram2026() {
  const [margin, setMargin] = useState(30);
  const result = Math.round(110 + 4 + margin * 0.7);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".toc-item");

    const handler = () => {
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop;
        if (window.scrollY >= top - 300) {
          current = section.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href")?.includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const chinaData = {
    labels: ["2023", "2024", "2025", "2026"],
    datasets: [
      {
        data: [180000, 195000, 260000, 460000],
        borderColor: "#ff3b30",
        backgroundColor: "rgba(255,59,48,0.1)",
        borderWidth: 5,
        tension: 0.3,
      },
    ],
  };

  const energyData = {
    labels: ["Китай", "Вьетнам", "США", "Германия"],
    datasets: [
      {
        data: [0.08, 0.07, 0.14, 0.28],
        backgroundColor: ["#34c759", "#34c759", "#ffe600", "#121212"],
        borderRadius: 12,
      },
    ],
  };

  return (
    <div className="antialiased">

      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-black text-xl">
            ПромРацио • Спецпроект
          </div>

          <a
            href="#calculator"
            className="bg-yellow-400 text-black font-bold text-xs uppercase px-6 py-3 rounded-full shadow-lg"
          >
            Калькулятор
          </a>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 px-6">

        {/* SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-3 text-sm font-medium">
            <a href="#intro" className="toc-item block hover:text-black">
              ⚡ Введение
            </a>
            <a href="#china" className="toc-item block hover:text-black">
              I. Китай
            </a>
            <a href="#economics" className="toc-item block hover:text-black">
              III. Экономика
            </a>
            <a href="#calculator" className="toc-item block hover:text-black">
              🧮 Калькулятор
            </a>
          </div>
        </aside>

        {/* MAIN */}
        <main className="lg:col-span-9 space-y-24">

          <section
            id="intro"
            className="bg-white p-16 rounded-[40px] shadow-xl"
          >
            <h1 className="text-6xl font-black leading-none mb-8">
              Вольфрам 2026:
              <br />
              Хроника Катастрофы
            </h1>

            <p className="text-2xl text-gray-600">
              25 причин новой реальности рынка.
            </p>
          </section>

          <section id="china" className="space-y-12">
            <h2 className="text-3xl font-black text-red-500">
              I. Китайский Шторм
            </h2>

            <div className="bg-white p-10 rounded-[40px] shadow">
              <Line data={chinaData} />
            </div>
          </section>

          <section id="economics" className="space-y-12">
            <h2 className="text-3xl font-black text-green-500">
              III. Энергоарбитраж
            </h2>

            <div className="bg-white p-10 rounded-[40px] shadow">
              <Bar data={energyData} />
            </div>
          </section>

          <section
            id="calculator"
            className="bg-black text-white p-16 rounded-[40px] shadow-2xl"
          >
            <h2 className="text-4xl font-black mb-10">
              🧮 Калькулятор Цен 2026
            </h2>

            <label className="block mb-4">
              Логистика и маржа: {margin}%
            </label>

            <input
              type="range"
              min="0"
              max="100"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full mb-10"
            />

            <div className="text-7xl font-black">
              +{result}%
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
