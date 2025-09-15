import { useState } from "react";
import "./App.css";
import { PersonalInfo } from "./components/Personal-info";

function App() {
  const [cvData, setCvData] = useState({
    general: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    education: [],
    experience: [],
  });

  return (
    <>
      <div className="forms-container">
        <PersonalInfo general={cvData.general} setCvData={setCvData} />
        {/* <PersonalInfo general={cvData.general} setCvData={setCvData} /> */}
      </div>
      {/* <PersonalInfo general={cvData.general} setCvData={setCvData} /> */}
    </>
  );
}

export default App;
