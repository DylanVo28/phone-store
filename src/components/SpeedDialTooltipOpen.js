/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import  AllOutIcon  from '@mui/icons-material/AllOut';
import { useEffect } from 'react';
import contact from '../images/contact.svg'
const SpeedDialTooltipOpen=()=>{
  
    return <>
   
     <Fab
    icon={<img className='fab-mobi-8__icon' src={contact.src} alt="contract"/> }
    event={'hover'}
    alwaysShowTitle={true}
  >
     <Action
      text="Email"
    >
        <AllOutIcon/>
    </Action>
    <Action
        text="Help"
      >
     <AllOutIcon/>
    </Action>
  
  </Fab>
  </>
}
export default SpeedDialTooltipOpen