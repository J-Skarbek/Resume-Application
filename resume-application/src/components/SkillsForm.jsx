import React from "react";

function SkillsForm(props) {

  return (
    <div className="work-exp">
      <form className="general-info">
        <label htmlFor="position">Add Skill</label>
        <input 
        type="text"
        name="skill"
        id="position"
        placeholder="Javascript, Typescript, Rust, React, etc..."
        onChange={props.updateSkills}
        value={props.skill}
        />
        <button onClick={props.addNewSkill}>Add Skill</button>
      </form>
    </div>
  );
}

export default SkillsForm;