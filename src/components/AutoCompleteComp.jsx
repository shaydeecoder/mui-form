import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoCompleteComp() {
  return (
    <>
      <h2>AutoComplete</h2>

      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={top8Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Movie' />}
      />
    </>
  );
}

// 8 films as rated by IMDb users. http://www.imdb.com/chart/top
const top8Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
];
