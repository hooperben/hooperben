import Head from "next/head";
import React, { ReactNode } from "react";

import { Github, LinkedIn, Twitter } from "../components/socials";
import Navigation from "./navigation";

type Shareable = {
  title: string;
  description: string;
  image: string;
  url: string;
};

type Props = {
  children?: ReactNode;
  title?: string;
  isContact?: boolean;
  shareable?: Shareable;
};

const Layout = ({
  children,
  title = "TODO add default title",
  shareable,
  isContact,
}: Props) => (
  <div className="bg-darkCream dark:bg-black h-100 w-100%">
    <Head>
      <link rel="shortcut icon" href="favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <title>{title}</title>

      <meta
        property="og:url"
        content={shareable ? shareable.url : "TODO fix url"}
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content={shareable ? shareable.title : "TODO fix title"}
      />
      <meta
        property="og:description"
        content={shareable ? shareable.description : "TODO fix description"}
      />
      <meta
        property="og:image"
        content={shareable ? shareable.image : "TODO fix image"}
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:domain"
        content={shareable ? shareable.url : "hooper.link"}
      />
      <meta
        name="twitter:url"
        content={shareable ? shareable.url : "TODO fix url"}
      />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={shareable ? shareable.description : "TODO fix description"}
      />
      <meta
        name="twitter:image"
        content={shareable ? shareable.image : "TODO fix image"}
      />
    </Head>

    <Navigation />

    <div className="flex p-5 pt-20 md:p-20 md:pt-20">{children}</div>

    <footer className="hidden md:block fixed bottom-5 right-5">
      <div className="flex justify-end bottom-0">
        {isContact && (
          <p className="text-black dark:text-darkCream">down here too! handy</p>
        )}

        <div className="flex flex-row">
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
    </footer>
  </div>
);

export default Layout;
