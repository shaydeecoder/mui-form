import React, { useState } from 'react';
import { TextField, Button, FormControl, Box } from '@mui/material';

const ValidatingForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
    };

    if (!formValues.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formValues.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Perform form submission or other actions
      alert(JSON.stringify(formValues));
      console.log('Form submitted successfully');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Form Validation</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label='Name'
          name='name'
          value={formValues.name}
          onChange={handleChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
          fullWidth
          sx={{ mb: 3 }}
        />

        <TextField
          label='Email'
          name='email'
          value={formValues.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button type='submit' variant='contained' fullWidth color='primary'>
          Submit
        </Button>
      </form>
    </>
  );
};

export default ValidatingForm;
