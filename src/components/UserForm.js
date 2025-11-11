import React, { useState } from 'react';

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.age || formData.age < 1) {
      newErrors.age = 'Valid age is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
      setFormData({ name: '', email: '', age: '' });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="user-form">
      <div>
        <input
          data-testid="name-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <span data-testid="name-error">{errors.name}</span>}
      </div>
      
      <div>
        <input
          data-testid="email-input"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span data-testid="email-error">{errors.email}</span>}
      </div>
      
      <div>
        <input
          data-testid="age-input"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        {errors.age && <span data-testid="age-error">{errors.age}</span>}
      </div>
      
      <button type="submit" data-testid="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default UserForm;