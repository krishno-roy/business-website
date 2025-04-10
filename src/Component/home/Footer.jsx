import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" pt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-xl font-bold">Get In Touch</h2>
            <p>the quick fox jumps over the lazy dog</p>
            <div className="flex justify-center md:justify-start gap-5">
              <FaFacebookSquare className="text-[#335BF5] text-2xl" />
              <FaInstagram className="text-[#E51F5A] text-2xl" />
              <FaTwitter className="text-[#21A6DF] text-2xl" />
              <FaYoutube className="text-[#E42F08] text-2xl" />
            </div>
          </div>

          {[1, 2, 3].map((section, i) => (
            <div key={i} className="space-y-3 text-left md:text-left">
              <h2 className="text-xl font-bold">Company Info</h2>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 pb-6">
          Made With Love By Figmaland. All Rights Reserved ©
        </p>
      </div>
    </div>
  );
};

export default Footer;
