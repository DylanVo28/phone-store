import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
const ItemButton=(props)=>{
    return (
        <Button variant="outlined" endIcon={props.icon} className="item-button">
        {props.title}
        </Button>
    )
}
export default ItemButton
ItemButton.defaultProps={
    title:"tada x"
}