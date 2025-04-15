import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-4 flex justify-between px-8 items-center">
        {/* Logo & Desktop Menu */}
        <div className="flex gap-14 items-center">
          <a
            href="/"
            className={`text-2xl font-bold ${
              scrolled ? "text-gray-900" : "text-black"
            }`}
          >
            Divestic
          </a>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex gap-6 text-sm">
              <li>
                <a
                  href="/"
                  className={`${scrolled ? "text-gray-900" : "text-black"}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`${scrolled ? "text-gray-900" : "text-black"}`}
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`${scrolled ? "text-gray-900" : "text-black"}`}
                >
                  Price
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`${scrolled ? "text-gray-900" : "text-black"}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex gap-4 items-center">
          <CiSearch
            className={`text-2xl md:hidden ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          />
          <MdOutlineShoppingCart
            className={`text-2xl md:hidden ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          />
          {/* Toggle Icon */}
          {isOpen ? (
            <IoClose
              onClick={toggleMenu}
              className={`text-3xl cursor-pointer md:hidden ${
                scrolled ? "text-gray-900" : "text-black"
              }`}
            />
          ) : (
            <BiMenuAltRight
              onClick={toggleMenu}
              className={`text-3xl cursor-pointer ${
                scrolled ? "text-gray-900" : "text-black"
              }`}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-8 py-4 shadow-md">
          <ul className="flex flex-col gap-4 text-lg font-semibold text-center">
            <li>
              <a href="/" className="text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-900">
                Product
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-900">
                Price
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
