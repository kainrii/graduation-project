import React from "react";
import { Select, MenuItem, Chip } from "@mui/material";

function ChipSelect(props) {
  const { options, value, onChange } = props;

  return (
    <Select
      value={value}
      onChange={onChange}
      renderValue={selected => (
        <div>
          {selected.map(option => (
            <Chip key={option} label={option} />
          ))}
        </div>
      )}
    >
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
}