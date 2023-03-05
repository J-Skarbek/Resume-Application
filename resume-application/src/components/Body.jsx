import React from 'react';
// import Datepicker from "react-tailwindcss-datepicker";
import GeneralInfo from './GeneralInfo';
import WorkInput from './WorkInput';
import ResumeDisplay from './ResumeDisplay';

function Body() {

  // const [dayPicker, setDayPicker] = React.useState({
  //   startDate: new Date(),
  //   endDate: new Date().setMonth(11)
  // });

  // const handleDayChange = (newValue) => {
  //   console.log("newValue:", newValue);
  //   setDayPicker(newValue);
  // }


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
    city: '',
    fromDate: '',
    toDate: '',
    jobDescription: '',
  }])


  const updateWorkInfo = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setWorkExpInfo(prevValues => {
      return [{
        ...prevValues,
        [name]: value
      }]
    })
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
         <h2 className="font-bold text-white text-3xl mt-12 mb-4">
          Work Experience
        </h2>
        <WorkInput
          workInfo={workExpInfo}
          updateInfo={updateWorkInfo}
          // dateValue={dayPicker}
          // dateValueChange={handleDayChange}
        />
        {/* <Datepicker
          value={dayPicker}
          onChange={handleDayChange}
        /> */}
      </div>
      <div className="right-side">
        <ResumeDisplay 
          generalInfoData={generalInfo}
          workInfo={workExpInfo}
          // click={handleChange}
        />
      </div>
    </div>
  )
}

export default Body