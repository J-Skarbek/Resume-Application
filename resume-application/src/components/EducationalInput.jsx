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

  
  const addNewSchool = e => {
    e.preventDefault();
    props.setNewEduExp([
      ...props.educationInfo,
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
    console.log(props.educationInfo)
  }

  const deleteEducation = index => e => {
    e.preventDefault();
    const test = props.educationInfo.filter(school => school.key !== index);
    props.setNewEduExp(test);
    console.log(props.educationInfo)
  }
  
  const displayFormsEdu = () => {
    const formFields = props.educationInfo.map((pastEduExp, i) => {
      return <div className={`index-${i}`} key={i}>
          <EduExpForm
          details={pastEduExp}
          index={i}
          updateInfo={props.updateInfo(i)}
          deleteJob={deleteEducation(i)}
          />
      </div>
      })
    // console.log(props.educationInfo);
    return formFields;
  }

  return (
    <div>
      { displayFormsEdu() }
      <button type="button" className="bg-white" onClick={addNewSchool}>Add New Education</button>
    </div>
  )
}

export default EducationalInput;