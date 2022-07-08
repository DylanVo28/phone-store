import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import IconTitle from "./IconTitle";
import Link from "next/link";
import PackageCardM8Style from "../styles/PackageCardM8Style";
const PackageCardM8 = (props) => {
  return (
    <>
      <PackageCardM8Style />
      <Link
        href={{
          pathname: "/packages/[id]",
          query: { id: props.kaka },
        }}
      >
        <a className="text-decoration--none" style={props.justify}>
          <Card sx={{ maxWidth: 345 }} className="package-card">
            <CardMedia
              component="img"
              height="250"
              image={props.item.image}
              alt="green iguana"
              className="package-card_image"
            />
            <CardContent className="package-card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="package-card__title"
              >
                {props.item.title}
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                className="package-card__description"
              >
                <span>Đối tượng: </span>
                {props.item.des}
              </Typography>
              {props.item.incentives && (
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  className="package-card__title-list"
                >
                  Ưu đãi
                </Typography>
              )}
              <List>
                {props.item.incentives &&
                  props.item.incentives.map((item, index) => (
                    <ListItem key={index}>
                      <IconTitle
                        variant="p"
                        component="h6"
                        icon={
                          <div
                            style={{
                              width: 5 + "px",
                              height: 5 + "px",
                              background: "orange",
                              borderRadius: 50 + "%",
                              display: "inline-block",
                            }}
                          />
                        }
                        title={item}
                        className="package-card__list-item"
                      />
                    </ListItem>
                  ))}
              </List>
              <CardActions
                className="package-card__card-actions"
                style={{ justifyContent: "space-between" }}
              >
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  className="package-card__price"
                >
                  100.000đ/ 1 month
                </Typography>
                <Button variant="contained">Đăng ký</Button>
              </CardActions>
            </CardContent>
          </Card>
        </a>
      </Link>
    </>
  );
};
export default PackageCardM8;
