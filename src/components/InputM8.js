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
import SearchIcon from '@mui/icons-material/Search';
const InputM8=(props)=>{
    
    return  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className='input-m8'>
        <style jsx global>{`
            .input-m8__outlined-input{
                flex-direction: row-reverse;
            }
            .input-m8__label{
                padding-left: 33px;
            }
            .Mui-focused{
                padding-left: 0px;
            }
        `}</style>
    <InputLabel htmlFor="outlined-adornment-password" className='input-m8__label'>Password</InputLabel>
    <OutlinedInput
      id="outlined-adornment-password"
      type={'text'}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon
            aria-label="toggle password visibility"
            edge="end"
          >
            {  <Visibility />}
          </SearchIcon>
        </InputAdornment>
      }
      label="Password"
      className="input-m8__outlined-input"
    />
  </FormControl>
}

export default InputM8