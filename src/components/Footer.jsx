import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <p><span>&copy; 2023</span> <a href="">April Copley</a></p>
        <div className="social-links">
          <a href=""><FaTwitter /></a>
          <a hreft=""><FaLinkedin /></a>
          <a href=""><FaGithub /></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;