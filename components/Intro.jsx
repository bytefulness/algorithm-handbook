import { CMS_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="text-center max-w-5xl mx-auto mt-10 md:mt-36 mb-32">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-4">
        {CMS_NAME}
      </h1>
      <h4 className="text-xl md:text-2xl md:leading-9 font-light text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias possimus
        facilis eveniet consequatur nam nulla nostrum dolorem voluptatem.
        Delectus optio alias, quo sequi consectetur possimus. Consectetur
        impedit libero aliquid, voluptates fugiat nostrum sed recusandae totam
        ducimus! Autem et similique atque quod laborum dolore facilis recusandae
        suscipit quaerat cupiditate voluptas quia dignissimos reprehenderit
        natus sapiente eius est facere, placeat iusto amet corporis tempore
        harum aliquid.
      </h4>
    </section>
  );
}
