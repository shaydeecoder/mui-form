import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const FormExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    if (name === '') {
      setNameError(true);
    }

    if (email == '') {
      setEmailError(true);
    }
    if (password == '') {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <TextField
          label='Name'
          onChange={(e) => setEmail(e.target.value)}
          required
          variant='outlined'
          type='email'
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
          variant='outlined'
          type='email'
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
          variant='outlined'
          type='password'
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant='contained' type='submit' fullWidth>
          Login
        </Button>
      </form>
      <small>
        Need an account? <a href='#'>Register here</a>
      </small>
    </React.Fragment>
  );
};

export default FormExample;
