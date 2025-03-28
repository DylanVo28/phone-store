/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
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
   
    
    return (
        <ListItem
        className="item-checkbox"
       
        disablePadding
      >
        <style jsx global>{`
          .item-checkbox .item-checkbox__checkbox{
            padding-top: 0;
            padding-bottom: 0;
            color: #0061AF;
          }
        `}</style>
        <ListItemButton role={undefined} onClick={(e)=>props.handleChange()} dense >
          <ListItemIcon className='checkbox'>
            <Checkbox
              edge="start"
              checked={props.checked}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby':'checkbox-list-label-1'}}
              className="item-checkbox__checkbox"
            />
          </ListItemIcon>
          <ListItemText  primary={props.title} />
        </ListItemButton>
      </ListItem>
    )
}
export default ItemCheckBox