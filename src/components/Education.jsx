import { useState, useRef } from "react";

function Education({ education, setCvData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    school: "",
    degree: "",
    studyDate: "",
    location: "",
  });

  const nextId = useRef(0);
  // Add a state to track which education entry is being edited
  const [editingIndex, setEditingIndex] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    // setFormData([...formData, { [name]: value }]);

    setFormData({ ...formData, [name]: value });

    console.log({ ...formData, [name]: value });
    // console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCvData((prev) => {
      if (editingIndex !== null) {
        // Update existing education entry
        const updatedEducation = [...prev.education];
        updatedEducation[editingIndex] = formData;
        return {
          ...prev,
          education: updatedEducation,
        };
      } else {
        // Add new education entry
        return {
          ...prev,
          education: [...prev.education, { ...formData, id: nextId.current }],
        };
      }
    });

    if (editingIndex === null) {
      nextId.current++; // Only increment ID for new entries
    }

    // Reset form and editing state
    setFormData({
      id: nextId.current,
      school: "",
      degree: "",
      studyDate: "",
      location: "",
    });
    setEditingIndex(null);
    setIsEditing(false);
  }

  function handleEdit() {
    setEditingIndex(null); // Indicates adding new entry
    setFormData({
      id: nextId.current,
      school: "",
      degree: "",
      studyDate: "",
      location: "",
    });
    setIsEditing(true);
  }

  // Add a new function to handle editing specific education entries
  function handleEditSpecific(edu, index) {
    setFormData(edu); // Populate form with the selected education data
    setEditingIndex(index); // Track which entry is being edited
    setIsEditing(true);
  }

  function handleRemove(edu) {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== edu.id),
    }));

    // Reset form and editing state
    setFormData({
      id: nextId.current,
      school: "",
      degree: "",
      studyDate: "",
      location: "",
    });
    setEditingIndex(null);
    setIsEditing(false);
  }

  return (
    <div className="education-info container">
      <h2>Education</h2>

      {education.map((edu, index) => (
        <button
          key={edu.id}
          onClick={() => handleEditSpecific(edu, index)}
          style={{ backgroundColor: "oklch(60% 0 0)" }}
        >
          {edu.school}
        </button>
      ))}

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            placeholder="New York University"
            value={formData.school}
            onChange={handleChange}
            required
          />

          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="Bachelor of Science"
            value={formData.degree}
            onChange={handleChange}
          />

          <label htmlFor="studyDate">Date of study</label>
          <input
            type="text"
            id="studyDate"
            name="studyDate"
            placeholder="2020-2024"
            value={formData.studyDate}
            onChange={handleChange}
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="USA, New York"
            value={formData.location}
            onChange={handleChange}
          />

          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => handleRemove(formData)}
              style={{ backgroundColor: "oklch(60% 0.18 26)" }}
            >
              Remove
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleEdit}>+ Education</button>
        // <div className="addButton">
        // </div>
      )}
    </div>
  );
}

export { Education };
