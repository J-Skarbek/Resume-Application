import React from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo(props) {

  // const [generalInfo, setGeneralInfo] = React.useState({
  //   firstName: '',
  //   lastName: '',
  //   title: '',
  //   photo: '',
  //   address: '',
  //   phone: '',
  //   email: '',
  //   description: '',
  // })

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   console.log(value, name)
  //   setGeneralInfo(prevValues => {
  //     return {
  //       ...prevValues,
  //       [name]: value,
  //     }
  //   })
  // }

  // function handleSubmit() {
  //   console.log('submitted')
  // }

  // console.log(generalInfo)

  return (
    <div>
      <form className="general-info" onSubmit={props.submit}>
        <input 
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First"
        onChange={props.click}
        value={props.firstName}
        />
        <input 
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last"
        onChange={props.click}
        value={props.lastName}
        />
        <input 
        type="text"
        name="title"
        id="title"
        placeholder="Senior Devleoper, Marketing Director, etc..."
        onChange={props.click}
        value={props.title}
        />
        <input 
        type="file"
        name="photo"
        id="photo"
        onChange={props.click}
        value={props.click}
        />
        <input 
        type="text"
        name="address"
        id="address"
        placeholder="Ex. 1234 Main Street, Memphis, TN 39099"
        onChange={props.click}
        value={props.address}
        />
        <input 
        type="tel"
        name="phone"
        id="phone"
        placeholder="Ex. 615-555-5589"
        onChange={props.click}
        value={props.phone}
        />
        <input 
        type="email"
        name="email"
        id="email"
        placeholder="Ex. 'username@sample.com"
        onChange={props.click}
        value={props.email}
        />
        <input 
        type="textarea"
        name="description"
        id="description"
        placeholder="Enter details about the position here..."
        onChange={props.click}
        value={props.description}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default GeneralInfo