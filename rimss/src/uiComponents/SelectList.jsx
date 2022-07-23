import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectList({
  options,
  classLabel,
  label,
  changeHandler,
  value,
  required,
}) {
  return (
    <FormControl required={required} sx={{ m: 1, minWidth: 80 }} size='small'>
      <InputLabel id={`${classLabel}-label`} color='secondary'>
        {label}
      </InputLabel>
      <Select
        labelId={`${classLabel}-label`}
        id={`${classLabel}-select`}
        value={value || ''}
        label={label}
        onChange={changeHandler}
        name={classLabel}
        color='secondary'
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SelectList;
