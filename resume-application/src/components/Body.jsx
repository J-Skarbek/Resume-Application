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

  //stores data for each individual past work experience on input
  const [workExpInfo, setWorkExpInfo] = React.useState({
    key: 0,
    companyName: '',
    title: '',
    city: '',
    fromDate: '',
    toDate: '',
    jobDescription: '',
  })

  //handles updating an individual job experience details
  const updateWorkInfo = e => {
    const { name, value } = e.target;
    // console.log(name, value);
    setWorkExpInfo(prevValues => {
      return {
        ...prevValues, 
        [name]: value,
      }
    })
  }

  //Array to hold all the different job exp items in
  const [allExp, updateAllExp] = React.useState([])

  //adds new prior-job experience to the array of allExp
  function addNewJobExp(e) {
    e.preventDefault();
    updateAllExp(prevExp => [...prevExp, workExpInfo]);
    setWorkExpInfo(prevVals => ({
      ...prevVals,
      companyName: '',
      title: '',
      city: '',
      fromDate: '',
      toDate: '',
      jobDescription: '',
    })
    // console.log(allExp);
  )}

  //display job deails from the allExp array
  // const displayAllJobs = allExp.map(job => {
  //   return <div key="job.companyName">
  //     <p>{job.title}</p>
  //     <p>{job.companyName}</p>
  //     <p>{job.city}</p>
  //   </div>
  // })

  // const displayAll = allExp.map(job => {
  //   return <div key="job.companyName">
  //     <p>{job.title}</p>
  //     <p>{job.companyName}</p>
  //     <p>{job.city}</p>
  //   </div>
  // })

  const displayAllJobs = () => {
    const copyState = [...allExp];
    const all = copyState.reverse().map(job => {
      return <div key={job.key += 1}>
      <p>{job.title}</p>
      <p>{job.companyName}</p>
      <p>{job.city}</p>
    </div>
    })
    return all;
  }

  const allWorkExp = displayAllJobs();

  // console.log(generalInfo)
  // console.log(workExpInfo)
  // console.log(allExp)

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
          affixWorkInfo={addNewJobExp}
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
          displayJobs={allWorkExp}
          // displayJobs={displayAllJobs}
          // click={handleChange}
        />
      </div>
    </div>
  )
}

export default Body