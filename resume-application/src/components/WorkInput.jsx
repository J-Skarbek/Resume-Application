import React from 'react';

function WorkInput() {

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
        // onChange={props.click}
        // value={props.generalInfoData.firstName}
        />
        <label htmlFor="company">Company</label>
        <input 
        type="text"
        name="company"
        id="company"
        placeholder="company"
        // onChange={props.click}
        // value={props.generalInfoData.lastName}
        />
        <label htmlFor="city">City</label>
        <input 
        type="text"
        name="city"
        id="city"
        placeholder="City"
        // onChange={props.click}
        // value={props.generalInfoData.title}
        />
        <label htmlFor="fromDate">From:</label>
        <input 
        type="date"
        name="fromDate"
        id="fromDate"
        placeholder="Ex. 01/22/2016"
        // onChange={props.click}
        // value={props.generalInfoData.address}
        />
         <label htmlFor="toDate">From:</label>
        <input 
        type="date"
        name="toDate"
        id="toDate"
        placeholder="Ex. 07/31/2022"
        // onChange={props.click}
        // value={props.generalInfoData.address}
        />        
        <label htmlFor="jobDetails">Job Details</label>
        <input 
        type="textarea"
        name="djobDetails"
        id="jobDetails"
        placeholder="Enter details about the position here..."
        // onChange={props.click}
        // value={props.generalInfoData.description}
        />
        <button type="submit">Add</button>
        <button type="button">Delete</button>
      </form>
    </div>
  )
}

export default WorkInput;