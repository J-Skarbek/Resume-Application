import React from 'react';

function WorkInput(props) {

  return (
    <div className="work-exp">
      <form className="general-info">
      {/* <form className="general-info" onSubmit={props.submit}> */}
      {/*seem to be getting error about uncontrolled to controlled comps on the title input*/}
        <label htmlFor="position">Position</label>
        <input 
        type="text"
        name="title"
        id="position"
        placeholder="position"
        onChange={props.updateInfo}
        value={props.workInfo.title}
        />
        <label htmlFor="company">Company</label>
        <input 
        type="text"
        name="companyName"
        id="company"
        placeholder="company"
        onChange={props.updateInfo}
        value={props.workInfo.companyName}
        />
        <label htmlFor="city">City</label>
        <input 
        type="text"
        name="city"
        id="city"
        placeholder="City"
        onChange={props.updateInfo}
        value={props.workInfo.city}
        />
        <label htmlFor="fromDate">From:</label>
        <input 
        type="text"
        name="fromDate"
        id="fromDate"
        placeholder="Ex. 01/22/2016"
        onChange={props.updateInfo}
        // onChange={props.Change}
        value={props.workInfo.fromDate}
        // value={props.dateValue}
        />
         <label htmlFor="toDate">To:</label>
        <input 
        type="text"
        name="toDate"
        id="toDate"
        placeholder="Ex. 07/31/2022"
        onChange={props.updateInfo}
        // onChange={props.Change}
        value={props.workInfo.toDate}
        // value={props.dateValue}
        />        
        <label htmlFor="jobDescription">Job Details</label>
        <input 
        type="textarea"
        name="jobDescription"
        id="jobDescription"
        placeholder="Enter details about the position here..."
        onChange={props.updateInfo}
        value={props.workInfo.jobDescription}
        />
        <button type="button" onClick={props.affixWorkInfo}>Add</button>
        <div>{props.displayJobs}</div>
        <button type="button">Test/Delete</button>
      </form>
      <div>{props.newField}</div>
    </div>
  )
}

export default WorkInput;