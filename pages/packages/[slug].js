import { Button, CardMedia, Grid, List, Slider } from "@mui/material";
import Navbar from "../../src/components/Navbar";
import { Container, Input, InputAdornment } from "@mui/material";
import Footer from "../../src/components/Footer";
import Card from "@mui/material/Card";
import ActionAreaCardM8 from "../../src/components/ActionAreaCardM8/ActionAreaCardM8";
import CardTextM8 from "../../src/components/CardTextM8";
import CarouselM8 from "../../src/components/Carousel";
import ListItemTextM8 from "../../src/components/ListItemTextM8";
import iconDiscount from '../../src/images/Discount.svg'

import BreadCrumbsM8 from '../../src/components/BreadCrumbsM8';
import VerticalCarouselM8 from "../../src/components/VerticalCarouselM8";
import banner from '../../src/images/baner_1.jpg'
import MetaSEO from "../../src/components/MetaSEO";
import { useRouter } from 'next/router';
import { APP_NAME, DOMAIN } from "../../config";

export default function PackageDetail() {
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);
  const router=useRouter()
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
  const itemData = [
    {
      img: 'https://www.arabicfiction.org/sites/default/files/styles/slide-image/public/default_images/default-book.jpg?itok=j3SHuLkA',
      title: 'Breakfast',
    },
    {
      img: 'https://www.arabicfiction.org/sites/default/files/styles/slide-image/public/default_images/default-book.jpg?itok=j3SHuLkA',
      title: 'Burger',
    },
    {
      img: 'https://www.arabicfiction.org/sites/default/files/styles/slide-image/public/default_images/default-book.jpg?itok=j3SHuLkA',
      title: 'Camera',
    },
    {
      img: 'https://www.arabicfiction.org/sites/default/files/styles/slide-image/public/default_images/default-book.jpg?itok=j3SHuLkA',
      title: 'Coffee',
    },
    {
      img: 'https://www.arabicfiction.org/sites/default/files/styles/slide-image/public/default_images/default-book.jpg?itok=j3SHuLkA',
      title: 'Hats',
    },
    {
      img: 'https://www.arabicfiction.org/sites/default/files/styles/slide-image/public/default_images/default-book.jpg?itok=j3SHuLkA',
      title: 'Honey',
    },
    {
      img: 'https://www.arabicfiction.org/sites/default/files/styles/slide-image/public/default_images/default-book.jpg?itok=j3SHuLkA',
      title: 'Basketball',
    },
    {
      img: 'https://www.arabicfiction.org/sites/default/files/styles/slide-image/public/default_images/default-book.jpg?itok=j3SHuLkA',
      title: 'Fern',
    },
    {
      img: 'https://www.arabicfiction.org/sites/default/files/styles/slide-image/public/default_images/default-book.jpg?itok=j3SHuLkA',
      title: 'Mushrooms',
    }
  ];
  const head = () => {
    return (
      <MetaSEO
        title={`Trang packages | ${APP_NAME}`}
        description={"description"}
        asPath={router.asPath}
        keywords="keywords"
        ogTitle={`Lasted web development | ${APP_NAME}`}
        ogDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        ogUrl={`${DOMAIN}${router.asPath}`}
        ogImage={banner.src}
      ></MetaSEO>
    );
  };
  return (
    <>
    {head()}
    <style jsx global>
      {
        `
        .package-title{
          padding: 0;
          border-radius: 12px;
          border: 1px solid #00000033;
          padding: 15px 0;
          margin-top: 15px;
        }
        .package-title .title{
          margin: 0;
        }
  
        .package-detail__promotion{
          border: 1px solid #D9D9D9;
          border-radius: 5px;
          padding-top: 20px;
          padding-bottom: 20px;
          margin-top: 15px;
        }
        
        `
      }

    </style>
      <Navbar />
      <CarouselM8 items={itemsBanner} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid md={12} className={"package-title"}>
            <h1 className="title">Gói cước</h1>
            <BreadCrumbsM8/>
          </Grid>
        </Grid>
      </Container>
      {/*package section*/}
      <Container maxWidth="lg" className="package-detail">
        <Grid container >
          <Grid  md={10}>
            <Grid container spacing={2}>
              <Grid item md={5}>
                <Card sx={{ maxWidth: 100 + "%" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image={
                      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg"
                    }
                    className="card-image"
                  />
                </Card>
              </Grid>
              <Grid
                item
                md={7}
                className="display--flex justify-content--between"
              >
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <CardTextM8 />
                  </Grid>
                  <Grid item md={6}>
                    <CardTextM8 description={<span className="package-detail__description" style={{color:'red',fontSize: 24 +"px",fontWeight: 600}}>44.000đ</span>}/>
                    <br/>
                    <Button variant="contained" className="float--right">
                      Đăng ký
                    </Button>
                  </Grid>
                  
                </Grid>
              </Grid>
              
              <Grid item md={12} className={"package-detail__promotion"}>
                    <ListItemTextM8 iconTitle={<img src={iconDiscount.src} className="list-item-text-m8__icon" alt="icon discount"/>}
                      title={"Ưu đãi"}
                      iconItem={<span>-</span>}
                      items={["Tặng 3GB data tốc độ cao","Tặng 3GB data tốc độ cao"]}
                    />
                    <ListItemTextM8 iconTitle={<img src={iconDiscount.src} alt="icon discount"/>}
                      title={"Lưu ý"}
                      items={["Gói cước chỉ hỗ trợ thuê bao sử dụng điện thoại truy cập vào ứng dụng/trình duyệt truy cập trực tiếp vào các trang, ứng dụng di động củ"]}
                    />
                     <ListItemTextM8 iconTitle={<img src={iconDiscount.src} alt="icon discount"/>}
                      title={<span className="list-item-text-m8__contact">Liên hệ <span style={{color: "red"}}>9090</span> để biết thêm thông tin chi tiết</span>}
                    /> 
                  </Grid>
            </Grid>
          </Grid>
          <Grid  item md={2} style={{textAlign: 'center'}}>
                    <VerticalCarouselM8 items={itemData}/>
          </Grid>
        </Grid>
      </Container>

      {/*package section */}
      {/* <Container maxWidth="lg">
        <Grid container spacing={2} id="packages" className="packages">
          <Grid item xs={12}>
            <MultiItemCarousel
              iconLeft={icons.solution.src}
              titleLeft={"Gói cước"}
              iconRight={icons.arrowRight.src}
              titleRight={"Xem tất cả"}
              maxItemSlide={4}
              linkTo={"/packages"}
              component="package"
              htmlDescription={itemsPackage.map((item,index) => (
                <PackageCardM8 item={item} detail={true} key={index} />
              ))}
            />
          </Grid>
        </Grid>
      </Container> */}
      {/*banner section */}
      <Container maxWidth="lg">
        <Grid container spacing={2} >
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
      {/* {width && <SpeedDialTooltipOpen />} */}
      <Footer></Footer>
    </>
  );
}
