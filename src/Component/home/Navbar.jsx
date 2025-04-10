import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50`}>
      <div className="container mx-auto py-4 flex justify-between px-8 items-center">
        {/* Logo & Desktop Menu */}
        <div className="flex gap-14 items-center">
          <a href="/" className="text-2xl font-bold">
            Divestic
          </a>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/">Price</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex gap-4 items-center">
          <CiSearch className="text-2xl md:hidden" />
          <MdOutlineShoppingCart className="text-2xl md:hidden" />
          {/* Toggle Icon */}
          {isOpen ? (
            <IoClose
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <BiMenuAltRight
              onClick={toggleMenu}
              className="text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-8 py-4 shadow-md">
          <ul className="flex flex-col gap-4 text-lg font-semibold text-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Price</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
