
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import background from '../images/background-card.svg'
export default function PromotionCard(props) {
  return (<>
    <style jsx global>{`
    .promotion-card__title{
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.0015em;
        color: #333333;
        padding-top: 30px;
    }
    
    .promotion-card__btn{
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        letter-spacing: 0.0015em;
        text-decoration-line: underline;
        
        /* Blue main */
        
        color: #0061AF;
    }
    .promotion-card__content{
      background: url('${background.src}');
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: top;
      transform: translateY(-60px);
      padding-bottom: 0;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
    .promotion-card__image{
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
    `}
        
    </style>

    <Card sx={{ maxWidth: 345 }} className="promotion-card">
      <CardMedia
        className="promotion-card__image"
        component="img"
        height="300"
        image={"https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg"}
        alt="green iguana"
      />
      <CardContent className='promotion-card__content'>
      <Typography gutterBottom variant="h5" component="div" className="promotion-card__title">
      QUÀ TRAO TAY - CHỌN MOBIFONE NGAY (1000 phần quà đang chờ bạn khám phá!)
        </Typography>
        <CardActions style={{flexDirection: 'row-reverse'}}>
   
    <Button size="small" className="promotion-card__btn">Learn More</Button>
  </CardActions>
      </CardContent>
      
    </Card>
    </>
  );
}
