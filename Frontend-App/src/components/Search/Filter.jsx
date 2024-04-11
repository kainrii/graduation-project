import { TextField, MenuItem } from '@mui/material'
import React from 'react'
const currencies = [
    {
      value: 'All',
      label: 'All',
    }  ];
const Filter = () => {
  return (
    
    <TextField
    id="outlined-select-currency"
    select
    label="Select category"
    defaultValue="EUR"
    fullWidth
  >
    {currencies.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.value}
      </MenuItem>
    ))}
  </TextField>
  )
}

export default Filter
