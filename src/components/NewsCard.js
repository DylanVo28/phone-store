
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
import Link from 'next/link';
import LinkM8 from './LinkM8';

export default function NewsCard(props) {
  const theme = useTheme();

  return (<>
  <style jsx global>
    {
      `
      .news-card:hover img{
        transform: scale(1.2);
        transition: 0.3s;
      }
      .news-card:hover{
        border: 1px solid #0061AF;
      }
      .news-card{
      
        width: 100%;
        cursor: pointer;
        box-shadow: none;
        border: 1px solid #D9D9D9;
        border-radius: 12px;
        transition: 0.3s;
      }
      .news-card .css-1mcnwpj-MuiList-root{
        max-width: none;
      }
      .news-card .css-1p823my-MuiListItem-root{
        display: block
      }
      .news-card .css-ag7rrr-MuiTypography-root{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */
      
        letter-spacing: 0.0015em;
      
        /* Blue main */
      
        color: #0061AF;
      }
      .news-card .css-ecpxie-MuiTypography-root{
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        /* or 171% */
      
      
        /* gray sub text */
      
        color: #44494D;
      }
      .news-card .news-card__content{
        width: 100%;
      }
      .news-card .news-card__box{
        display: block;
        width: 80%;
        background: white;
        z-index: 99;
        position: relative;
      }
      .news-card .news-card__box .news-card__content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }
      .news-card .news-card__box .news-card__content .news-card__description{
        height: 80%;
      }
      `
    }
  </style>
    <Card sx={{ display: 'flex' }} className="news-card">
     
     <CardMedia
       component="img"
       sx={{ height: props.heightCard, width: props.widthCard }}
       image={props.image}
     />
      <Box sx={{ display: 'flex', flexDirection: 'column' }} className="news-card__box">
       <CardContent sx={{ flex: '1 0 auto' }} className="news-card__content">
         <Typography component="div" variant="h5">
           {props.title}
         </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div" className={"news-card__description"}>
           {props.description}
         </Typography>
         <LinkM8 href={props.href} title={props.hrefTitle}></LinkM8>
       </CardContent>
     </Box>
   </Card>
    </>
    
  );
}
NewsCard.defaultProps={
  image: "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
  title: "Nhập title",
  description: "Nhập description",
  href: "/tada",
  hrefTitle: "Xem chi tiết",
  heightCard: 182,
  widthCard: 200 
}
