import React from 'react';
import WorkExpForm from './WorkExpForm';

function WorkInput(props) {
 
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

  const deleteJob = index => e => {
    e.preventDefault();
    const test = props.workInfo.filter(job => job.key !== index);
    props.setNewExp(test);
    // console.log(props.workInfo)
  }
  
  const displayForms = () => {
    const formFields = props.workInfo.map((pastJob, i) => {
      return <div className={`index-${i}`} key={i}>
          <WorkExpForm
          details={pastJob}
          index={i}
          updateInfo={props.updateInfo(i)}
          addNewJob={addNewJob}
          deleteJob={deleteJob(i)}
          />
      </div>
      })
    return formFields;
  }

  return (
    <div>
      { displayForms() }
      <button type="button" className="bg-white" onClick={addNewJob}>Add Job</button>
    </div>
  )
}

export default WorkInput;