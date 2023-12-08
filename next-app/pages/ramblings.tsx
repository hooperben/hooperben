import Layout from "../components/Layout";
import Markdown from "react-markdown";

const markdown = `
  ## Ramblings

  **will be updated shortly!**

  follow me on one of the ones on the corner (or in that side menu) to see when I post one?
`;

// TODO make this markdown generic
const Ramblings = () => (
  <Layout title="ramblings | hooper.link">
    <div className="prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
      <Markdown>{markdown}</Markdown>
    </div>
  </Layout>
);

export default Ramblings;
