import React from 'react';
// import Datepicker from "react-tailwindcss-datepicker";
import GeneralInfo from './GeneralInfo';
import WorkInput from './WorkInput';
import PastWorkInputs from './pastWorkInputs';
import ResumeDisplay from './ResumeDisplay';

function NewBody() {

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

  //Everything above this line is gucci

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

  //newest test
  const [workExp, setWorkExp] = React.useState([{
    key: 0,
    companyName: 'State Farm',
    title: 'Sales Salve',
    city: '',
    fromDate: '',
    toDate: '',
    jobDescription: '',
  }])

  const addNew = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setWorkExp(prev => {
      return [...prev,
        {
          ...workExp,
          [name]: value,
        }
      ];
    })
    console.log(workExp)
  }

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
  const [allExp, setAllExp] = React.useState([]);

  //adds new prior-job experience to the array of allExp
  function addNewJobExp(e) {
    e.preventDefault();
    // setAllExp(prevValues => {
    //   return [
    //     ...prevValues,
    //     {
          
    //     }
    //   ]
    // })
    // setAllExp(prevExp => [...prevExp, workExpInfo]);
    setWorkExpInfo(prevVals => ({
      ...prevVals,
      // companyName: '',
      // title: '',
      // city: '',
      // fromDate: '',
      // toDate: '',
      // jobDescription: '',
    })
  )
  setAllExp(prevExp => [...prevExp, workExpInfo]);
}

  //updates the existing array on edit in the forms
  const updateOldJobs = e => {
    e.preventDefault();
    console.log(e);
    const { name, value } = e.target;
    const newArray = workExp.map((item, i) => {
      console.log(item)
      console.log(i)
      return {
        ...item,
        [name]: value,
        key: i,
      }
    })
    function updateArr() { 
      setAllExp(newArray)
    }
    updateArr();
    console.log(allExp)
  }

  const addNewInputs = () => {
    const copyState = [...workExp];
    const allInputs = copyState.reverse().map((inputFields, i) => {
      return <div className={`past-work-${i}`} key={i}>
        <PastWorkInputs
          // workInfo={workExpInfo}
          workInfo={inputFields}
          updateInfo={updateOldJobs}
          // updateInfo={updatePastValues}
          affixWorkInfo={addNew}
        />
      </div>
    })
    return allInputs;
  }

  const workInputFields = addNewInputs();

  const displayAllJobs = () => {
    const copyState = [...allExp];
    let count = 0;
    const all = copyState.reverse().map(job => {
      count += 1;
      return <div key={count} className="flex-column">
        <div className="flex justify-between">
          <div className="text-details flex-column justify-start font-semibold">
            <p>{job.title}</p>
            <p>{job.companyName}</p>
          </div>
          <div>
            <p>{job.city}</p>
          </div>
        </div>
        <div className="flex">
        <p className="prior-company-dates">{job.fromDate} - {job.toDate}</p>
        </div>
        <div>
          <p className="prior-company-description pr-12 break-all">{job.jobDescription}</p>
        </div>
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
          affixWorkInfo={addNew}
          // affixWorkInfo={addNewJobExp}
          newField={workInputFields}
          // dateValue={dayPicker}
          // dateValueChange={handleDayChange}
        />
        {/* <Datepicker
          value={dayPicker}
          onChange={handleDayChange}
        /> */}
      </div>
      <div className="right-side w-[60%]">
        <ResumeDisplay 
          generalInfoData={generalInfo}
          workInfo={workExp}
          // workInfo={workExpInfo}
          displayJobs={allWorkExp}
          // displayJobs={displayAllJobs}
          // click={handleChange}
        />
      </div>
    </div>
  )
}

export default NewBody