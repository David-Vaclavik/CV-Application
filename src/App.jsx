import { useState } from "react";
import "./App.css";
import { PersonalInfo } from "./components/Personal-info";
import { CVPreview } from "./components/CV-preview";
import { Education } from "./components/Education";

function App() {
  const [cvData, setCvData] = useState({
    general: {
      name: "David Vaclavik",
      email: "david@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City",
    },
    education: [],
    experience: [],
  });

  // console.log(cvData);
  // console.log("education below:");
  // console.log(cvData.education);
  console.log("Education below:", cvData.education);

  return (
    <>
      <div className="forms-container">
        <PersonalInfo general={cvData.general} setCvData={setCvData} />
        <Education education={cvData.education} setCvData={setCvData} />
      </div>
      {/* <PersonalInfo general={cvData.general} setCvData={setCvData} /> */}
      <CVPreview cvData={cvData} />
    </>
  );
}

export default App;
