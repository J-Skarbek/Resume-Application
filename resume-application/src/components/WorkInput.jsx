import React from 'react';

function WorkInput(props) {

  return (
    <div className="work-exp">
      <form className="general-info">
      {/* <form className="general-info" onSubmit={props.submit}> */}
        <label htmlFor="position">Position</label>
        <input 
        type="text"
        name="position"
        id="position"
        placeholder="position"
        onChange={props.updateInfo}
        value={props.workInfo.title}
        />
        <label htmlFor="company">Company</label>
        <input 
        type="text"
        name="company"
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
        type="date"
        name="fromDate"
        id="fromDate"
        placeholder="Ex. 01/22/2016"
        onChange={props.updateInfo}
        value={props.workInfo.fromDate}
        />
         <label htmlFor="toDate">From:</label>
        <input 
        type="date"
        name="toDate"
        id="toDate"
        placeholder="Ex. 07/31/2022"
        onChange={props.updateInfo}
        value={props.workInfo.toDate}
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
        <button type="submit">Add</button>
        <button type="button">Delete</button>
      </form>
    </div>
  )
}

export default WorkInput;