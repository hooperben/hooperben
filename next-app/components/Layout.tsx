import Head from "next/head";
import React, { ReactNode } from "react";

import { Github, LinkedIn, Twitter } from "../components/socials";
import Navigation from "./navigation";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "TODO add default title" }: Props) => (
  <div className="bg-darkCream dark:bg-black h-100 w-100%">
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />

    <div className="flex p-5 pt-20 md:p-20 md:pt-20">{children}</div>

    <footer className="fixed bottom-5 right-5">
      <div className="flex justify-end bottom-0">
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
