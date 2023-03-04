import React from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo() {

  const [generalInfo, setGeneralInfo] = React.useState({
    firstName: '',
    lastName: '',
    title: '',
    photo: '',
    address: '',
    phone: '',
    email: '',
    description: '',
  })

  function handleChange(e) {
    setGeneralInfo(prevValues => {
      return {
        ...prevValues,

      }
    })
  }

  function handleSubmit() {
    console.log('submitted')
  }

  // console.log(generalInfo)

  return (
    <div>
      <form className="general-info" onSubmit={handleSubmit}>
        <input 
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First"
        onChange={handleChange}
        />
        <input 
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last"
        onChange={handleChange}
        />
        <input 
        type="text"
        name="title"
        id="title"
        placeholder="Senior Devleoper, Marketing Director, etc..."
        onChange={handleChange}
        />
        <input 
        type="file"
        name="photo"
        id="photo"
        onChange={handleChange}
        />
        <input 
        type="text"
        name="address"
        id="address"
        placeholder="Ex. 1234 Main Street, Memphis, TN 39099"
        onChange={handleChange}
        />
        <input 
        type="tel"
        name="phone"
        id="phone"
        placeholder="Ex. 615-555-5589"
        onChange={handleChange}
        />
        <input 
        type="email"
        name="email"
        id="email"
        placeholder="Ex. 'username@sample.com"
        onChange={handleChange}
        />
        <input 
        type="textarea"
        name="textarea"
        id="description"
        placeholder="Enter details about the position here..."
        onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default GeneralInfo