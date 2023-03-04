import React from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo(props) {

  return (
    <div>
      <form className="general-info" onSubmit={props.submit}>
        <input 
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First"
        onChange={props.click}
        value={props.generalInfoData.firstName}
        />
        <input 
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last"
        onChange={props.click}
        value={props.generalInfoData.lastName}
        />
        <input 
        type="text"
        name="title"
        id="title"
        placeholder="Senior Devleoper, Marketing Director, etc..."
        onChange={props.click}
        value={props.generalInfoData.title}
        />
        <input 
        type="file"
        name="photo"
        id="photo"
        onChange={props.click}
        value={props.generalInfoData.photo}
        />
        <input 
        type="text"
        name="address"
        id="address"
        placeholder="Ex. 1234 Main Street, Memphis, TN 39099"
        onChange={props.click}
        value={props.generalInfoData.address}
        />
        <input 
        type="tel"
        name="phone"
        id="phone"
        placeholder="Ex. 615-555-5589"
        onChange={props.click}
        value={props.generalInfoData.phone}
        />
        <input 
        type="email"
        name="email"
        id="email"
        placeholder="Ex. 'username@sample.com"
        onChange={props.click}
        value={props.generalInfoData.email}
        />
        <input 
        type="textarea"
        name="description"
        id="description"
        placeholder="Enter details about the position here..."
        onChange={props.click}
        value={props.generalInfoData.description}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default GeneralInfo