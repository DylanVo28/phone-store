/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 24/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ButtonGroupM8 from './ButtonGroupM8';
import { useEffect } from 'react';
import { isSpecialString, isValidCharNumber, isValidStrLowerCase, isValidStrUpperCase } from '../helpers/utils';
export default function InputPasswordM8(props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setShowPassword( event.target.value );
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const checkValidInput=(str)=>{
    
  }
  return (
    <Box style={{width: '100%'}} className="input-password-m8">
       
        <FormControl sx={{ m: 1, width: '100%',margin: 0 }} variant="outlined">
          {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeHolder}
            startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
         

        </FormControl>
    </Box>
  );
}
