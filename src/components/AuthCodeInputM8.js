/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 24/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import React, { useRef, useState } from 'react';
import AuthCode, { AuthCodeRef } from 'react-auth-code-input';
import { Box } from '@mui/material';

const AuthCodeInputM8 = () => {
    const [result, setResult] = useState();
    const handleOnChange = (res) => {
      setResult(res);
    };
  
    return<><style>
    {`
    .auth-code input {
        width: 45px;
        height: 45px;
        padding: 0;
        font-size: 24px;
        text-align: center;
        margin-right: 12px;
        text-transform: uppercase;
        color: #494949;
        font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
          sans-serif;
        background: #fff;
        background-clip: padding-box;
        border: none;
        border-bottom: 1px solid black;
      }
      
      .auth-code input:focus {
        appearance: none;
        outline: 0;
        box-shadow: 0 0 0 3px rgb(131 192 253 / 50%);
      }
      .auth-code div{
        justify-content: center;
        display: flex;
      }
      
    `}</style>
    <Box component="div" className='auth-code' >
    <AuthCode onChange={handleOnChange} />


    </Box>
    </> ;
};
export default AuthCodeInputM8