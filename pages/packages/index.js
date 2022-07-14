import { Container } from "@mui/material";
import List from "@mui/material/List";
import ItemCheckBox from "../../src/components/ItemCheckbox";
import Navbar from "./../../src/components/Navbar";
import { Grid } from "@mui/material";
import ImgMediaCard from "./../../src/components/ImgMediaCard";
import ItemButton from "../../src/components/ItemButton";
import Footer from "./../../src/components/Footer";
import SpeedDialTooltipOpen from "./../../src/components/SpeedDialTooltipOpen";
import { useEffect, useState } from "react";
import PackageCardM8 from "../../src/components/PackageCardM8";
import CloseIcon from "@mui/icons-material/Close";
import ButtonM8 from "../../src/components/ButtonM8/Button";
import TabsM8 from "../../src/components/TabsM8";
import  Card  from '@mui/material/Card';
import  CardMedia  from '@mui/material/CardMedia';
import ActionAreaCardM8 from "../../src/components/ActionAreaCardM8/ActionAreaCardM8";
import CarouselM8 from "../../src/components/Carousel";
import iconNotFound from'../../src/images/404.svg'
import BreadCrumbsM8 from "../../src/components/BreadCrumbsM8";
const items = ["Tất cả", "Trả trước", "Trả trước", "Trả trước"];
const images = [
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
const itemsPackage = [
  {
    id:1,
    image:
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
  },
  {
    id:1,
    image:
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
  },
  {
    id:1,
    image:
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
  },
  {
    id:1,
    image:
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
  },
  {
    id:1,
    image:
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
  },
  {
    id:1,
    image:
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
  },
  {
    id:1,
    image:
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
  },
];
var itemsBanner = [
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
  },
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
  },
];
const Index = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
    <style jsx global>
      {
        `
          .package__list-option{
            box-shadow: 0px 0px 4px rgb(130 130 130 / 25%);
            border-radius: 12px;
          }
          .package__list-option .MuiList-root{
            background: none;
          }
          .package-list__title{
            box-shadow: 0px 0px 4px rgb(130 130 130 / 25%);
            border-radius: 12px;
            padding: 10px 20px;
          }
          .package-list__title .title{
            margin: 0;
          }
          .package-list__item{
            margin-left: 15px;
            box-shadow: 0px 0px 4px rgb(130 130 130 / 25%);
            border-radius: 12px;
            margin-top: 30px;
          }
          .item-checkbox .MuiListItemButton-root{
            padding-left: 0px;
          }
          .package__list-option 
        `
      }
    </style>
      <Navbar />
      <CarouselM8 items={itemsBanner}/>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2} className="package__list-option">
            <Grid item xs={12}>
              <h4 style={{margin: 0}}>Loại gói cước</h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {items.map((item,index) => (
                  <ItemCheckBox title={item} key={index} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12}>
              <h4 style={{margin: 0}}>Loại gói cước</h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {items.map((item,index) => (
                  <ItemCheckBox title={item} key={index} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12}>
              <h4 style={{margin: 0}}>Loại gói cước</h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {items.map((item,index) => (
                  <ItemCheckBox title={item} key={index} />
                ))}
              </List>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Grid item xs={12} className="package-list__title">
              <div>
                <h1 className="title">Gói cước</h1>
                <BreadCrumbsM8/>
                <span>Lọc theo: </span>
                <ItemButton icon={<CloseIcon />} title={<span>Tất cả</span>} />
                
              </div>
            </Grid>
          
            <Grid container spacing={2}>
            <Grid item xs={12} className="package-list__item">
                  <div>
                  <p>Ưu tiên xem</p>
                <ButtonM8
                  title="Trả trước"
                  className="btn-mobi-8 btn-package-active"
                ></ButtonM8>
                <ButtonM8 title="Trả trước" className="btn-mobi-8"></ButtonM8>
                  </div>
                  <TabsM8 />
            <Grid container spacing={2}>

              {itemsPackage.slice(0, 5).map((item, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  {" "}
                  <PackageCardM8 item={item} detail={true} />
                </Grid>
              ))}
              {
                  <img className="not-found" src={iconNotFound.src} alt="not found"/>
              }
              </Grid>
            </Grid>
             
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
      {/*banner section */}
      <Container maxWidth="lg">
        <Grid container spacing={2} id="banners">
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 + "%" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="400"
                image={
                  "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg"
                }
                className="card-image"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>

 {/*support section*/}
 <Container maxWidth="lg">
      <div>
        <span>
          <h1 className="title">Hỗ trợ khách hàng</h1>
        </span>
      </div>
        <Grid container spacing={2} id="supports">
          <Grid item xs={3}>
                <ActionAreaCardM8/>
            </Grid>
            <Grid item xs={3}>
                <ActionAreaCardM8/>
            </Grid>
            <Grid item xs={3}>
                <ActionAreaCardM8/>
            </Grid>
            <Grid item xs={3}>
                <ActionAreaCardM8/>
            </Grid>
            </Grid>
            </Container>

      {width && <SpeedDialTooltipOpen />}
      <Footer></Footer>
    </>
  );
};

export default Index;
