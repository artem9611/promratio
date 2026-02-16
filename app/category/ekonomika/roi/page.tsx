import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI оборудования | ПромРацио",
  description:
    "Как рассчитывается ROI промышленного оборудования. Формулы, примеры расчётов и управленческая логика инвестиций в машиностроении.",
};

export default function RoiPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        ROI промышленного оборудования
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        ROI (Return on Investment) — это показатель возврата инвестиций,
        который позволяет оценить, насколько эффективно вложенные средства
        превращаются в прибыль. В промышленности этот показатель особенно
        важен, поскольку капитальные затраты на оборудование значительны,
        а срок окупаемости может составлять годы.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Базовая формула ROI
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Классическая формула:
      </p>

      <div className="bg-gray-100 p-4 rounded mb-6 font-mono">
        ROI = (Чистая прибыль / Инвестиции) × 100%
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Однако в машиностроении необходимо учитывать не только прямую прибыль,
        но и снижение простоев, уменьшение брака, экономию на обслуживании и
        рост производительности.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Пример расчёта
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Предприятие инвестировало 25 млн рублей в новый станок.
        Благодаря увеличению производительности на 20% годовая дополнительная
        прибыль составила 8 млн рублей.
      </p>

      <div className="bg-gray-100 p-4 rounded mb-6 font-mono">
        ROI = (8 000 000 / 25 000 000) × 100% = 32%
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Это означает, что инвестиция возвращает 32% от вложенной суммы ежегодно.
        Срок окупаемости в таком случае составляет чуть более трёх лет.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Что часто упускают
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-3">
        <li>Влияние простоев на общий денежный поток</li>
        <li>Снижение затрат на обслуживание</li>
        <li>Рост качества продукции</li>
        <li>Эффект масштаба при серийном производстве</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Управленческий вывод
      </h2>

      <p className="text-gray-700 leading-relaxed">
        ROI — это не просто формула. Это инструмент стратегического мышления.
        Он позволяет сравнивать альтернативные инвестиционные решения и
        выбирать те, которые обеспечивают устойчивый рост предприятия.
      </p>
    </div>
  );
}
