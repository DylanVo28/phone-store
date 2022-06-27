import * as React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import  AllOutIcon  from '@mui/icons-material/AllOut';
import { useEffect } from 'react';
import contact from '../images/contact.svg'
const SpeedDialTooltipOpen=()=>{
    
    return <>
      <style jsx global>
        {`
.rtf--mb{
  
background: linear-gradient(180deg, #006ABC 0%, #0278D4 22.92%, #118BEC 37.5%, #118DF0 53.65%, #147ED6 73.44%, #165992 90.62%);
}
.fab-mobi-8__icon{
  width: 30px;
}
        `}
      </style>
     <Fab
    icon={<img className='fab-mobi-8__icon' src={contact.src}/> }
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