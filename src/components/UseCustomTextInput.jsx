import React, { useState } from 'react';
import CustomTextInput from './CustomInput';

function UseCustomTextInput() {
  const [name, setName] = useState('');

  const onChange = (value) => {
    setName(value);
  };

  return (
    <div>
      <h2>Using Custom Text Input</h2>

      <CustomTextInput value={name} onChange={onChange} label='Name' />
    </div>
  );
}

export default UseCustomTextInput;
