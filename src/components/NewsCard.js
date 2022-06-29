
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

export default function NewsCard() {
  const theme = useTheme();

  return (<>
  <style jsx global>
    {`
        .css-1mcnwpj-MuiList-root{
            max-width: none;
        }
        .css-1p823my-MuiListItem-root{
            display: block
        }
        .css-ag7rrr-MuiTypography-root{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            /* or 150% */

            letter-spacing: 0.0015em;

            /* Blue main */

            color: #0061AF;
        }
        .css-ecpxie-MuiTypography-root{
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            /* or 171% */


            /* gray sub text */

            color: #44494D;
        }
        .news-card__content{
            width: 100%;
        }
        .news-card__box{
            display: block;
            width: 80%;
        }
    `}
  </style>
    <Card sx={{ display: 'flex' }} className="news-card">
     
     <CardMedia
       component="img"
       sx={{ height: 187, width: 200 }}
       image="https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg"
       alt="Live from space album cover"
     />
      <Box sx={{ display: 'flex', flexDirection: 'column' }} className="news-card__box">
       <CardContent sx={{ flex: '1 0 auto' }} className="news-card__content">
         <Typography component="div" variant="h5">
           Live From Space
         </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
           Mac Miller
         </Typography>
         <LinkM8 href="/tada" title="Xem chi tiết"></LinkM8>
       </CardContent>
      
     </Box>
   </Card>
    </>
    
  );
}
