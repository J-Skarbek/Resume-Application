import React from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo(props) {

  return (
    <div className="personal-info">
      <form className="general-info" onSubmit={props.submit}>
        <label htmlFor="firstName">First Name</label>
        <input 
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First"
        onChange={props.click}
        value={props.generalInfoData.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input 
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last"
        onChange={props.click}
        value={props.generalInfoData.lastName}
        />
        <label htmlFor="title">Job Title</label>
        <input 
        type="text"
        name="title"
        id="title"
        placeholder="Senior Devleoper, Marketing Director, etc..."
        onChange={props.click}
        value={props.generalInfoData.title}
        />
        <label htmlFor="photo">Upload Your Headshot</label>
        <input 
        type="file"
        name="photo"
        id="photo"
        onChange={props.click}
        value={props.generalInfoData.photo}
        />
        <label htmlFor="address">Address</label>
        <input 
        type="text"
        name="address"
        id="address"
        placeholder="Ex. 1234 Main Street, Memphis, TN 39099"
        onChange={props.click}
        value={props.generalInfoData.address}
        />
        <label htmlFor="phone">Phone Number</label>
        <input 
        type="tel"
        name="phone"
        id="phone"
        placeholder="Ex. 615-555-5589"
        onChange={props.click}
        value={props.generalInfoData.phone}
        />
        <label htmlFor="email">Email Address</label>
        <input 
        type="email"
        name="email"
        id="email"
        placeholder="Ex. 'username@sample.com"
        onChange={props.click}
        value={props.generalInfoData.email}
        />
        <label htmlFor="description">About You</label>
        <input 
        type="textarea"
        name="description"
        id="description"
        placeholder="Enter Details About Yourself Here..."
        onChange={props.click}
        value={props.generalInfoData.description}
        />
      </form>
    </div>
  )
}

export default GeneralInfo