import React from 'react';
import reactIcon from '../assets/react.svg';
import '../styles/ResumeDisplay.css';

function ResumeDisplay() {

  return (
    <div className="display-info flex-column">
      <div className="resume-header bg-white/25 p-6 shadow-md text-white">
        <h2 className="font-bold text-5xl mb-4">User Input Name</h2>
        <p className="font-normal text-3xl">User Input Title</p>
      </div>
      <div className="resume-body flex bg-white/25 p-6 text-white">
        <div className="resume-detailed-text flex-column px-8 text-xl">
          <h3>Description</h3>
          <p>Feed user description input into here.</p>
          <h3>Experience</h3>
          <p>Feed user experience input into here.</p>
          <h3>Education</h3>
          <p>Feed user education input into here.</p>
        </div>
        <div className="resume-sidebar flex-column px-8">
          <img src={reactIcon} alt="just a placeholder for now" />
          <h3>Personal Details</h3>
          <h4>Address</h4>
          <p>Enter Address Info Here.</p>
          <h4>Phone Number</h4>
          <p>Enter Phone Numbe Info Here.</p>
          <h4>Email</h4>
          <p>Enter Email address Info Here.</p>
        </div>
      </div>
    </div>
  )
}

export default ResumeDisplay;