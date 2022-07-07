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
import MultiItemCarousel from "../../src/components/Simple";
import icons from "../../src/images/icons";
import PackageCardM8 from "../../src/components/PackageCardM8";
import BreadCrumbsM8 from './../../src/components/BreadCrumbsM8';

const backgroundImage =
  "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/285412229_562998832205409_2099875105150622222_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7TyPYlJ_itoAX-cXw4U&_nc_ht=scontent.fsgn3-1.fna&oh=03_AVJX0V-PkgSE9SJDX0_e04cTxkogOX1BVeuGywhh4hiIog&oe=62D7CC26";
const items = [
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      " which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
];

const itemsPackage = [
  {
    id:1,
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
 
  },
  {
    id:2,
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
   
  },
  {
    id:3,
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
  },
  {
    id:4,
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
   
  },
  {
    id:5,
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    
  },
  {
    id:6,
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    
  },
  {
    id:7,
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    
  },
];

export default function PackageDetail() {
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);
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

  return (
    <>
    <style jsx global>
      {
        `
        .package-title{
          padding: 0;
          border-radius: 15px;
          border-radius: 12px;
          border: 1px solid #00000033;
          padding: 15px 0;
          margin-top: 15px;
        }
        .package-title .title{
          margin: 0;
        }
        .package-detail{
          padding: 20px 0;
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
        <Grid container spacing={2}>
          <Grid item md={12} className={"package-title"}>
            <h1 className="title">Gói cước</h1>
            <BreadCrumbsM8/>
          </Grid>
        </Grid>
      </Container>
      {/*package section*/}
      <Container maxWidth="lg" className="package-detail">
        <Grid container spacing={2}>
          <Grid item md={10}>
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
                    <ListItemTextM8 iconTitle={<img src={iconDiscount.src} className="list-item-text-m8__icon"/>}
                      title={"Ưu đãi"}
                      iconItem={<span>-</span>}
                      items={["Tặng 3GB data tốc độ cao","Tặng 3GB data tốc độ cao"]}
                    />
                    <ListItemTextM8 iconTitle={<img src={iconDiscount.src}/>}
                      title={"Lưu ý"}
                      items={["Gói cước chỉ hỗ trợ thuê bao sử dụng điện thoại truy cập vào ứng dụng/trình duyệt truy cập trực tiếp vào các trang, ứng dụng di động củ"]}
                    />
                     <ListItemTextM8 iconTitle={<img src={iconDiscount.src}/>}
                      title={<span className="list-item-text-m8__contact">Liên hệ <span style={{color: "red"}}>9090</span> để biết thêm thông tin chi tiết</span>}
                    /> 
                  </Grid>
            </Grid>
          </Grid>
          <Grid item md={2}>
         
          </Grid>
        </Grid>
      </Container>

      {/*package section */}
      <Container maxWidth="lg">
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
