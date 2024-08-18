import React from "react";

function Education({ educations }) {
  return (
    <div>
      <h4>Education</h4>
      <ul>
        {educations.map((education) => {
          return <li>{education}</li>;
        })}
      </ul>
    </div>
  );
}

export default Education;
