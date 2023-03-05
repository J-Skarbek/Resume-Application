import React from 'react';
import GeneralInfo from './GeneralInfo';
import WorkInput from './WorkInput';
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

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(value, name)
    setGeneralInfo(prevValues => {
      return {
        ...prevValues,
        [name]: value,
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted')
  }

  const [workExpInfo, setWorkExpInfo] = React.useState([{
    companyName: '',
    title: '',
    fromDate: '',
    toDate: '',
    jobDescription: '',
  }])

  const updateWorkInfo = e => {
    const { name, value } = e.target;
    console.log(name, value)
  }

  // console.log(generalInfo)

  return (
    <div className="body flex justify-evenly my-8 ">
      <div className="left-side">
        <h2 className="font-bold text-white text-3xl mb-4">
          Personal Information
        </h2>
        <GeneralInfo 
          generalInfoData={generalInfo}
          click={handleChange}
          submit={handleSubmit}
         />
        <WorkInput
          workInfo={workExpInfo}
          updateInfo={updateWorkInfo}
        />
      </div>
      <div className="right-side">
        <ResumeDisplay 
          generalInfoData={generalInfo}
          // click={handleChange}
        />
      </div>
    </div>
  )
}

export default Body