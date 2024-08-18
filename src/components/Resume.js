import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "./Resume.css";
function Resume({ experiences, educations, skills }) {
  const handleClick = () => {
    window.print();
  };
  return (
    <>
      <div className="resume">
        <h1>Resume</h1>
        <div className="resume__items">
          {educations && educations.length <= 10 && (
            <Education educations={educations} />
          )}
          {experiences && experiences.length <= 10 && (
            <Experience experiences={experiences} />
          )}
          {skills && skills.length <= 10 && <Skills skills={skills} />}
          <button onClick={handleClick} type="submit">
            Print
          </button>
        </div>
      </div>
    </>
  );
}

export default Resume;
