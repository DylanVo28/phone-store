import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
const ItemButton=()=>{
    return (
        <Button variant="outlined" endIcon={<SendIcon />}>
        Send
        </Button>
    )
}
export default ItemButton