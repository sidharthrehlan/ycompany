import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectList({ options, classLabel, label, changeHandler, value }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
      <InputLabel id={`${classLabel}-label`}>{label}</InputLabel>
      <Select
        labelId={`${classLabel}-label`}
        id={`${classLabel}-select`}
        value={value}
        label={label}
        onChange={changeHandler}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.key} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SelectList;
