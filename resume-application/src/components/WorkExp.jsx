import React from 'react';

function WorkExp(props) {

  return (
    <div key={count} className="flex-column">
        <div className="flex justify-between">
          <div className="text-details flex-column justify-start font-semibold">
            <p>{job.title}</p>
            <p>{job.companyName}</p>
          </div>
          <div>
            <p>{job.city}</p>
          </div>
        </div>
        <div className="flex">
        <p className="prior-company-dates">{job.fromDate} - {job.toDate}</p>
        </div>
        <div>
          <p className="prior-company-description pr-12 break-all">{job.jobDescription}</p>
        </div>
    </div>
  )
}

export default WorkExp;