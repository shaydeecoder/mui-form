import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectComp() {
  const [color, setColor] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 280 }}>
      <FormControl variant='filled' fullWidth>
        <InputLabel id='demo-simple-select-label'>
          What's your favourite colour?
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={color}
          label='Favourite Colour?'
          onChange={handleChange}
        >
          <MenuItem value={'red'}>Red</MenuItem>
          <MenuItem value={'yellow'}>Yellow</MenuItem>
          <MenuItem value={'black'}>Black</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
