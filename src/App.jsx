import { useState } from "react";
import "./App.css";
import { PersonalInfo } from "./components/Personal-info";
import { CVPreview } from "./components/CV-preview";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

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

const experienceArray = [
  {
    id: 0,
    company: "Google",
    position: "Software Engineer",
    workDate: "2022-2024",
    location: "Mountain View, California",
  },
  {
    id: 1,
    company: "Microsoft",
    position: "Frontend Developer",
    workDate: "2020-2022",
    location: "Redmond, Washington",
  },
  {
    id: 2,
    company: "Meta",
    position: "Full Stack Developer",
    workDate: "2018-2020",
    location: "Menlo Park, California",
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
    // experience: [],
    experience: experienceArray,
  });

  // console.log(cvData);
  // console.log("education below:");
  // console.log(cvData.education);
  // console.log("Education below:", cvData.education);
  // console.log("Experience below:", cvData.experience);

  return (
    <>
      <div className="forms-container">
        <PersonalInfo general={cvData.general} setCvData={setCvData} />
        <Education education={cvData.education} setCvData={setCvData} />
        <Experience experience={cvData.experience} setCvData={setCvData} />
      </div>
      {/* <PersonalInfo general={cvData.general} setCvData={setCvData} /> */}
      <CVPreview cvData={cvData} />
    </>
  );
}

export default App;
