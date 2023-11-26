// Footer.jsx
import React from "react";
import logo from "/Logo.png";
const Footer = () => {
  const gradient = "linear-gradient(135deg, #FFA07A, #FF6347)"; // Adjust gradient colors

  return (
    <footer className="py-5 bg-gradient-to-b from-orange-200 to-orange-100   text-orange-600">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src={logo} // Replace with the path to your logo
            alt="Logo"
            className="h-10" // Adjust the height according to your logo size
          />
        </div>

        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sonam Beauty Parlour. All rights
            reserved.
          </p>
        </div>

        <div>
          <a
            href="https://wa.me/7828970454
            "
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-400 transition duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
