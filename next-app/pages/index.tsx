import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout
    title="hooper.link"
    shareable={{
      title: "hooper.link",
      description: "home page",
      image: "/thumbnail.png",
      url: "hooper.link",
    }}
  >
    <div className="text-black dark:text-darkCream">
      <div className="flex flex-col ">
        <h1 className="text-6xl font-bold">welcome</h1>

        <h2 className="text-2xl mt-10">
          my name is Ben Hooper, and i'm a software engineer
        </h2>

        <div className="mt-20" />

        <h2 className="text-1xl">
          <Link href="/about" className="text-blue">
            about me
          </Link>{" "}
          is for where you can read about my technical skills aka my flex
          catalogue
        </h2>

        <h2 className="text-1xl mt-5">
          <Link href="/ramblings" className="text-blue">
            ramblings
          </Link>{" "}
          is where you can read essays/content i write, most commonly about
          cryptography/blockchain but there should be some other stuff too
        </h2>

        <h2 className="text-1xl mt-5">
          <Link href="/contact" className="text-blue">
            contact
          </Link>{" "}
          is where you can contact me
        </h2>

        <h2 className="text-1xl mt-5">stay hungry, keep at it, et cetera</h2>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
