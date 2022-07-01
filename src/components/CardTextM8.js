import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardTextM8(props) {
  console.log(props)
  return (
    <Card sx={{ width: props.widthCard,height: props.heightCard }} className="card-text-8">
      <CardContent className="card-text-8__content">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className="card-text-8__title">
        {props.title}
        </Typography>
       
       
        <Typography variant="body2" className="card-text-8__description">
         {props.description}
        </Typography>
      </CardContent>
     
    </Card>
  );
}
CardTextM8.defaultProps={
    title: "Word of the Day",
    description: " well meaning and kindly.",
    heightCard: 185,
    widthCard:  250 
}