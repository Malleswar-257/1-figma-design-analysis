import React, { useState } from 'react';

const DynamicForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    let newFormData = { ...formData };
    let newErrors = { ...errors };

    if (type === 'number') {
      newFormData[name] = parseFloat(value);
    } else {
      newFormData[name] = value;
    }

    // Basic validation
    if (type === 'text' && !value) {
      newErrors[name] = 'This field is required';
    } else {
      delete newErrors[name];
    }

    setFormData(newFormData);
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age || ''}
          onChange={handleInputChange}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;