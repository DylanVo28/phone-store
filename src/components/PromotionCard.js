
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import background from '../images/background-card.svg'
import backgroundSolution from '../images/background-solution.svg'
export default function PromotionCard(props) {
  return (<>
     <style jsx global>{`
     .promotion-card{
      overflow: hidden;
      cursor: pointer;
     }
    .promotion-card:hover .promotion-card__image{
      transform: scale(1.2);
      transition: 0.3s;
    }
    .promotion-card:hover .promotion-card__content{
      background: url(${backgroundSolution.src});
      transition: 0.3s;
    }
    .promotion-card .promotion-card__card{
      overflow: hidden;
      box-shadow: none;
      background: none;
      border-radius: 12px;
    }
    .promotion-card .promotion-card__title{
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.0015em;
      color: #333333;
      padding-top: 30px;
    }
    .promotion-card .promotion-card__btn{
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: right;
      letter-spacing: 0.0015em;
      text-decoration-line: underline;
     /* Blue main */
      color: #0061AF;
    }
    .promotion-card .promotion-card__content{
      background: url(${background.src});
      background-size: 100%!important;
      background-repeat: no-repeat!important;
      background-position: top!important;
      transform: translateY(-60px)!important;
      padding-bottom: 0!important;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    .promotion-card .promotion-card__image{
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  
    `}
        
    </style>

    <Card sx={{ maxWidth: 300 }} className="promotion-card">
      <Card className="promotion-card__card">
      <CardMedia
        className="promotion-card__image"
        component="img"
        height="300"
        image={props.item.image}
        alt="green iguana"
      />
      </Card>
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
