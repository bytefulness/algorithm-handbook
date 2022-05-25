import AlgorithmCard from "./AlgorithmCard";

export default function Algorithms({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
        {posts.map((post) => (
          <AlgorithmCard
            key={post.slug}
            title={post.title}
            category={post.category}
            timeComplexity={post.timeComplexity || {}}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
