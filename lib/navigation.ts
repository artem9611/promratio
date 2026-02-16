export type NavItem = {
  title: string;
  slug: string;
  children?: {
    title: string;
    slug: string;
  }[];
};

export const NAV_STRUCTURE: NavItem[] = [
  {
    title: "Экономика",
    slug: "ekonomika",
    children: [
      { title: "ROI оборудования", slug: "roi" },
      { title: "Себестоимость", slug: "cost" },
      { title: "Производительность", slug: "productivity" },
      { title: "Инвестиции", slug: "investments" },
      { title: "Аналитика", slug: "analytics" },
      { title: "Логистика", slug: "logistics" },
    ],
  },
  {
    title: "Автоматизация",
    slug: "automation",
    children: [
      { title: "AI в машиностроении", slug: "ai" },
      { title: "MES / ERP", slug: "mes" },
      { title: "Роботизация", slug: "robotics" },
      { title: "Контроль качества", slug: "qa" },
      { title: "Сенсоры и данные", slug: "sensors" },
      { title: "Интеграция", slug: "integration" },
    ],
  },
  {
    title: "Производство",
    slug: "manufacturing",
    children: [
      { title: "Планирование", slug: "planning" },
      { title: "Техническая поддержка", slug: "support" },
      { title: "ТО и ремонт", slug: "maintenance" },
      { title: "Качество", slug: "quality" },
      { title: "Безопасность", slug: "safety" },
      { title: "Эффективность", slug: "efficiency" },
    ],
  },
  {
    title: "Технологии",
    slug: "technology",
    children: [
      { title: "Материалы", slug: "materials" },
      { title: "CAD/CAM", slug: "cadcam" },
      { title: "3D-печать", slug: "3d-printing" },
      { title: "PLC и автоматика", slug: "plc" },
      { title: "IoT", slug: "iot" },
      { title: "Энергосбережение", slug: "energy" },
    ],
  },
  {
    title: "Проекты",
    slug: "projects",
    children: [
      { title: "Спецпроекты", slug: "volfram-2026" },
      { title: "Кейсы", slug: "cases" },
      { title: "Внедрения", slug: "implementations" },
      { title: "Партнёры", slug: "partners" },
      { title: "Дорожные карты", slug: "roadmaps" },
      { title: "Отчёты", slug: "reports" },
    ],
  },
];
