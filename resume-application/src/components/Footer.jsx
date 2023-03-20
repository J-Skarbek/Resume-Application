import React from "react";
import icon from '../assets/resume-cv-icon-white.svg';

function Footer() {

  return (
    <div className="header-bar bg-white/25 flex justify-center py-6 shadow-md">
      <img src={icon} alt="" className="logo h-20 pr-6" />
      <div className="header-text">
        <h1 className="site-name text-white">Build-A-Resume</h1>
        <p className="site-tagline text-white ">A free, interactive resume-building app.</p>
      </div>
    </div>
  );
}

export default Footer;