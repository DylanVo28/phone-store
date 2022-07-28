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
import Image from 'next/image';
import lockIcon from '../images/lock.svg'
import visibilityOffIcon from '../images/visibility-off.svg'
import visibilityOnIcon from '../images/visibility-on.svg'

import styled from 'styled-components'
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
  const StyledImage = styled(Image)`
// your styles here
marginRight: 30px; 
`

  return (
    <Box style={{width: '100%'}} className="input-password-m8">
       <style jsx global>

        {
          `
            .input-password-m8 .MuiOutlinedInput-input{
              padding: 12.5px 14px;
            }
            .input-password-m8 .MuiInputBase-root{
              border: 1px solid#cbcbcb;
            }
            .input-password-m8 .MuiOutlinedInput-notchedOutline{
              display: none;
            }
          `
        }
       </style>
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
                  <Image src={lockIcon.src} width={30} height={30} alt="lock" />
                </InputAdornment>
              }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  style={{marginRight: '10px'}}
                >
                  {showPassword ? <Image  src={visibilityOffIcon.src} width={20} height={20} alt="lock" />: <Image  src={visibilityOnIcon.src} width={20} height={20} alt="lock" /> }
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
         

        </FormControl>
    </Box>
  );
}
