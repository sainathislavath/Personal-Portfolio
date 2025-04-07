import React from "react";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Sainath Contact"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">
          Laxmi Sainath Islavath
        </h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide text-justify">
          Feel free to get in touch with me. I'm always open to discussing new
          projects, creative ideas, or exciting opportunities. Email me with any
          questions or inquiries — I'm happy to connect and schedule a meeting
          with you.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-white hover:text-designColor cursor-pointer duration-300">
            <a href="tel:+919542667793">+91 9542667793</a>
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-white hover:text-designColor cursor-pointer duration-300">
            <a href="mailto:sainathislavath7@gmail.com">
              sainathislavath7@gmail.com
            </a>
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/sainath161"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubAlt />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/laxmi-sainath-islavath-9213891b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://wa.me/919542667793"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="mailto:sainathislavath7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegEnvelope />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/sainath_islavath/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
