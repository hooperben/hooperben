import React, { useEffect, useState } from "react";
import Link from "next/link";

// TODO: move to own file
const Sun = () => (
  <div className="text-black dark:text-darkCream">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  </div>
);

// TODO: move to own file
const Moon = () => (
  <div className="text-black dark:text-darkCream">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  </div>
);

const NavItem = ({ path, title }: { path: string; title: string }) => (
  <Link
    href={path}
    className="py-4 px-2 text-black dark:text-darkCream font-semibold hover:text-lightBlack dark:hover:text-lightCream"
  >
    {title}
  </Link>
);

const Menu = ({ isFlexCol = false }: { isFlexCol?: boolean }) => (
  <div className={isFlexCol ? "flex flex-col" : ""}>
    <NavItem path="/" title="home"></NavItem>
    <NavItem path="/about" title="about" />
    <NavItem path="/ramblings" title="ramblings" />
    <NavItem path="/contact" title="contact" />
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [dark, setDark] = useState(false); // TODO make zustand

  // toggle the dark mode in state and on the document
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  // use effect to check if the user has dark mode on
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setDark(true)
      : setDark(false);
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
              onClick={toggleDarkMode}
            >
              {!dark ? <Moon /> : <Sun />}
            </button>
          </div>
        </div>

        {/* Actual mobile menu */}
        <div
          className={`md:hidden ${
            showMenu ? "block" : "hidden"
          } bg-lightCream dark:bg-lightBlack fixed w-full z-10 top-10`}
        >
          <Menu isFlexCol />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
