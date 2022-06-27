import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AllOutIcon  from '@mui/icons-material/AllOut';
import IconTitle from './IconTitle';
import LinkM8 from './LinkM8';
 const NewsCardLeft=(props)=>{
    return <>
    <style jsx global>{`
    .package-card{
      border: none;
    box-shadow: none;
    }
    .package-card .package-card__list{
      padding: 15px 0;
    }
    .package-card-content{
        transform: translateY(-35px);
        left: calc(50% - 385px/2 - 0.5px);
        top: calc(50% - 366px/2 + 111px);
        background: #FFFFFF;
        border: 1px solid #4BA6DD;
        border-radius: 42px 42px 12px 12px;
    }
    .package-card__title{
        font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #0061AF;
    }
    .package-card__description{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.005em;
        color: #44494D;
    }
    .package-card__description span{
        color: #0061AF;
    }
    .package-card__title-list{
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */
        
        letter-spacing: 0.0015em;
        
        /* Blue main */
        
        color: #0061AF;
    }
    .package-card__list-item{
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      letter-spacing: 0.0025em;

      /* gray sub text */

      color: #44494D;
      display: flex;
    }
    .package-card__list-item span{
      padding-right: 5px;
      display: flex;
      align-items: center;
    }
    .package-card__price{
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #EE1C24;
    }
    .package-card_image{
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
    }
    `}

    </style>
    <Card  className="package-card">
      <CardMedia
        component="img"
        height="400"
        image={props.item.image}
        alt="green iguana"
        className="package-card_image"
      />
      <CardContent className="package-card-content">
        <Typography gutterBottom variant="h5" component="div" className="package-card__title">
          {props.item.title}
        </Typography>
        <Typography gutterBottom variant="p" component="div" className="package-card__description">
          {props.item.des}
        </Typography>
      
            <CardActions style={{justifyContent: 'space-between'}}>
      
            <LinkM8 href="/tada" title="Xem chi tiết"></LinkM8>

      </CardActions>
      </CardContent>
     
    </Card>
    </>
}
export default NewsCardLeft