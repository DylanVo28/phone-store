/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
const ItemButton=(props)=>{
    return (
        <Button variant="outlined" endIcon={props.icon} className="item-button" onClick={props.onClick}>
        {props.title}
        </Button>
    )
}
export default ItemButton
ItemButton.defaultProps={
    title:"tada x"
}