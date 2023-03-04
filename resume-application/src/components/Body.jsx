import React from 'react';
import GeneralInfo from './GeneralInfo';
import ResumeDisplay from './ResumeDisplay';

function Body() {

  return (
    <div className="body flex justify-evenly my-8">
      <div className="left-side">
        <GeneralInfo />
      </div>
      <div className="right-side">
        <ResumeDisplay />
      </div>
    </div>
  )
}

export default Body