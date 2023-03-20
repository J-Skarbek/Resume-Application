import React from 'react';

function EducationalExp(props) {
  // console.log(props.details)
  
  return (
    <div className="flex-column">
        <div className="flex justify-between">
          <div className="text-details flex-column justify-start font-semibold">
            <p>{props.details.universityName}</p>
            <p>{props.details.city}</p>
            <p className="prior-company-description pr-12 break-all">{props.details.major}</p>
          </div>
          <div>
            <p>{props.details.degree}</p>
          </div>
        </div>
        <div className="flex">
        {props.details.fromDate && <p className="prior-company-dates">{props.details.fromDate} - {props.details.toDate}</p>}
        </div>
        <div>
          {/* <p className="prior-company-description pr-12 break-all">{props.details.jobDescription}</p> */}
        </div>
    </div>
  )
}

export default EducationalExp;