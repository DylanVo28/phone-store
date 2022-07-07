
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
import ItemChildCardM8Style from '../styles/ItemChildCardM8Style';

export default function ItemChildCardM8() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', flexDirection: 'flex-end'}} className={'item-child-card'}>
      <ItemChildCardM8Style/>
      <CardMedia
        component="img"
        style={{width: 60+"px"}}
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