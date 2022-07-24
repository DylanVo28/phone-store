/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckboxM8({children,icon,checkedIcon}){
    return (
        <Box  component="div" >
            <Checkbox {...label} icon={icon} checkedIcon={checkedIcon}/>
            {children}
        </Box>
        
    )
}