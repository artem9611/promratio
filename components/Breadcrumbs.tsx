import Link from "next/link";

export default function Breadcrumbs({
  parent,
  category,
  title,
}: {
  parent: string;
  category?: string;
  title?: string;
}) {
  return (
    <div className="text-sm text-gray-400 mb-8 flex gap-2 flex-wrap">
      <Link href="/" className="hover:text-black">
        Главная
      </Link>

      {parent && (
        <>
          <span>/</span>
          <Link
            href={`/category/${parent}`}
            className="hover:text-black capitalize"
          >
            {parent}
          </Link>
        </>
      )}

      {category && (
        <>
          <span>/</span>
          <Link
            href={`/category/${parent}/${category}`}
            className="hover:text-black capitalize"
          >
            {category}
          </Link>
        </>
      )}

      {title && (
        <>
          <span>/</span>
          <span className="text-black font-medium">
            {title}
          </span>
        </>
      )}
    </div>
  );
}
