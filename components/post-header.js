import Link from "next/link";
import PostTitle from "../components/post-title";

export default function PostHeader({
  title,
  category,
  algorithmUrl,
  timeComplexity,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-2xl mb-4">
          <strong>Category: </strong>
          {category}
        </p>

        {timeComplexity && (
          <p className="text-2xl mb-8">
            <strong>Time Complexity: </strong>
            <span>
              {timeComplexity.normal}
              <sup>{timeComplexity.sup}</sup>
            </span>
          </p>
        )}

        {algorithmUrl && (
          <Link href={algorithmUrl}>
            <a className="text-xl bg-slate-200 p-3 rounded-lg  cursor-pointer hover:bg-slate-300 transition-all">
              See The Algorithm
            </a>
          </Link>
        )}
      </div>
    </>
  );
}
