import React from "react";

function EduExpForm(props) {

  return (
    <div className="edu-exp">
      <form className="general-info">
        <label htmlFor="position">University Name</label>
        <input 
        type="text"
        name="universityName"
        id="universityName"
        placeholder="University Name"
        onChange={props.updateInfo}
        value={props.details.universityName}
        />
        <label htmlFor="company">City</label>
        <input 
        type="text"
        name="city"
        id="city"
        placeholder="City"
        onChange={props.updateInfo}
        value={props.details.city}
        />
        <label htmlFor="city">Degree</label>
        <input
        type="text"
        name="degree"
        id="degree"
        placeholder="Degree"
        onChange={props.updateInfo}
        value={props.details.degree}
        />
        <label htmlFor="major">Major</label>
         <input 
        type="text"
        name="major"
        id="major"
        placeholder="Enter details about the position here..."
        onChange={props.updateInfo}
        value={props.details.major}
        />
        <label htmlFor="fromDate">Matriculation Date:</label>
        <input 
        type="text"
        name="fromDate"
        id="fromDate"
        placeholder="Ex. 01/22/2016"
        onChange={props.updateInfo}
        value={props.details.fromDate}
        />
        <label htmlFor="toDate">Graduation Date:</label>
        <input 
        type="text"
        name="toDate"
        id="toDate"
        placeholder="Ex. 07/31/2022"
        onChange={props.updateInfo}
        value={props.details.toDate}
        />        
        <button type="button" className="bg-white my-12" onClick={props.deleteJob}>Delete Job</button>
      </form>
    </div>
  )
}

export default EduExpForm;