import React from 'react';

function WorkExp(props) {
  // console.log(props.details)

  return (
    <div key={props.key} className="flex-column">
        <div className="flex justify-between">
          <div className="text-details flex-column justify-start font-semibold">
            <p>{props.details.title}</p>
            <p>{props.details.companyName}</p>
          </div>
          <div>
            <p>{props.details.city}</p>
          </div>
        </div>
        <div className="flex">
        <p className="prior-company-dates">{props.details.fromDate} - {props.details.toDate}</p>
        </div>
        <div>
          <p className="prior-company-description pr-12 break-all">{props.details.jobDescription}</p>
        </div>
    </div>
  )
}

export default WorkExp;