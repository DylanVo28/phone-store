/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import  Typography  from '@mui/material/Typography';
import  AllOutIcon  from '@mui/icons-material/AllOut';
const IconTitle=(props)=>{
    return ( <Typography variant={props.variant} component={props.component} className={props.className} onClick={props.onClick}>
    {props.icon}
    <span className='icon-title__title'>{props.title}</span>
    </Typography>)
}
export default IconTitle