import React from "react";

function Experience({ experiences }) {
  return (
    <div>
      <h4>Experience</h4>
      <ul>
        {experiences.map((experience) => {
          return (
            <li>
              {experience.year} {experience.company} {experience.role}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
