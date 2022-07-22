/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
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
import PackageCardM8Style from "../styles/components/PackageCardM8Style";
import content from "../../public/locales/content";
import { useRouter } from "next/router";
import { replaceSpaceToDash } from "../helpers/utils";
import { DOMAIN_SERVICE } from "../../config";
const PackageCardM8 = (props) => {
  const {locale}=useRouter()
  return (
    <>
      <PackageCardM8Style />
      <Link
      href={{
        pathname: content[locale]["title.[/packages/package]"],
        query: { package: replaceSpaceToDash(props.item.name) }
      }}
      passHref
       
      >
        <a className="text-decoration--none" style={props.justify}>
          <Card sx={{ maxWidth: 345 }} className="package-card">
            <CardMedia
              component="img"
              height={props.maxHeightImage}
              image={`${DOMAIN_SERVICE}/${props.item.image}`}
              alt="green iguana"
              className="package-card_image"
            />
            <CardContent className="package-card-content" style={{padding: '12px'}}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="package-card__title"
              >
                {props.item.name}
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                className="package-card__description"
              >
                <h5>Đối tượng: </h5>
                {props.item.promotion_info}
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
                {props.item['promotion_info'] &&
                  props.item['promotion_info'].map((item, index) => (
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
                style={{ justifyContent: "space-between", padding: '0px' }}
              >
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  className="package-card__price"
                >
                  {props.item.unit_price_net}
                </Typography>
                <Button variant="contained">{content[locale]['title.signup']}</Button>
              </CardActions>
            </CardContent>
          </Card>
        </a>
      </Link>
    </>
  );
};
export default PackageCardM8;
