import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

import "katex/dist/katex.min.css";

const MarkdownWithMaths = ({ children }: { children: string }) => (
  <Markdown
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex, rehypeRaw]}
    className="pt-1" // fixes mobile rendering issue
  >
    {children}
  </Markdown>
);

export default MarkdownWithMaths;
