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
import  Link  from 'next/link';
 const NewsCardLeft=(props)=>{
    return <>
   <Link href={"/"+props.item.id}>
    <a className="text-decoration--none">
    <Card  className="package-card">
      <CardMedia
        component="img"
        height={props.heightCard}
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
      
            <LinkM8 href={props.href} title={props.hrefTitle}></LinkM8>

      </CardActions>
      </CardContent>
     
    </Card>
    </a>
   </Link>
   
    </>
}
NewsCardLeft.defaultProps={
  href: "/tada",
  hrefTitle:"Xem chi tiết",
  heightCard:400
}
export default NewsCardLeft