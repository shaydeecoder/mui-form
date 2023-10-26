import { TextField } from '@mui/material';
import React from 'react';

const CustomTextInput = ({ label, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      variant='filled'
      label={label}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CustomTextInput;
