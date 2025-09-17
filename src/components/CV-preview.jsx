// import { useState } from "react";
import "../styles/CV-preview.css";

function CVPreview({ cvData }) {
  return (
    <div className="cv-preview">
      <div className="personal-section">
        <h1>{cvData.general.name}</h1>
        <div className="side-info">
          <h3>{cvData.general.email}</h3>
          <h3>{cvData.general.phone}</h3>
          <h3>{cvData.general.address}</h3>
        </div>
      </div>

      <hr />

      <h2>Education</h2>

      <div className="education-section">
        {cvData.education.map((edu) => (
          <div key={edu.id} className="school-info">
            <div className="date-location">
              <p>{edu.studyDate}</p>
              <p>{edu.location}</p>
            </div>
            <div className="school-degree">
              <b>{edu.school}</b>
              <p>{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2>Experience</h2>
    </div>
  );
}

export { CVPreview };
