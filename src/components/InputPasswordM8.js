/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 24/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Image from 'next/image';
import lockIcon from '../images/lock.svg'
import visibilityOffIcon from '../images/visibility-off.svg'
import visibilityOnIcon from '../images/visibility-on.svg'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';

export default function InputPasswordM8(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
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
  function generate(element) {
    return props.validates.map((item) =>
      React.cloneElement(element, {
        key: item.name,
      }),
    );
  }

  return (
    <Box style={{width: '100%'}} className={`input-password-m8 ${props.className?props.className:""}`}>
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
            .input-password-m8 .input-password-m8__validate{
              position: absolute;
              background: white;
              z-index: 9;
              top: 60px;
              box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
              border-radius: 4px;
              width: 235px;
            }
            .input-password-m8.confirm-password .input-password-m8__validate{
              display: none;
            }
            .input-password-m8 .input-password-m8__valid svg{
              color: #F1B821;
            }
            .input-password-m8 .input-password-m8__valid p{
              color: #F1B821;
              font-weight: 300;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.0025em;
            }
            .input-password-m8 .input-password-m8__invalid svg{
              color:#EE1C24;
            }
            .input-password-m8 .input-password-m8__invalid p{
              color:#EE1C24;
              font-weight: 300;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.0025em;
            }
            .input-password-m8 .input-password-m8__validate .MuiListItemIcon-root{
              min-width: auto;
              margin-right: 5px;
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
                  {<Image  src={showPassword?visibilityOffIcon.src:visibilityOnIcon.src} width={20} height={20} alt="lock" /> }
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {(!props.hideValidatePassword&& props.validates) && <List dense={dense} className="input-password-m8__validate">
              {props.validates && props.validates.map((item,index)=> <ListItem key={index} className={`input-password-m8__${item.valid?"valid":"invalid"}`}>
                  <ListItemIcon>
                    {item.valid ?<DoneIcon/>:<ClearIcon />}
                  </ListItemIcon>
                  <ListItemText 
                    secondary={item.name}
                  />
                </ListItem>
              )}
            </List>}

        </FormControl>
    </Box>
  );
}
