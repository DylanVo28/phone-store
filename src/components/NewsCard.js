
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
         <Typography variant="subtitle1" color="text.secondary" component="div">
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
  heightCard: 187,
  widthCard: 200 
}
