import React from 'react';
import Form from './Form';

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
      {
        key: '',
        companyName: '',
        title: '',
        city: '',
        fromDate: '',
        toDate: '',
        jobDescription: '',
      },
      ...props.workInfo,
    ])
    console.log(props.workInfo)
  }

  //test function to insert at:

  // const handleClick = () => {
  //   const insertAt = i;
  //   const updateArr = [
  //     ...workExp.slice(0, insertAt),
  //     { key: i , title: value, },
  //     ...workExp.slice(insertAt)
  //   ] 
  // }

  const displayForms = () => {
    const newArr = [...props.workInfo];
    const formFields = newArr.map((pastJob, i) => {
      return <div className={`index-${i}`} key={i}>
          <Form 
          details={pastJob}
          index={i}
          updateInfo={props.updateInfo(i)}
          addNewJob={addNewJob}
          />
      </div>
      })
    return formFields;
  }

  return (
    <div>
      { displayForms() }
      <button type="button" className="bg-white" onClick={addNewJob}>Testing Add new work exp</button>
    </div>
  )
}

export default WorkInput;