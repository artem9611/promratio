export default function VolframLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-[#f2f3f5] text-[#1c1c1e] scroll-smooth">
        {children}
      </body>
    </html>
  );
}
