import AlgorithmCard from "./AlgorithmCard";

export default function Algorithms({ posts }) {
  const algorithmCategories = Array.from(
    new Set(posts.map((algorithm) => algorithm.category))
  );

  const getAlgorithms = (categoryName) => {
    return posts
      .filter((algorithm) => algorithm.category === categoryName)
      .map((algorithm) => (
        <AlgorithmCard
          key={algorithm.title.split(" ").join("")}
          slug={algorithm.slug}
          title={algorithm.title}
          category={algorithm.category}
          timeComplexity={algorithm.timeComplexity || {}}
        />
      ));
  };

  const renderSection = (categoryName, index) => {
    return (
      <section key={`${categoryName}-${index}`}>
        <>
          <header>
            <h2 className="text-3xl font-bold mb-12">{categoryName}</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {getAlgorithms(categoryName)}
          </div>
        </>
      </section>
    );
  };

  return (
    <>
      {algorithmCategories.map((categoryName, index) =>
        renderSection(categoryName, index)
      )}
    </>
  );
}
