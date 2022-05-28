import { CMS_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="text-center max-w-5xl mx-auto mt-10 md:mt-36 mb-32">
      <h1 className="font-extrabold tracking-tighter text-transparent text-6xl md:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-4">
        {CMS_NAME}
      </h1>
      <p className="text-xl md:text-2xl md:leading-9 font-light text-gray-500 mb-4">
        Algorithm Handbook is an overview to the most popular algorithms. You
        can find in this page algorithms descriptions, basic visualizations and
        code examples.
      </p>

      <p className="text-xl md:text-2xl md:leading-9 font-light text-gray-500 mb-4">
        This project was developed as an Algorithm Design Principles Course term
        project. I would like to thank Vahide Bulut for giving me the
        opportunity to develop this project.
      </p>
    </section>
  );
}
