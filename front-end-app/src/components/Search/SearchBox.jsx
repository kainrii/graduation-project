import React from 'react'
import {TextField, Box} from '@mui/material';


const SearchBox = () => {
  return (
      <TextField
        id="searh-box"
        label="Search"
        placeholder='Search jobs by name or company'
        type="keyword"
        fullWidth
      />
  )
}

export default SearchBox
