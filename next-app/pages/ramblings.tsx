import Link from "next/link";
import Layout from "../components/Layout";
import Markdown from "react-markdown";
import { title } from "process";

interface Rambling {
  title: string;
  date: string;
  description: string;
  image: string;
}

const ramblings = [
  {
    title: "TLS Notary",
    date: "28-09-2024",
    description:
      "aka zkTLS, web proofs, DECO - whatever your local crytographer is calling it",
    image: "tls-notary/mono.png",
    path: "/ramblings/tls-notary",
  },
  {
    title: "The 2nd 96er",
    date: "12-8-2024",
    description: "We did a 96er again, but with a few more stats this time",
    image: "/2nd-96er/thumbnail.png",
    path: "/ramblings/the-96er-2",
  },
  {
    title: "The 96er",
    date: "16-12-2023",
    description:
      "we raced all 96 races in Mario Kart 8 - what happened next might shock you",
    image: "the-96er.png",
    path: "/ramblings/the-96er",
  },
];

const Card = ({ image, title, description, date, path }) => {
  return (
    <Link href={path} className="no-underline min-w-full max-w-full">
      <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <div
          className="w-full h-[250px] bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="px-6">
          <h2 className="text-2xl my-2">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const Ramblings = () => (
  <Layout title="ramblings | hooper.link">
    <div className="flex flex-col">
      <div className="ml-4 mb-2 prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
        <Markdown>{`# Ramblings`}</Markdown>
      </div>

      <div className="flex flex-wrap">
        {ramblings.map((rambling, index) => (
          <div key={index} className="max-w-full px-4 mb-4">
            <div className="prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
              <Card {...rambling} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Ramblings;
