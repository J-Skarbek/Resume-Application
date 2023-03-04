import React from 'react';
import GeneralInfo from './GeneralInfo';
import ResumeDisplay from './ResumeDisplay';

function Body() {

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

  return (
    <div className="body flex justify-evenly my-8 ">
      <div className="left-side">
        <GeneralInfo 
        generalInfoData={generalInfo}
        clicks={handleChange}
        submit={handleSubmit}
         />
      </div>
      <div className="right-side">
        <ResumeDisplay />
      </div>
    </div>
  )
}

export default Body