import Link from "next/link";
import Layout from "../components/Layout";
import Markdown from "react-markdown";

const markdown = `
  ## Ramblings

  **will be updated shortly!**

  follow me on one of the ones on the corner (or in that side menu) to see when I post one?
`;

interface Rambling {
  title: string;
  date: string;
  description: string;
  image: string;
}

const ramblings = [
  {
    title: "Zero Knowledge Proofs 101",
    date: "2023-12-13", // TODO make real
    description: "A brief introduction to zero knowledge proofs",
    image: "proofs-introduction.png",
    path: "/ramblings/zk-proofs-introduction",
  },
];

const Card = ({ image, title, description, date, path }) => {
  return (
    <Link href={path} className="no-underline">
      <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            height: "300px",
            width: "100%",
          }}
        />
        <div className="px-6">
          <h2 className="text-2xl mt-4">{title}</h2>
          <h4>{description}</h4>
        </div>
      </div>
    </Link>
  );
};

// TODO make this markdown generic
const Ramblings = () => (
  <Layout title="ramblings | hooper.link">
    <div className="prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
      <Markdown>{markdown}</Markdown>

      {/* <Card {...ramblings[0]} /> */}
    </div>
  </Layout>
);

export default Ramblings;
