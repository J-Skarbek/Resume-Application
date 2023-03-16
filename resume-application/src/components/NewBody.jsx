import React from 'react';
// import Datepicker from "react-tailwindcss-datepicker";
import GeneralInfo from './GeneralInfo';
import WorkInput from './WorkInput';
import PastWorkInputs from './pastWorkInputs';
import ResumeDisplay from './ResumeDisplay';
import NewResumeDisplay from './NewResumeDisplay';
import NewWorkInput from './NewWorkInput';

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

  const [workExp, setWorkExp] = React.useState([
    {
      key: 0,
      companyName: '',
      title: '',
      city: '',
      fromDate: '',
      toDate: '',
      jobDescription: '',
    },
    {
      key: 1,
      companyName: 'State Farm',
      title: 'Sales Salve',
      city: 'Nashville',
      fromDate: '5/18/18',
      toDate: '6/30/22',
      jobDescription: 'Testing',
    },
    {
      key: 2,
      companyName: 'Verizon',
      title: 'Sales Slave',
      city: 'Nashville',
      fromDate: '9/15/17',
      toDate: '2/22/18',
      jobDescription: 'More Testing',
    },
    {
      key: 3,
      companyName: 'Progressive',
      title: 'Claims Slave',
      city: 'Nashville',
      fromDate: '05/16/16',
      toDate: '07/31/17',
      jobDescription: 'Lorim Ipsum',
    },
    {
      key: 4,
      companyName: 'Chappys on Church',
      title: 'Server',
      city: 'Nashville',
      fromDate: '5/18/18',
      toDate: '6/30/22',
      jobDescription: 'Testing',
    },
  ])

  const updateWorkExp = index => e => {
    const newArray = workExp.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name] : e.target.value };
      } else {
        return item;
      }
    });
    setWorkExp(newArray);
    console.log(workExp)
  }

  const addNew = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setWorkExp(workExp.map(job => {
      return {
        ...job,
        [name] : value,
      }
    }))
    // console.log(workExp)
  }

  // const addNewTest = e => {
  //   e.preventDefault();

  // }

  const addNewInputs = () => {
    const copyState = [...workExp];
    const allInputs = copyState.reverse().map((inputFields, i) => {
      return <div className={`past-work-${i}`} key={i}>
        <PastWorkInputs
          // workInfo={workExpInfo}
          workInfo={inputFields}
          // updateInfo={updateOldJobs}
          updateInfo={updateWorkExp}
          affixWorkInfo={addNew}
        />
      </div>
    })
    return allInputs;
  }

  const workInputFields = addNewInputs();

  // console.log(workExp)

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
        <NewWorkInput
          // workInfo={workExpInfo}
          workInfo={workExp}
          updateInfo={updateWorkExp}
          // addNewWorkExp={addNewTest}
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
        {/* <ResumeDisplay 
          generalInfoData={generalInfo}
          workInfo={workExp}
          // workInfo={workExpInfo}
          // displayJobs={allWorkExp}
          // displayJobs={displayAllJobs}
          // click={handleChange}
        /> */}
        <NewResumeDisplay
          generalInfoData={generalInfo}
          workExp={workExp} 
        
        />
      </div>
    </div>
  )
}

export default NewBody