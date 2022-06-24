import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const ItemCheckBox=(props)=>{
    const [isChecked,setIsChecked]=React.useState(false)
    return (
        <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} onClick={()=>setIsChecked(!isChecked)} dense >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={isChecked}
              tabIndex={-1}
              disableRipple
             
              inputProps={{ 'aria-labelledby':'checkbox-list-label-1'}}
            />
          </ListItemIcon>
          <ListItemText  primary={props.title} />
        </ListItemButton>
      </ListItem>
    )
}
export default ItemCheckBox