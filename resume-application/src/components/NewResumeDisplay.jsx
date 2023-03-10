import React from 'react';
import reactIcon from '../assets/react.svg';
import WorkExp from './WorkExp';
import '../styles/ResumeDisplay.css';

function NewResumeDisplay(props) {

// console.log(props.workExp)

const displayJobs = () => {
  const newArr = [...props.workExp];
  function reverseAll() { 
    newArr.reverse().map((pastJob, i) => {
      console.log(pastJob, pastJob.companyName)
      console.table(newArr)
      return <WorkExp 
        details={pastJob}
        key={i}
      />
    })
  } 
  return reverseAll();
}


  return (
    <div className="display-info flex-column">
      <div className="resume-header bg-white/25 p-6 shadow-md text-white capitalize">
        <h2 className="font-bold text-5xl mb-4">
          {props.generalInfoData.firstName} {props.generalInfoData.lastName}
        </h2>
        <p className="font-normal text-3xl">{props.generalInfoData.title}</p>
      </div>
      <div className="resume-body flex bg-white/25 p-6 text-white">
        <div className="resume-detailed-text flex-column px-8 text-xl w-[75%]">
          <h3>About</h3>
          <p>{props.generalInfoData.description}</p>
          <h3>Experience</h3>
          { displayJobs() }
          {/* <WorkExp 
            details={props.workExp}
          /> */}
            {/* <div className="prior-job-details">
              <div className="flex justify-between">
                <div className="text-details flex-column justify-start font-semibold">
                  <p className="prior-comapny-title">{props.workInfo[0].title}</p>
                  <p className="prior-company-name">{props.workInfo[0].companyName}</p>
                </div>
                <div>
                  <p className="prior-company-city">{props.workInfo.city}</p>
                </div>
              </div>
              <div className="flex">
                {props.workInfo.fromDate && <p className="prior-company-dates">
                  {props.workInfo.fromDate} - {props.workInfo.toDate}
                </p>}
              </div>
              <div>
                <p className="prior-company-description pr-12 break-words">{props.workInfo.jobDescription}</p>
              </div>
              <div>{props.displayJobs}</div>
            </div> */}
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

export default NewResumeDisplay;