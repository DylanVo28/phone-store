import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
const ItemCheckBox=()=>{
    return (
        <ListItem
        key={value}
        secondaryAction={
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} onClick={1} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={true}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby':'checkbox-list-label-1'}}
            />
          </ListItemIcon>
          <ListItemText  primary={`Line item `} />
        </ListItemButton>
      </ListItem>
    )
}
export default ItemCheckBox