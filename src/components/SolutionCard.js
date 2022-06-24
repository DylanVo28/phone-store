import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link  from 'next/link';

export default function SolutionCard(props) {
  return (<>
  <style jsx global>
    {`
        .solution-card__title{
            font-weight: 600;
            font-size: 24px;
            line-height: 28px;

            /* Blue main */

            color: #0061AF;
        }
        .solution-card__desc{
            font-weight: 400;
            font-size: 16px;
            line-height: 160%;
            /* or 26px */

            letter-spacing: 0.005em;

            /* gray sub text */

            color: #44494D;
        }
        .solution-card__link-to{
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            /* identical to box height */

            letter-spacing: 0.0015em;
            text-decoration-line: underline;
            color: #0061AF;
        }
    `}
  </style>
    <Card sx={{ maxWidth: 345 }} className="solution-card">
      <CardMedia
        component="img"
        height="300"
        image={props.item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='solution-card__title' >
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary" className="solution-card__desc">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'space-between'}}>
        <Link href="/tada" >
            <a className='solution-card__link-to'>
            Xem chi tiết

            </a>
        </Link>
        <Button variant="contained">Đăng ký</Button>
      </CardActions>
    </Card>
    </>
  );
}