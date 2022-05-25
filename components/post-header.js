import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, category, timeComplexity }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-2xl mb-4">
          <strong>Category: </strong>
          {category}
        </p>

        {timeComplexity && (
          <p className="text-2xl">
            <strong>Time Complexity: </strong>
            <span>
              {timeComplexity.normal}
              <sup>{timeComplexity.sup}</sup>
            </span>
          </p>
        )}
      </div>
    </>
  );
}
