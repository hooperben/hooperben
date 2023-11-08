import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

import { Github, LinkedIn, Twitter } from "../components/socials";
import Navigation from "./navigation";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "TODO add default title" }: Props) => (
  <div className="bg-darkCream dark:bg-black h-screen w-screen">
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    <div className="flex p-20">{children}</div>

    <footer className="fixed bottom-5 right-5">
      <div className="flex justify-end bottom-0">
        <div className="flex flex-row">
          <Link href="https://github.com/hooperben">
            <Github />
          </Link>

          <Link href="https://twitter.com/0xbenhooper">
            <Twitter />
          </Link>

          <Link href="https://www.linkedin.com/in/ben-hooper21">
            <LinkedIn />
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
