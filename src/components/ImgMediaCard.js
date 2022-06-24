import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import icons from "../images/icons";
import { Link } from 'next/link';
const ImgMediaCard = (props) => {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
         height="200"
        image={props.item.image}
        className="card-image"
      >

      </CardMedia>
      {props.isCart && <img src={icons.cart.src} className="cart-icon"/>}

      <div style={{position: 'relative'}}>
      <div className="product__price-discount">Giảm : {props.item.discountValue}</div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="card__title">
          {props.item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="card__description">
          {props.item.description}
        </Typography>
      </CardContent>
      
      <CardActions className="product__price">
       
        <span>
        

            <div className="product__price__discount">{props.item.price - props.item.discountValue}</div>
            <div className="product__price__price">{props.item.price}</div>
        </span>

        <Button variant="outlined" size="small">Đăng ký</Button>
      </CardActions>
      </div>
    </Card>
  );
};
export default ImgMediaCard;
