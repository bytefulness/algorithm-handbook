import Link from "next/link";

export default function AlgorithmCard({
  title,
  category,
  timeComplexity,
  slug,
}) {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="flex flex-col justify-between bg-white-smoke p-9 rounded-3xl group hover:cursor-pointer">
        <header>
          <h3 className="text-2xl font-bold mb-6 leading-snug">
            <a className="group-hover:underline">{title}</a>
          </h3>
        </header>

        <footer>
          <p className="sm:text-lg mb-2">
            <strong>Category: </strong>
            {category}
          </p>
          <p className="sm:text-lg">
            <strong>Time Complexity: </strong>
            {timeComplexity.normal}
            <sup>{timeComplexity.sup}</sup>
          </p>
        </footer>
      </article>
    </Link>
  );
}
