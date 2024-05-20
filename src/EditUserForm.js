import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from './constrain/ApiConstrain';

function EditUserForm({ user, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    city: '',
    contact_no: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const updateUrl = `${API_BASE_URL}/users/${formData.id}`;

    try {
      const response = await fetch(updateUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        onSave(formData);
        resetForm();
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to update user');
      }
    } catch (error) {
      setError(`Error updating user: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      username: '',
      email: '',
      city: '',
      contact_no: ''
    });
  };

  return (  
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger" role="alert" aria-live="assertive">{error}</div>}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          name="username"
          value={formData.username}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          className="form-control"
          name="city"
          value={formData.city}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact_no">Contact No</label>
        <input
          type="text"
          id="contact_no"
          className="form-control"
          name="contact_no"
          value={formData.contact_no}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Save'}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          onCancel();
          resetForm();
        }}
        disabled={isSubmitting}
      >
        Cancel
      </button>
    </form>
  );
}

export default EditUserForm;
