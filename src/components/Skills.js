import React from "react";

function Skills({ skills }) {
  return (
    <div>
      <h4>Skills</h4>
      <ul>
        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
    </div>
  );
}

export default Skills;
