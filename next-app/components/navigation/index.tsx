import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Github, LinkedIn, Twitter } from "../../components/socials";
import useDarkModeStore from "../../stores/dark-mode-store";

import { Sun } from "../design/sun";
import { Moon } from "../design/moon";

const NavItem = ({ path, title }: { path: string; title: string }) => (
  <Link
    href={path}
    className="px-2 mt-1 align-center text-black dark:text-darkCream font-semibold hover:text-lightBlack dark:hover:text-lightCream"
  >
    {title}
  </Link>
);

const Menu = ({ isFlexCol = false }: { isFlexCol?: boolean }) => (
  <div className={isFlexCol ? "flex flex-col" : ""}>
    <div className={`${isFlexCol ? "flex flex-col" : "flex"} align-center`}>
      <NavItem path="/" title="home" />
      <NavItem path="/about" title="about" />
      <NavItem path="/ramblings" title="ramblings" />
      <NavItem path="/contact" title="contact" />
    </div>

    <div className="flex flex-row fixed bottom-5 right-5">
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
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const darkMode = useDarkModeStore((state) => state.isDarkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  // toggle the dark mode in state and on the document
  const onDarkModeIconClick = () => {
    document.documentElement.classList.toggle("dark");
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !darkMode
    ) {
      toggleDarkMode();
    }
  };

  // use effect to check if the user has dark mode on
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches && darkMode) {
      toggleDarkMode();
    }
  }, []);

  return (
    <div>
      <nav className="bg-darkCream dark:bg-black shadow-darkShadow dark:shadow-lightShadow fixed w-full z-10 top-0 h-10">
        <div className="max-w mx-auto px-4 mt-2">
          <div className="flex justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <Menu />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="block md:hidden">
              <div className="md:hidden flex items-center">
                <button
                  className="outline-none mobile-menu-button"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <svg
                    className="w-6 h-6 text-black hover:text-black dark:text-darkCream dark:hover:text-darkCream"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>

            <button
              className="outline-none mobile-menu-button"
              onClick={onDarkModeIconClick}
            >
              {!darkMode ? <Moon /> : <Sun />}
            </button>
          </div>
        </div>

        {/* Actual mobile menu */}
        <div
          className={`md:hidden ${
            showMenu ? "block" : "hidden"
          } bg-lightCream dark:bg-lightBlack fixed w-full z-10 top-10 h-screen`}
        >
          <Menu isFlexCol />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
