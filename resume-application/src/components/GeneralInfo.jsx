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
    const { name, value } = e.target;
    console.log(value, name)
    setGeneralInfo(prevValues => {
      return {
        ...prevValues,
        [name]: value,
      }
    })
  }

  function handleSubmit() {
    console.log('submitted')
  }

  console.log(generalInfo)

  return (
    <div>
      <form className="general-info" onSubmit={handleSubmit}>
        <input 
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First"
        onChange={handleChange}
        value={generalInfo.firstName}
        />
        <input 
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last"
        onChange={handleChange}
        value={generalInfo.lastName}
        />
        <input 
        type="text"
        name="title"
        id="title"
        placeholder="Senior Devleoper, Marketing Director, etc..."
        onChange={handleChange}
        value={generalInfo.title}
        />
        <input 
        type="file"
        name="photo"
        id="photo"
        onChange={handleChange}
        value={generalInfo.handleChange}
        />
        <input 
        type="text"
        name="address"
        id="address"
        placeholder="Ex. 1234 Main Street, Memphis, TN 39099"
        onChange={handleChange}
        value={generalInfo.address}
        />
        <input 
        type="tel"
        name="phone"
        id="phone"
        placeholder="Ex. 615-555-5589"
        onChange={handleChange}
        value={generalInfo.phone}
        />
        <input 
        type="email"
        name="email"
        id="email"
        placeholder="Ex. 'username@sample.com"
        onChange={handleChange}
        value={generalInfo.email}
        />
        <input 
        type="textarea"
        name="description"
        id="description"
        placeholder="Enter details about the position here..."
        onChange={handleChange}
        value={generalInfo.description}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default GeneralInfo