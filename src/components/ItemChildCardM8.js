/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ItemChildCardM8Style from '../styles/components/ItemChildCardM8Style';

export default function ItemChildCardM8({children,checked}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', flexDirection: 'flex-end'}} className={`item-child-card  ${checked ?'active':'' } `}>
      <style jsx global>
        {`
          .item-child-card{
            border: 1px solid #E2EEFF;
            border-radius: 6px;
            padding: 5px;
            display: flex;
            align-items: center;
            box-shadow: none;
          }
          .item-child-card.active{
            border: 1px solid #5180C0;
            position: relative;
            overflow: auto;
          }
          .item-child-card.active::before{
            content: '✔';
            width: 20px;
            height: 15px;
            position: absolute;
            background: #5180C0;
            top: 0px;
            right: 0;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom-left-radius: 3px;
            font-weight: bold;
            font-size: 10px;
          }
        `}
      </style>
      <ItemChildCardM8Style/>
      <CardMedia
        component="img"
        style={{width: 40+"px"}}
        image="https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg"
        alt="Live from space album cover"
      />
      <Box >
          <Typography component="h5" variant="h5" className="item-child-card__title">
            Live From Space
          </Typography>
          <Typography component="h5" variant="h5" className="item-child-card__price">
            29.990.000
          </Typography>
      </Box>
    </Card>
  );
}