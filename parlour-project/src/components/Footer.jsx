// Footer.jsx
import React from "react";
import logo from "/Logo.png";

const Footer = () => {
  const gradient = "linear-gradient(135deg, #FFA07A, #FF6347)";

  return (
    <footer className="py-5 max-h-[200px]: bg-gradient-to-b from-orange-200 to-orange-100 text-orange-600">
      <div className="container flex flex-col items-center md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sonam Beauty Parlour. All rights
            reserved.
          </p>
        </div>

        <div>
          <a
            href="https://wa.me/7828970454"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;