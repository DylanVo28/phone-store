import { Container } from "@mui/material";
import List from "@mui/material/List";
import ItemCheckBox from "../../src/components/ItemCheckbox";
import Navbar from "./../../src/components/Navbar";
import { Grid } from "@mui/material";
import ImgMediaCard from './../../src/components/ImgMediaCard';
import ItemButton from "../../src/components/ItemButton";
import Footer from './../../src/components/Footer';
import SpeedDialTooltipOpen from './../../src/components/SpeedDialTooltipOpen';
import ButtonM8 from "../../src/components/ButtonM8/Button";
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
  
const index = () => {
  return (
    <>
      <Navbar />
      <div style={{
        background: "url('https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
    width:100 +"%",
    height: 25+"vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",}}>
       
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={2} >
          <Grid item xs={12} sm={3}>
          <Grid item xs={12}  >
            <h4>Loại gói cước</h4>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {items.map((item,index) => (
                <ItemCheckBox title={item} key={index} />
              ))}
            </List>
            </Grid>
            <Grid item xs={12}>
            <h4>Loại gói cước</h4>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {items.map((item,index) => (
                <ItemCheckBox title={item} key={index}/>
              ))}
            </List>
          </Grid>
          <Grid item xs={12}>
            <h4>Loại gói cước</h4>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {items.map((item,index) => (
                <ItemCheckBox title={item}  key={index}/>
              ))}
            </List>
          </Grid>
          </Grid>
          <Grid item xs={12} sm={9}>
          <Grid item xs={12}>
                <div>
            <h1>Thiết bị di động</h1>
            <p>Trang chủ: <span>Danh sách thiết bị</span></p>
            <span>Lọc theo: </span>
            <ItemButton/>
            <p>Ưu tiên xem</p>
            <ButtonM8 title="Trả trước" className="btn-mobi-8 btn-package-active"></ButtonM8>
            <ButtonM8 title="Trả trước" className="btn-mobi-8"></ButtonM8>

            </div>
            </Grid>
          <Grid container spacing={2} >
          <Grid item xs={12} >
          <div>
              Ưu tiên xem {<ItemButton/>}
            </div>
         </Grid>
           
          {images.slice(0, 5).map((image,index) => (
                <Grid item xs={12} sm={4} key={index}><ImgMediaCard
                image={image}
                isCart={true}
                isdiscount={true}
                discountValue={3000000}
              /></Grid>
              
            ))}
          </Grid>
           


          </Grid>
         
        </Grid>
      
       
      </Container>
      {/* <SpeedDialTooltipOpen/> */}
      <Footer></Footer>
    </>
  );
};

export default index;
