import "katex/dist/katex.min.css";
import Head from "next/head";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Layout from "../../components/Layout";

const markdown = `

## Different Proving Models

This article is based on a talk I saw at ETH Prague (GET NAME) from extropy.

Before recently, I was only really familiar with the PLONK model of Zero Knowledge based systems.

`;

const IndividualRamble = () => {
  return (
    <Layout title={`Different Proving Systems | hooper.link`}>
      <Head>
        <title>Different Proving Systems</title>

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://hooper.link/ramblings/different-provers"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The 96er" />
        <meta
          property="og:description"
          content="We raced 96 mario cart races"
        />
        {/* <meta property="og:image" content="https://hooper.link/the-96er.png" /> */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="mysite.com" />
        <meta
          name="twitter:url"
          content="https://hooper.link/ramblings/different-provers"
        />
        <meta name="twitter:title" content="The 96er" />
        <meta
          name="twitter:description"
          content="We raced 96 mario cart races"
        />
        {/* <meta name="twitter:image" content="https://hooper.link/the-96er.png" /> */}
      </Head>

      <div className="flex flex-col w-full">
        <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
          {markdown}
        </Markdown>
      </div>
    </Layout>
  );
};

export default IndividualRamble;
