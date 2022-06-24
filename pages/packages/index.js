import { Container } from "@mui/material";
import List from "@mui/material/List";
import ItemCheckBox from "../../src/components/ItemCheckbox";
import Navbar from "./../../src/components/Navbar";
import { Grid } from "@mui/material";
import ImgMediaCard from './../../src/components/ImgMediaCard';
import ItemButton from "../../src/components/ItemButton";
import Footer from './../../src/components/Footer';
import SpeedDialTooltipOpen from './../../src/components/SpeedDialTooltipOpen';
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
              {items.map((item) => (
                <ItemCheckBox title={item} />
              ))}
            </List>
            </Grid>
            <Grid item xs={12}>
            <h4>Loại gói cước</h4>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {items.map((item) => (
                <ItemCheckBox title={item} />
              ))}
            </List>
          </Grid>
          <Grid item xs={12}>
            <h4>Loại gói cước</h4>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {items.map((item) => (
                <ItemCheckBox title={item} />
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
            </div>
            </Grid>
          <Grid container spacing={2} >
          {images.slice(0, 5).map((image) => (
                <Grid item xs={12} sm={4}><ImgMediaCard
                image={image}
                isCart={true}
                isdiscount={true}
                discountValue={3000000}
              /></Grid>
              
            ))}
          </Grid>
           


          </Grid>
          <Grid item xs={12} >
         
          </Grid>
        </Grid>
      
       
      </Container>
      <SpeedDialTooltipOpen/>
      <Footer></Footer>
    </>
  );
};

export default index;
