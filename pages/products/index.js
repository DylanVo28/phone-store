import { Card, CardMedia, Container } from "@mui/material";
import List from "@mui/material/List";
import ItemCheckBox from "../../src/components/ItemCheckbox";
import Navbar from "./../../src/components/Navbar";
import { Grid } from "@mui/material";
import ImgMediaCard from "./../../src/components/ImgMediaCard";
import ItemButton from "../../src/components/ItemButton";
import Footer from "./../../src/components/Footer";
import SpeedDialTooltipOpen from "./../../src/components/SpeedDialTooltipOpen";
import ButtonM8 from "../../src/components/ButtonM8/Button";
import CarouselM8 from "../../src/components/Carousel";
import CloseIcon from "@mui/icons-material/Close";
import iconNotFound from "../../src/images/404.svg";
import TabsM8 from "../../src/components/TabsM8";
import React, { useEffect, useState } from "react";
import BreadCrumbsM8 from "../../src/components/BreadCrumbsM8";
import phone from "../../src/images/phone.png";
import ActionAreaCardM8 from "../../src/components/ActionAreaCardM8/ActionAreaCardM8";
import banner62 from '../../src/images/baner-6-2.png'
import faq from '../../src/images/faq.png'
import NoSSR from "react-no-ssr";
import banner from '../../src/images/baner-6-1.png'

const items = ["Tất cả", "Trả trước", "Trả trước", "Trả trước"];
const itemsProduct = [
  {
    id: 1,
    image:phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      " which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
];
var itemsBanner = [
  {
    image:'https://media4.giphy.com/media/jJjb9AUHOiP3nJJMdy/giphy.gif?cid=82a1493brk1p5lo4f0kludsbvfxp3iv8d9ajxafmvqch52xy&rid=giphy.gif&ct=v',
  },
  {
    image:banner.src,
  },
];
const Index = () => {
  const [width, setWidth] = useState(0);
  const [checkNull,setCheckNull]=useState(true)
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const onChangeTabs=(num)=>{
    if(num===1){
      setCheckNull(true)
    }
    else{
      setCheckNull(false)
    }
  }
  return (
    <>
      <React.Fragment>

      <style jsx global>
        {`
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
        .package-list__title .title{
          padding-left: 0;
        }
      `}
      </style>
      <NoSSR>
      <Navbar />
      <div style={{height: 120+"px"}}></div>
      <CarouselM8 items={itemsBanner} />
      <Container maxWidth="lg" style={{ paddingTop: "5vw",paddingBottom: "5vw" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} className="package__list-option">
            <Grid item xs={12} style={{ padding: "10px 0" }}>
              <h4 style={{ margin: 0 }}>Loại gói cước</h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {items.map((item, index) => (
                  <ItemCheckBox title={item} key={index} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} style={{ padding: "10px 0" }}>
              <h4 style={{ margin: 0 }}>Loại gói cước</h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {items.map((item, index) => (
                  <ItemCheckBox title={item} key={index} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} style={{ padding: "10px 0" }}>
              <h4 style={{ margin: 0 }}>Loại gói cước</h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {items.map((item, index) => (
                  <ItemCheckBox title={item} key={index} />
                ))}
              </List>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9} style={{ paddingTop: 0 }}>
            <Grid item xs={12} className="package-list__title">
              <div style={{ padding: "15px 0" }}>
                <h1 className="title">Gói cước</h1>
                <BreadCrumbsM8 />
                <div style={{ marginTop: "5px" }}>
                  <span>Lọc theo: </span>
                  <ItemButton
                    icon={<CloseIcon />}
                    title={<span style={{ paddingTop: "4px" }}>Tất cả</span>}
                  />
                </div>
              </div>
            </Grid>
 <Grid container spacing={2}>
              <Grid item xs={12} className="package-list__item">
                <div>
                  <p style={{ display: "inline-block", paddingRight: "10px" }}>
                    Ưu tiên xem:{" "}
                  </p>
                  <ButtonM8
                    title="Trả trước"
                    className="btn-mobi-8 active"
                  ></ButtonM8>
                  <ButtonM8 title="Trả trước" className="btn-mobi-8"></ButtonM8>
                </div>
                <TabsM8 onChangeTabs={onChangeTabs}/>
                {checkNull &&
                <Grid container spacing={2} style={{ paddingTop: "15px" }}>
                  {itemsProduct.map((item, index) => (
                    <Grid item xs={12} sm={4} key={index} style={{padding: '16px'}}>
                      <ImgMediaCard
                      item={item}
                        isCart={true}
                        isdiscount={true}
                        discountValue={3000000}
                      />
                    </Grid>
                  ))}
                </Grid>}
                { !checkNull &&
              <Grid item xs={12} className="text-align--center">
                <img
                  className="not-found"
                  src={iconNotFound.src}
                  alt="not-found"
                />
                <h1 className="title" style={{textTransform: 'inherit'}}>Không tìm thấy thiết bị</h1>
              </Grid>
            }
              </Grid>
            </Grid>
            

            
          </Grid>
        </Grid>
      </Container>
      {/*banner section */}
<Container maxWidth="lg" id="banner">
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Card sx={{ maxWidth: 100 + "%" , boxShadow: 'none'}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={banner62.src}
          className="card-image"
        />
      </Card>
    </Grid>
   
  </Grid>
</Container>

{/*support section*/}
<Container maxWidth="lg">
<Grid item xs={12}>
  <span>
    <h1 className="title">Hỗ trợ khách hàng</h1>
  </span>
</Grid>
  <Grid container spacing={2} id="supports">
    <Grid item xs={3}>
          <ActionAreaCardM8 image={faq.src}/>
      </Grid>
      <Grid item xs={3}>
          <ActionAreaCardM8 image={faq.src}/>
      </Grid>
      <Grid item xs={3}>
          <ActionAreaCardM8 image={faq.src}/>
      </Grid>
      <Grid item xs={3}>
          <ActionAreaCardM8 image={faq.src}/>
      </Grid>
      </Grid>
      </Container>
  {width&&<SpeedDialTooltipOpen />}
      {width && <SpeedDialTooltipOpen />}
      <Footer></Footer>
      </NoSSR>
      </React.Fragment>
    </>
  );
};

export default Index;
