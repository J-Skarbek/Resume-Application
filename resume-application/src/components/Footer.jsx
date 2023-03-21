import React from "react";
import icon from '../assets/resume-cv-icon-white.svg';

function Footer() {

  return (
    <div className="footer bg-white/25 flex flex-col sm:flex-row items-center justify-between py-6 px-12 shadow-md">
      <div className="footer-left flex flex-col sm:flex-row content-center">
        <img src={icon} alt="" className="logo h-16 mb-4 sm:mr-6" />
        <div className="text flex-col text-white text-center sm:text-left">
          <h2 className="site-name text-3xl font-bold">Build-A-Resume</h2>
          <p className="site-tagline">A free, interactive resume-building app.</p>
        </div>
      </div>
      <div className="footer-right text-white flex-col text-center sm:text-left">
        <h2 className="text-xl font-semibold">Created By: John Skarbek</h2>
        <p>March, 2023</p>
        <a href="#">View on Github Pages</a>
      </div>
    </div>
  );
}

export default Footer;