import React from 'react';
// import Datepicker from "react-tailwindcss-datepicker";
import GeneralInfo from './GeneralInfo';
import ResumeDisplay from './ResumeDisplay';
import WorkInput from './WorkInput';
import EducationalInput from './EducationalInput';
import InputSkills from './SkillsInput';

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
          [e.target.name]: e.target.value,
          key: i,
        };
      } else {
        return item;
      }
    });
    setEduExp(newArray);
    // console.log(eduExp)
  }

  // const [skill, setSkill] = React.useState([
  //   {
  //     key: '',
  //     skill: ''
  //   }
  // ])

  // const updateSkills = e => {
  //   const { name, value } = e.target;
  //   setSkill(prev => {
  //     return [{
  //       // ...prev,
  //       [name]: value
  //     }]
  //       // // ...prev,
  //       // [name]: value
  //     }
  //   )
  //   console.log(skill)
  // }

  //testing a function to push new individual skills to array
  // const [skillsArray, setSkillsArray] = React.useState([]);

  // const addNewSkillToArray = () => {
  //   setSkillsArray(prev => {
  //     return [
  //       ...prev,
  //       {
  //         skill: skill.skill,
  //       }
  //     ]
  //   })
  // }

  // const updateSkills = index => e => {
  //   const skillsArray = skill.map((skill, i) => {
  //     if (index === 1) {
  //       return {
  //         ...skill,
  //         [e.target.name]: e.target.value,
  //         key: i,
  //         }
  //       } else {
  //         return skill;
  //       }
  //   });
  //   setSkill(skillsArray);
  //   console.log(skill)
  // }

  //On input, the skill value changes to reflec the user input
  //Then -> when clicking on add, it takes that input and adds it to the 'skills' state array
  //Then -> it clearns the input field
  //Then -> Resume display component will map over the 'skills' array, and output to the resume
  //Then -> I'll need to style that div and the individual skills to display as a type of pill display -- adding
  //an animation when each one is created would be good, quick fade in, something like that to display
  //them underneath the general info/about you section

  // console.table(`Education: ${eduExp}`)
  // console.log(`Work: ${workExp}`)
  // console.log(skill)

  return (
    <div className="body flex flex-col sm:flex-row justify-evenly my-8 md:px-1 lg:px-12 sm:h-screen">
      <div className="left-side w-full sm:w-1/2 md:w-1/3 overflow-y-auto px-4">
        <h2 className="font-bold text-white text-3xl mb-4">
          Personal Information
        </h2>
        <GeneralInfo 
          generalInfoData={generalInfo}
          click={handleChange}
          submit={handleSubmit}
          // skills={skill}
          // updateSkills={updateSkills}
         />
         {/* <h2 className="font-bold text-white text-3xl mb-4">
          Skills
        </h2> */}
        {/* <InputSkills
          skill={skill}
          updateSkills={updateSkills}
          setSkill={setSkill}
          //two following props are tests -- may need to be deleted
          // allSkills={skillsArray}
          // pushNewSkill={setSkillsArray}
        /> */}
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
      <div className="right-side px-4 mt-8 sm:mt-0 w-full overflow-y-auto sm:w-1/2 md:2/3 min-h-fit">
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