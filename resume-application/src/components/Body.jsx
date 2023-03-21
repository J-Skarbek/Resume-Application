import React from 'react';
// import Datepicker from "react-tailwindcss-datepicker";
import GeneralInfo from './GeneralInfo';
import ResumeDisplay from './ResumeDisplay';
import WorkInput from './WorkInput';
import EducationalInput from './EducationalInput';

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
    // console.log(value, name)
    setGeneralInfo(prevValues => {
      return {
        ...prevValues,
        [name]: value,
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  }

  const [workExp, setWorkExp] = React.useState([
    {
      key: '',
      companyName: '',
      title: '',
      city: '',
      fromDate: '',
      toDate: '',
      jobDescription: '',
    },
  ])

  const updateWorkExp = index => e => {
    const newArray = workExp.map((item, i) => {
      if (index === i) {
        return { 
          ...item,
          [e.target.name] : e.target.value,
          key: i,
        };
      } else {
        return item;
      }
    });
    setWorkExp(newArray);
    // console.log(workExp)
  }

  const [eduExp, setEduExp] = React.useState([
    {
      key: '',
      universityName: '',
      city: '',
      degree: '',
      major: '',
      fromDate: '',
      toDate: '',
    },
  ])

  const updateEduExp = index => e => {
    const newArray = eduExp.map((item, i) => {
      if (index === i) {
        return { 
          ...item,
          [e.target.name] : e.target.value,
          key: i,
        };
      } else {
        return item;
      }
    });
    setEduExp(newArray);
    // console.log(eduExp)
  }

  // console.table(`Education: ${eduExp}`)
  // console.log(`Work: ${workExp}`)

  return (
    <div className="body flex flex-col sm:flex-row justify-evenly my-8 md:px-1 lg:px-12 sm:h-screen">
      <div className="left-side w-full sm:w-1/2 md:w-1/3 overflow-y-auto px-4 md:px-0">
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
          workInfo={workExp}
          updateInfo={updateWorkExp}
          setNewExp={setWorkExp}
        />
        {/* <Datepicker
          value={dayPicker}
          onChange={handleDayChange}
        /> */}
         <h2 className="font-bold text-white text-3xl mt-12 mb-4">
          Educational Experience
        </h2>
        <EducationalInput
          educationInfo={eduExp}
          updateInfo={updateEduExp}
          setNewEduExp={setEduExp}
        />
        {/* <Datepicker
          value={dayPicker}
          onChange={handleDayChange}
        /> */}
      </div>
      <div className="right-side px-4 md:px-0 mt-8 sm:mt-0 w-full overflow-y-auto sm:w-1/2 md:2/3 min-h-fit">
        <ResumeDisplay
          generalInfoData={generalInfo}
          workExp={workExp}
          educationInfo={eduExp}
        />
      </div>
    </div>
  )
}

export default Body;