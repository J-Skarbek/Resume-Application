import React from 'react';
import GeneralInfo from './GeneralInfo';

function Body() {

  return (
    <div className="body flex justify-evenly">
      <div className="left-side">
        <h2>test</h2>
        <GeneralInfo />
      </div>
      <div className="right-side">
      <h2>test2</h2>
      </div>
    </div>
  )
}

export default Body