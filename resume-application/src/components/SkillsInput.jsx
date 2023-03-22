import React from "react";
import SkillsForm from "./SkillsForm";

function InputSkills(props) {

  const addNewSkill = e => {
    e.preventDefault();
    // const { name, value } = e.target;
    props.setSkill([
      ...props.skill,
      {
        skill: '',
        // [name]: value
        // skill: '',
      },
    ])
    console.log(props.skill)
  }

  return (
    <div>
      <SkillsForm
      skills={props.skill}
      updateSkills={props.updateSkills}
      // addNewSkill={addNewSkill}
    />
    {/* <button onClick={addNewSkill}>Add Skill</button> */}
    <button onClick={props.setSkillsArray}>Add Skill</button>
    </div>
    
  );
}

export default InputSkills;