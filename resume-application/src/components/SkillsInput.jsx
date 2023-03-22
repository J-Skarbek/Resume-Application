import React from "react";
import SkillsForm from "./SkillsForm";

function InputSkills(props) {

  const addNewSkill = e => {
    e.preventDefault();
    props.setSkill([
      ...props.skill,
      {
        skill: '',
      },
    ])
    console.log(props.skill)
  }

  return (
    <SkillsForm
      skills={props.skill}
      updateSkills={props.updateSkills}
      addNewSkill={addNewSkill}
    />
  );
}

export default InputSkills;