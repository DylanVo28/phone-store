import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import icons from "../images/icons";
import Link from "next/link";
const ImgMediaCard = (props) => {
  return (
    <Link
      href={{
        pathname: "/products/[id]",
        query: { id: props.item.id },
      }}
    >
      <a className="text-decoration--none img-media-card">
        <style jsx global>
          {`
          .img-media-card .css-1ri6ub7-MuiPaper-root-MuiCard-root{
            position: relative;
            box-sizing: border-box;
            background: #FFFFFF;
            border-radius: 12px;
            border: none;
          }
          .img-media-card .cart-icon{
            position: absolute;
            background: #0090ff;
            padding: 4px;
            border-radius: 50%;
            width: 30px;
            right: 15px;
            top: 15px;
            box-shadow: 0px 0px 8px 0px #0090ff80;
            background: #0061AF;
            box-shadow: 0px 0px 8px 2px #67b9f4;
            border-radius: 100px;
          }
          .img-media-card .card-image{
            padding-bottom: 15px;
            padding-top: 15px;
          }
          .img-media-card .product__price-discount{
            position: absolute;
            top: -13px;
            background: #ff0000;
            padding: 3px 15px;
            color: white;
          
            font-size: 13px;
            border-radius: 0px 6px 6px 0px;

          }
          .img-media-card .react-multi-carousel-track{
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .img-media-card .card__description{
            font-weight: 400;
            font-size: 14px;
            line-height: 125%;
            letter-spacing: 0.0025em;
            color: #44494D;
          }
          #products {
            background-size: cover;
              background-position: center;
              background-repeat: no-repeat!important;
          }
          .img-media-card .product__price{
            justify-content: space-between;
            padding: 16px 
          }
          .img-media-card .product__price__price{
            text-decoration-line: line-through;
            color: #0061AF;
            letter-spacing: 0.004em;
            font-weight: 300;
            font-size: 14px;
          }
          .img-media-card .product__price__discount{
            color: #EE1C24;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.0015em;
          }
          .img-media-card .card__title{
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            letter-spacing: 0.0015em;
            color: #44494D;
          }
          .img-media-card .img-media-card__card-content{
            border-top: 1px solid #D9D9D9;
          }
          .img-media-card .card-image{
            background-size: 100%;
            width: auto;
            margin: auto;
          }
          `}
        </style>
      <Card sx={{ maxWidth: 270 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height={props.heightCard}
          image={props.item.image}
          className="card-image"
        ></CardMedia>
        {props.isCart && <img src={icons.cart.src} className="cart-icon" />}

        <div style={{ position: "relative" }}>
          <div className="product__price-discount">
            Giảm : {props.item.discountValue}
          </div>

          <CardContent className="img-media-card__card-content">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="card__title"
            >
              {props.item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card__description"
            >
              {props.item.description}
            </Typography>
          </CardContent>

          <CardActions className="product__price">
            <span>
              <div className="product__price__discount">
                {props.item.price - props.item.discountValue}
              </div>
              <div className="product__price__price">{props.item.price}</div>
            </span>

            <Button variant="outlined" size="small">
              {props.textBtn}
            </Button>
          </CardActions>
        </div>
      </Card>
      </a>

     
    </Link>
  );
};
ImgMediaCard.defaultProps = {
  item: {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      " which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. ",
    price: 300000000,
  },
  textBtn: "Đăng ký",
  heightCard: 200,
};
export default ImgMediaCard;
