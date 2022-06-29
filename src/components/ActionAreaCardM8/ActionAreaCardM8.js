import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './ActionAreaCardM8.module.sass'
export default function ActionAreaCardM8() {
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.actionCardAreaM8}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="195"
          image="https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={styles.actionCardAreaM8__title}>
            Lizard
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
