/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";
import { useState,useEffect } from "react";
import { PropTypes } from 'prop-types';
const InputM8 = (props) => {
  const [value, setValue] = useState("");
  const [widthForm,setWidthform]=useState(23)

  return (
    <FormControl
      sx={{ m: 1, width: widthForm+"ch" }}
      variant="outlined"
      className="input-m8"
      style={props.style}
    >
      <InputLabel
        htmlFor="outlined-adornment-password"
        className="input-m8__label"
      >
        {props.placeHolder}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={"text"}
        endAdornment={
          <InputAdornment position="end" placeholder={props.placeHolder}  >{props.icon}</InputAdornment>
        }

        label="Password"
        className="input-m8__outlined-input"
        onChange={props.handleChange}
        defaultValue={props.defaultValue}
        onFocus={e=>setWidthform(25)}
      />
    </FormControl>
  );
};
InputM8.propTypes={
  placeHolder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon:PropTypes.func
}
InputM8.defaultProps = {
  placeHolder: "tada",
  label: "tada",
};
export default InputM8;
