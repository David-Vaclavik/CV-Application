import { useState } from "react";
import "./App.css";
import { PersonalInfo } from "./components/Personal-info";
import { CVPreview } from "./components/CV-preview";
import { Education } from "./components/Education";

// eslint-disable-next-line
const educationExample = {
  id: 0,
  school: "New York University",
  degree: "Bachelor of Science in Computer Science",
  studyDate: "2020-2024",
  location: "New York, USA",
};

const educationArray = [
  {
    id: 0,
    school: "New York University",
    degree: "Bachelor of Science in Computer Science",
    studyDate: "2020-2024",
    location: "New York, USA",
  },
  {
    id: 1,
    school: "Harvard University",
    degree: "Master of Business Administration",
    studyDate: "2024-2026",
    location: "Cambridge, Massachusetts",
  },
  {
    id: 2,
    school: "Stanford University",
    degree: "PhD in Artificial Intelligence",
    studyDate: "2026-2030",
    location: "Stanford, California",
  },
];

function App() {
  const [cvData, setCvData] = useState({
    general: {
      name: "David Vaclavik",
      email: "david@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City",
    },
    // education: [educationExample],
    education: educationArray,
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
