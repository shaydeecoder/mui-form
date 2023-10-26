import { TextField } from '@mui/material';
import React from 'react';

function TextFieldVariants() {
  return (
    <div>
      <h2>TextField Variants</h2>

      <TextField variant='outlined' placeholder='Outlined' />
      <TextField variant='filled' placeholder='Filled' />
      <TextField variant='standard' placeholder='Standard' />
    </div>
  );
}

export default TextFieldVariants;
