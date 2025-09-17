// import { useState } from "react";
import "../styles/CV-preview.css";

function CVPreview({ cvData }) {
  return (
    <div className="cv-preview">
      <div className="personal-section">
        <h1>{cvData.general.name}</h1>
        <div className="side-info">
          <h2>{cvData.general.email}</h2>
          <h2>{cvData.general.phone}</h2>
          <h2>{cvData.general.address}</h2>
        </div>
      </div>

      <hr />

      <div className="education-section">
        <h1>Education</h1>
      </div>
    </div>
  );
}

export { CVPreview };
