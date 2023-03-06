import React from 'react';
import reactIcon from '../assets/react.svg';
import '../styles/ResumeDisplay.css';

function ResumeDisplay(props) {

  return (
    <div className="display-info flex-column">
      <div className="resume-header bg-white/25 p-6 shadow-md text-white capitalize">
        <h2 className="font-bold text-5xl mb-4">
          {props.generalInfoData.firstName} {props.generalInfoData.lastName}
        </h2>
        <p className="font-normal text-3xl">{props.generalInfoData.title}</p>
      </div>
      <div className="resume-body flex bg-white/25 p-6 text-white">
        <div className="resume-detailed-text flex-column px-8 text-xl">
          <h3>About</h3>
          <p>{props.generalInfoData.description}</p>
          <h3>Experience</h3>
            <div className="prior-job-details">
              <div className="flex justify-between">
                <div className="text-details flex-column justify-start font-semibold">
                  <p className="prior-company-name">{props.workInfo.companyName}</p>
                  <p className="prior-comapny-title">{props.workInfo.title}</p>
                </div>
                <div>
                  <p className="prior-company-city">{props.workInfo.city}</p>
                </div>
              </div>
              <div className="flex">
                <p className="prior-company-fromDate">{props.workInfo.fromDate}</p>
                <p className="prior-company-toDate">{props.workInfo.toDate}</p>
              </div>
              <div>
                <p className="prior-company-description">{props.workInfo.jobDescription}</p>
              </div>
              <div>{props.displayJobs}</div>
            </div>
          <h3>Education</h3>
          <p>{props.generalInfoData.education}</p>
        </div>
        <div className="resume-sidebar flex-column px-8">
          <img src={reactIcon} alt="just a placeholder for now" />
          <h3>Personal Details</h3>
          <h4>Address</h4>
          <p className="capitalize">{props.generalInfoData.address}</p>
          <h4>Phone Number</h4>
          <p>{props.generalInfoData.phone}</p>
          <h4>Email</h4>
          <p>{props.generalInfoData.email}</p>
        </div>
      </div>
    </div>
  )
}

export default ResumeDisplay;