import { TextField } from '@mui/material';
import React from 'react';

function TextFieldDate() {
  return (
    <div>
      <h2>TextField Date Input</h2>

      <TextField type='date' variant='outlined' placeholder='Outlined' />
      <TextField type='date' variant='filled' placeholder='Filled' />
      <TextField type='date' variant='standard' placeholder='Standard' />
    </div>
  );
}

export default TextFieldDate;
