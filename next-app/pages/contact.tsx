import Layout from "../components/Layout";
import Markdown from "react-markdown";
import { Github, LinkedIn, Twitter } from "../components/socials";

const markdown = `
  ## Contact

  the usuals:

`;

// TODO make this markdown generic
const ContactPage = () => (
  <Layout title="contact | hooper.link" isContact>
    <div className="flex flex-col">
      <div className="prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
        <Markdown>{markdown}</Markdown>
      </div>
      <div className="flex flex-row mt-5">
        <a
          href="https://github.com/hooperben"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>

        <a
          href="https://twitter.com/0xbenhooper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>

        <a
          href="https://www.linkedin.com/in/ben-hooper21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
