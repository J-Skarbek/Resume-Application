import React from 'react';
import '../styles/Header.css';
import icon from '../assets/resume-cv-icon-white.svg';

function Header() {

  return (
    <div className="header-bar bg-white/25 flex flex-col sm:flex-row justify-center py-6 shadow-md">
      <img src={icon} alt="" className="logo h-20 pr-6" />
      <div className="header-text text-white text-center sm:text-left">
        <h1 className="site-name text-3xl sm:text-5xl">Build-A-Resume</h1>
        <p className="site-tagline">A free, interactive resume-building app.</p>
      </div>
    </div>
  )
}

export default Header