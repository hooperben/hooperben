// import Markdown from "react-markdown";
import Layout from "../../components/Layout";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export async function getServerSideProps(context) {
  const { id } = context.params;

  // Return the 'id' as a prop
  return {
    props: {
      id,
      // If you fetched data: data
    },
  };
}

// TODO make this markdown generic
const IndividualRamble = ({ id }) => {
  // const markdown = ``;

  return (
    <Layout title={`${id} | hooper.link`}>
      {/* todo: ooooo fun
      <div className="prose lg:prose-xl text-black dark:text-darkCream">
        <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
          {markdown}
        </Markdown>
      </div> */}
    </Layout>
  );
};

export default IndividualRamble;
