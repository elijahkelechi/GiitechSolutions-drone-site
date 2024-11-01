import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const LandingPageContact = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Elevate Your Project?
        </h2>
        <p className="text-lg mb-8">
          Connect with us to explore how our drone solutions can meet your
          needs. Get in touch for a consultation today.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-cyan-500 text-black rounded-md font-semibold hover:bg-cyan-600 transition duration-300 mb-6"
        >
          Contact Us
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} GIITech Drones. All rights reserved.
      </div>
    </footer>
  );
};

export default LandingPageContact;
