import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import { Container, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import ActionAreaCardM8 from "../../src/components/ActionAreaCardM8/ActionAreaCardM8";
import TabsM8 from './../../src/components/TabsM8';
import SolutionCard from "../../src/components/SolutionCard";
import BreadCrumbsM8 from "../../src/components/BreadCrumbsM8";
import SpeedDialTooltipOpen from "../../src/components/SpeedDialTooltipOpen";
import { useEffect, useState } from "react";
const itemsPackage = [
    {
      id:1,
      image:
        "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
      title: "dijango",
      des: "Thuê bao mới hòa mạng",
      incentives: [
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
      ],
    },
    {
      id:1,
      image:
        "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
      title: "dijango",
      des: "Thuê bao mới hòa mạng",
      incentives: [
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
      ],
    },
    {
      id:1,
      image:
        "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
      title: "dijango",
      des: "Thuê bao mới hòa mạng",
      incentives: [
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
      ],
    },
    {
      id:1,
      image:
        "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
      title: "dijango",
      des: "Thuê bao mới hòa mạng",
      incentives: [
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
      ],
    },
    {
      id:1,
      image:
        "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
      title: "dijango",
      des: "Thuê bao mới hòa mạng",
      incentives: [
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
      ],
    },
    {
      id:1,
      image:
        "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
      title: "dijango",
      des: "Thuê bao mới hòa mạng",
      incentives: [
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
      ],
    },
    {
      id:1,
      image:
        "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
      title: "dijango",
      des: "Thuê bao mới hòa mạng",
      incentives: [
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
        "Thuê bao mới hòa mạng",
      ],
    },
  ];
const Index = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
      {/*navbar section*/}
      <Navbar />
      {/*banner section */}
      <Grid item xs={12}>
        <Card sx={{ maxWidth: 100 + "%" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="595"
            image={
              "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg"
            }
          />
        </Card>
      </Grid>

      {/* solutions section*/}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <Typography variant="h1" component="h1" className="title">
                Giải pháp Doanh Nghiệp
              </Typography>
              <BreadCrumbsM8/>
            </div>
          </Grid>
          <TabsM8/>
          {itemsPackage.map((item,index) => (
            <Grid item xs={4} key={index}>
                <SolutionCard item={item} detail={true} />

                </Grid>
              ))}
              
        </Grid>
      </Container>

      {/* banner */}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
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
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ActionAreaCardM8 />
          </Grid>
          <Grid item xs={3}>
            <ActionAreaCardM8 />
          </Grid>
          <Grid item xs={3}>
            <ActionAreaCardM8 />
          </Grid>
          <Grid item xs={3}>
            <ActionAreaCardM8 />
          </Grid>
        </Grid>
      </Container>
      {width&&<SpeedDialTooltipOpen />}

      <Footer />
    </>
  );
};
export default Index;
