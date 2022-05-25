import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import supersub from "remark-supersub";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkGfm)
    .use(supersub)
    .use(html)
    .process(markdown);
  return result.toString();
}
