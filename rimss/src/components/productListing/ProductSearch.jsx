import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import SearchIcon from '@mui/icons-material/Search';

function ProductSearch({ onSearch }) {
  const [searchKey, setSearchKey] = useState();
  const searchHandler = () => {
    onSearch(searchKey || '');
  };

  const mouseDownHandler = () => {
    onSearch(searchKey || '');
  };
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
      <InputLabel htmlFor='outlined-adornment-search'>Search</InputLabel>
      <OutlinedInput
        id='outlined-adornment-search'
        type={'text'}
        value={searchKey}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='search products'
              onClick={searchHandler}
              onMouseDown={mouseDownHandler}
              edge='end'
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label='Search'
      />
    </FormControl>
  );
}

export default ProductSearch;
