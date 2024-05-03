import React from "react";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import Resume from "../../assets/Resume.pdf";
const Media = () => {
  return (
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        Fine my Resume
      </h2>
      <div className="flex gap-6">
        <span className="download">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            // download="Sainath_CV.pdf"
          >
            Download CV
          </a>
        </span>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://github.com/sainath161">
                <FaGithubAlt />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/laxmi-sainath-islavath-9213891b6/">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://wa.me/+91 9542667793">
                <FaWhatsapp />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="mailto:sainathislavath7@gmail.com">
                <FaRegEnvelope />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="Tel:9542667793">
                <FaPhone />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.instagram.com/sainath_islavath/">
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
