import React from 'react';
import EduExpForm from './EduExpForm';

function EducationalInput(props) {
 
  // const updateWorkExp = index => e => {
  //   const newArray = props.workInfo.map((item, i) => {
  //     if (index === i) {
  //       return { 
  //         ...item,
  //         [e.target.name] : e.target.value,
  //         key: i,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   props.setNewExp(newArray);
  //   console.log(props.workInfo)
  // }

  
  const addNewJob = e => {
    e.preventDefault();
    props.setNewExp([
      ...props.workInfo,
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
  }

  const deleteEducation = index => e => {
    e.preventDefault();
    const test = props.educationInfo.filter(school => school.key !== index);
    props.setNewEduExp(test);
    // console.log(props.workInfo)
  }
  
  const displayFormsEdu = () => {
    const formFields = props.educationInfo.map((pastEduExp, i) => {
      return <div className={`index-${i}`} key={i}>
          <EduExpForm
          details={pastEduExp}
          index={i}
          updateInfo={props.updateInfo(i)}
          addNewJob={addNewJob}
          deleteJob={deleteEducation(i)}
          />
      </div>
      })
    console.log(props.educationInfo);
    return formFields;
  }

  return (
    <div>
      { displayFormsEdu() }
      <button type="button" className="bg-white" onClick={addNewJob}>Add New Education</button>
    </div>
  )
}

export default EducationalInput;