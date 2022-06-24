import * as React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import  AllOutIcon  from '@mui/icons-material/AllOut';
import { useEffect } from 'react';

const SpeedDialTooltipOpen=()=>{
    
    return  <Fab
    icon={<AllOutIcon/> }
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
}
export default SpeedDialTooltipOpen