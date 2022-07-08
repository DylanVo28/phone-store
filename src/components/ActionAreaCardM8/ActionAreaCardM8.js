import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './ActionAreaCardM8.module.sass'
export default function ActionAreaCardM8(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className={ " faq-card "}>
      <style jsx global>
        {`
        .faq-card{
          background: #FFFFFF;
          box-shadow: 0px 0px 30px rgb(103 185 244 / 30%);
          border-radius: 12px;
          transition: 0.3s;
          cursor: pointer;
          border: 1px solid transparent;
          transform: scale(1);

        }
          .faq-card:hover{
            transition: 0.9s;
            border: 1px solid #0061AF;
          }
          .faq-card:hover .far-card__card-media{
          transition: 0.3s;
            transform: scale(1.2);
          }
        `}
      </style>
      <CardActionArea>
        <CardMedia
          component="img"
          height="195"
          image={props.image}
          alt="green iguana"
          className='far-card__card-media'
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
