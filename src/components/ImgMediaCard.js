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
        height="140"
        image={props.image}
      />
      {props.isCart && <img src={icons.cart.src} />}
      {props.isdiscount && <div> Giảm : {props.discountValue}</div>}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles<span>tada</span>
        </Typography>
      </CardContent>
      <CardActions>
        <span>
          {props.itemValue&&<div>900,000đ</div>}
        {props.detail && <a href="/tada">tada</a>}
          {props.discountValue && (
            <div>{props.itemValue - props.discountValue}</div>
          )}
        </span>

        <Button size="small">Đăng ký</Button>
      </CardActions>
    </Card>
  );
};
export default ImgMediaCard;
