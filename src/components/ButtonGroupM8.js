/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 24/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export default function ButtonGroupM8({children}) {
  return (
    <Box
    
    >
      <ButtonGroup
        aria-label="vertical outlined button group"
        style={{display: 'flex'}}
      >
        {children}
      </ButtonGroup>
      
    </Box>
  );
}
