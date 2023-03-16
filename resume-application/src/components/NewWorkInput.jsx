import React from 'react';
import Form from './Form';

function NewWorkInput(props) {

  const displayForms = () => {
    const newArr = [...props.workInfo];
    // const formFields = newArr.reverse().map((pastJob, i) => {
    const formFields = newArr.map((pastJob, i) => {
      // console.table(newArr)
      return <div className={`index-${i}`} key={i}>
          <Form 
          details={pastJob}
          index={i}
          updateInfo={props.updateInfo(i)}
          />
      </div>
      })
    // console.table(newArr)
    return formFields;
  }

  const addNewTest = e => {
    e.preventDefault();
    console.log('test')
  }


  return (
    <div>
      <button type="button" className="bg-white" onClick={addNewTest}>Testing Add new work exp</button>
      { displayForms() }
    </div>
  )
}

export default NewWorkInput;