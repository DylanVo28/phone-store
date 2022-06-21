import { Button, Grid, List } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Navbar";
import MultiItemCarousel from "../src/components/Simple";
import styles from "../styles/Home.module.css";
import Slide from "./../src/components/Carousel";
import icons from "../src/images/icons";
import ImgMediaCard from "../src/components/ImgMediaCard";
import { Container, Input, InputAdornment } from "@mui/material";
import Item from "../src/components/Item";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { ImageIcon } from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import { WorkIcon } from "@mui/icons-material/Work";
import { BeachAccessIcon } from "@mui/icons-material/BeachAccess";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Link from 'next/link';

const items = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];
export default function Home() {

  return (
    <>
   
   
      <Navbar />
      <Slide />
      <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MultiItemCarousel
            iconLeft={icons.package_data.src}
            titleLeft={"Gói cước"}
            iconRight={icons.arrowRight.src}
            titleRight={"Xem tất cả"}
            maxItemSlide={3}
            images={items}
            linkTo={"/packages"}
            htmlDescription={items.slice(0, 5).map((image) => (
              <ImgMediaCard image={image} />
            ))}
          />
        </Grid>
        <Grid item xs={12}>
          <MultiItemCarousel
            iconLeft={icons.device.src}
            titleLeft={"Thiết bị di động"}
            iconRight={icons.arrowRight.src}
            titleRight={"Xem tất cả"}
            maxItemSlide={4}
            linkTo={"/devices"}
            htmlDescription={items.slice(0, 5).map((image) => (
              <ImgMediaCard
                image={image}
                isCart={true}
                isdiscount={true}
                discountValue={3000000}
              />
            ))}
          />
        </Grid>
        <Grid item xs={12}>
          <MultiItemCarousel
            iconLeft={icons.solution.src}
            titleLeft={"Giải pháp doanh nghiệp"}
            iconRight={icons.arrowRight.src}
            titleRight={"Xem tất cả"}
            maxItemSlide={3}
            linkTo={"/products"}
            htmlDescription={items.slice(0, 5).map((image) => (
              <ImgMediaCard image={image} detail={true} />
            ))}
          />
        </Grid>
        <Grid item xs={12}>
          <div style={{ width: "100%" }}>
            <Box
              sx={{
                display: "grid",
                gridAutoColumns: "1fr",
                gap: 1,
              }}
            >
              <Item sx={{ gridRow: "1", gridColumn: "span 2" }}>{

                <img src="https://th.bing.com/th/id/R.92b1ab1d36d1ac3bdf247bbfacd4a466?rik=eWO2tKoCpMQQZg&pid=ImgRaw&r=0" style={{width: 100 +"%"}}/>
              }</Item>
              {/* The second non-visible column has width of 1/4 */}
              <Item sx={{ gridRow: "1", gridColumn: "span 2" }}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <ArrowRightIcon />
                    </ListItemAvatar>
                    <ListItemText secondary="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ArrowRightIcon />
                    </ListItemAvatar>
                    <ListItemText secondary="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ArrowRightIcon />
                    </ListItemAvatar>
                    <ListItemText secondary="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " />
                  </ListItem>
                </List>
              </Item>
            </Box>
          </div>
        </Grid>
      </Grid>
      </Container>
    </>
  );
}
