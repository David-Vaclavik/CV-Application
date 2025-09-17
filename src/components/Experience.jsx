import { useState, useRef } from "react";

function Experience({ experience, setCvData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    company: "",
    position: "",
    workDate: "",
    location: "",
  });

  // starts from 5 because of example data
  const nextId = useRef(5);
  // Add a state to track which experience entry is being edited
  const [editingIndex, setEditingIndex] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCvData((prev) => {
      if (editingIndex !== null) {
        // Update existing experience entry
        const updatedExperience = [...prev.experience];
        updatedExperience[editingIndex] = formData;
        return {
          ...prev,
          experience: updatedExperience,
        };
      } else {
        // Add new experience entry
        return {
          ...prev,
          experience: [...prev.experience, { ...formData, id: nextId.current }],
        };
      }
    });

    if (editingIndex === null) {
      nextId.current++; // Only increment ID for new entries
    }

    // Reset form and editing state
    setFormData({
      id: nextId.current,
      company: "",
      position: "",
      workDate: "",
      location: "",
    });
    setEditingIndex(null);
    setIsEditing(false);
  }

  function handleEdit() {
    setEditingIndex(null); // Indicates adding new entry
    setFormData({
      id: nextId.current,
      company: "",
      position: "",
      workDate: "",
      location: "",
    });
    setIsEditing(true);
  }

  function handleEditSpecific(edu, index) {
    setFormData(edu);
    setEditingIndex(index); // Track which entry is being edited
    setIsEditing(true);
  }

  function handleRemove(edu) {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== edu.id),
    }));

    // Reset form and editing state
    setFormData({
      id: nextId.current,
      company: "",
      position: "",
      workDate: "",
      location: "",
    });
    setEditingIndex(null);
    setIsEditing(false);
  }

  return (
    <div className="experience-info container">
      <h2>Experience</h2>

      {experience.map((edu, index) => (
        <button
          key={edu.id}
          onClick={() => handleEditSpecific(edu, index)}
          style={{ backgroundColor: "oklch(60% 0 0)" }}
        >
          {edu.company}
        </button>
      ))}

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Google"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Junior developer"
            value={formData.position}
            onChange={handleChange}
          />

          <label htmlFor="workDate">Date of Work</label>
          <input
            type="text"
            id="workDate"
            name="workDate"
            placeholder="2020-2024"
            value={formData.workDate}
            onChange={handleChange}
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="USA, California"
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
        <button onClick={handleEdit}>+ Experience</button>
      )}
    </div>
  );
}

export { Experience };
