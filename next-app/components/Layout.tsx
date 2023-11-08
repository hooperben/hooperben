import React, { ReactNode } from "react";
import Head from "next/head";
import { colours } from "../consts/colours";

import Navigation from "./navigation";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="bg-darkCream dark:bg-black h-screen w-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <NavBar /> */}
    <Navigation />
    {children}
  </div>
);

export default Layout;
