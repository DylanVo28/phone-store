import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link  from 'next/link';
import content from '../../public/locales/content';
import { useRouter } from 'next/router';

export default function SolutionCard(props) {
  const {locale}=useRouter()
  return (<>
  <style jsx global>
    {`
        .solution-card{
          box-shadow:none;
        }
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
        .solution-card{
          box-shadow: 0px 0px 2px 2px rgba(131, 131, 131, 0.15);
          cursor: pointer;
        }
        .solution-card:hover{
          box-shadow: 0px 0px 2px 2px rgb(0 158 254 / 15%);
          transition: 0.3s;
        }
    `}
  </style>
  <Link href="tada">
    <a className="text-decoration--none">
    <Card sx={{ maxWidth: 345 }} className="solution-card">
      <Card>
      <CardMedia
        component="img"
        height="300"
        image={props.item.image}
        alt="green iguana"
      />
      </Card>
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
            {content[locale]['title.viewDetail']}

            </a>
        </Link>
        <Button variant="contained">{content[locale]['title.signup']}</Button>
      </CardActions>
    </Card>
    </a>
 
  </Link>
    
    </>
  );
}