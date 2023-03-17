import React from "react";

function Form(props) {

  return (
    <div className="work-exp">
      <form className="general-info">
        <label htmlFor="position">Position</label>
        <input 
        type="text"
        name="title"
        id="position"
        placeholder="position"
        onChange={props.updateInfo}
        value={props.details.title}
        />
        <label htmlFor="company">Company</label>
        <input 
        type="text"
        name="companyName"
        id="company"
        placeholder="company"
        onChange={props.updateInfo}
        value={props.details.companyName}
        />
        <label htmlFor="city">City</label>
        <input 
        type="text"
        name="city"
        id="city"
        placeholder="City"
        onChange={props.updateInfo}
        value={props.details.city}
        />
        <label htmlFor="fromDate">From:</label>
        <input 
        type="text"
        name="fromDate"
        id="fromDate"
        placeholder="Ex. 01/22/2016"
        onChange={props.updateInfo}
        value={props.details.fromDate}
        />
        <label htmlFor="toDate">To:</label>
        <input 
        type="text"
        name="toDate"
        id="toDate"
        placeholder="Ex. 07/31/2022"
        onChange={props.updateInfo}
        value={props.details.toDate}
        />        
        <label htmlFor="jobDescription">Job Details</label>
        <input 
        type="textarea"
        name="jobDescription"
        id="jobDescription"
        placeholder="Enter details about the position here..."
        onChange={props.updateInfo}
        value={props.details.jobDescription}
        />
        <button type="button" className="bg-white my-12" onClick={props.deleteJob}>Delete Job</button>
      </form>
    </div>
  )
}

export default Form;