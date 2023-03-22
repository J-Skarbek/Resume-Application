import React from "react";

function SkillsForm(props) {

  return (
    <div className="work-exp">
      <form className="general-info">
        <label htmlFor="position">Add Skill</label>
        <input 
        type="text"
        name="title"
        id="position"
        placeholder="Javascript, Typescript, Rust, React, etc..."
        onChange={props.updateSkills}
        value={props.skills}
        />
      </form>
    </div>
  );
}

export default SkillsForm;