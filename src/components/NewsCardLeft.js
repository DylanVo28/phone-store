/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinkM8 from './LinkM8';
import  Link  from 'next/link';
import content from '../../public/locales/content';
import { useRouter } from 'next/router';
 const NewsCardLeft=(props)=>{
  const {locale}=useRouter()
    return <>
   <Link href={"/"+props.item.id} passHref>
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
        <Typography gutterBottom variant="h5" component="h5" className="package-card__title">
          {props.item.title}
        </Typography>
        <Typography gutterBottom variant="p" component="p" className="package-card__description">
          {props.item.des}
        </Typography>
      
            <CardActions style={{justifyContent: 'space-between'}}>
      

      </CardActions> 
      </CardContent>
     
    </Card>
    </a>
   </Link>
   
    </>
}
NewsCardLeft.defaultProps={
  href: "/tada",
  
  heightCard:400
}
export default NewsCardLeft