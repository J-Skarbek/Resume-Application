import React from "react";
import SkillsForm from "./SkillsForm";

function InputSkills(props) {

  return (
    <SkillsForm
      skills={props.skill}
      updateSkills={props.updateSkills} 
    />
  );
}

export default InputSkills;