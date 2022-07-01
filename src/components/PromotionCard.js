
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
    {/* <style jsx global>{`
    
    .promotion-card__content{
      background: url('${background.src}');
    }
    `}
        
    </style> */}

    <Card sx={{ maxWidth: 345 }} className="promotion-card">
      <CardMedia
        className="promotion-card__image"
        component="img"
        height="300"
        image={"https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg"}
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
