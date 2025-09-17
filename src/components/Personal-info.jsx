import { useState } from "react";

function PersonalInfo({ general, setCvData }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(general);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // update App’s state, replacing only the general section
    setCvData((prev) => ({
      ...prev,
      general: formData,
    }));

    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
    // console.log(general);
  }

  return (
    <div className="personal-info container">
      <h2>Personal Info</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Wick"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Wick69@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+420123456789"
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="USA, New York"
            value={formData.address}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <span>Name:</span> {general.name}
          <br />
          <span>Email:</span> {general.email}
          <br />
          <span>Phone:</span> {general.phone}
          <br />
          <span>Address:</span> {general.address}
          <br />
          <br />
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export { PersonalInfo };
