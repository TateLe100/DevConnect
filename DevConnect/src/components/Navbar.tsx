// import React from "react";
import { useState } from "react";
import { Link } from "react-router";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link className="font-mono text-xl font-bold text-white" to={"/"}>
            Dev<span className="text-purple-500">Connect</span>
          </Link>

          {/* DESKTOP LINKS */}

          <div className="hidden md:flex items-center space-x-8">
            <Link
              className="text-gray-300 hover:text-white transition-colors"
              to={"/"}
            >
              HOME
            </Link>
            <Link
              className="text-gray-300 hover:text-white transition-colors"
              to={"/create"}
            >
              Create Post
            </Link>
            <Link
              className="text-gray-300 hover:text-white transition-colors"
              to={"/communities"}
            >
              Communities
            </Link>
            <Link
              className="text-gray-300 hover:text-white transition-colors"
              to={"/community/create"}
            >
              Create Community
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-300 focus:outline-none"
              onClick={() => {
                setMenuOpen((prev) => !prev);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile LINKS */}
          {menuOpen && (
            <div className="md:hidden bg-[rgba(10,10,10,0.9)]">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  to={"/create"}
                >
                  Create Post
                </Link>
                <Link
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  to={"/communities"}
                >
                  Communities
                </Link>
                <Link
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  to={"/community/create"}
                >
                  Create Community
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
