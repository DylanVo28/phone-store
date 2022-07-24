/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
 import BreadCrumbsM8 from "../src/components/BreadCrumbsM8";
 import Navbar from "../src/components/Navbar";
 import { Box, Container, Typography } from "@mui/material";
 import { Grid } from "@mui/material";
 import Image from "next/image";
 import Footer from "../src/components/Footer";
 import CheckboxM8 from "./../src/components/CheckboxM8";
 import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
 import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
 import InputM8 from "../src/components/InputM8";
 import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
 import { Visibility } from "@mui/icons-material/Visibility";
 import FormSubmitM8 from "../src/components/FormSubmitM8";
 import ButtonM8 from "../src/components/ButtonM8/Button";
 import ButtonBlockM8 from "../src/components/ButtonBlockM8";
 import TypograPhyM8 from "../src/components/TypographyM8/TypographyM8";
 import StepperM8 from "../src/components/StepperM8";
 import InputPasswordM8 from "../src/components/InputPasswordM8";
 import AuthCodeInputM8 from "../src/components/AuthCodeInputM8";
 import ButtonGroupM8 from "../src/components/ButtonGroupM8";
 export default function SignUp() {
   return (
     <>
       <style jsx global>
         {`
       
         `}
       </style>
       <Navbar />
       <div style={{ height: "120px" }}></div>
       <BreadCrumbsM8 />
       <Box component="section" className="sign-up">
         <Container>
           <Grid container spacing={2}>
             <Grid item xs={6}>
               <div
                 style={{ width: "100%", height: "521px", position: "relative" }}
               >
                 <Image
                   alt="Mountains"
                   src="https://assets.iproup.com/cdn-cgi/image/w=880,f=webp/https://assets.iproup.com/assets/jpg/2021/09/22436.jpg"
                   layout="fill"
                   objectFit="cover"
                 />
               </div>
             </Grid>
             <Grid item xs={6}>
               <Box component="div">
                 <FormSubmitM8 className="form-signup">
                   <Box component="div" className="sign-up__right">
                     <Typography variant="h1" component="h1" className="title">
                       Đăng ký tài khoản
                     </Typography>
                   </Box>
                   <Box
                     component="div"
                     style={{ display: "flex", justifyContent: "center" }}
                   >
                     <CheckboxM8
                       icon={<CircleOutlinedIcon />}
                       checkedIcon={<RadioButtonCheckedRoundedIcon />}
                     >
                       <Typography component="span" variant="span">
                         Đăng ký bằng SDT
                       </Typography>
                     </CheckboxM8>
                     <CheckboxM8
                       icon={<CircleOutlinedIcon />}
                       checkedIcon={<RadioButtonCheckedRoundedIcon />}
                     >
                       <Typography component="span" variant="span">
                         Đăng ký bằng SDT
                       </Typography>
                     </CheckboxM8>
                   </Box>
                   <InputM8
                     placeHolder={"Nhập số điện thoại của bạn"}
                     icon={
                       <LocalPhoneOutlinedIcon
                         aria-label="toggle password visibility"
                         edge="end"
                       >
                         {<Visibility />}
                       </LocalPhoneOutlinedIcon>
                     }
                   />
                   <ButtonBlockM8 type="submit" className="btn-submit">
                     Tiếp theo
                   </ButtonBlockM8>
                 </FormSubmitM8>
                 <TypograPhyM8 component={"p"} variant={"p"}>
                   Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
                   <span style={{ color: "red" }}>Chính sách riêng tư</span>
                 </TypograPhyM8>
                 <TypograPhyM8 component={"p"} variant={"p"}>
                   Bạn đã có tài khoản? Bạn muốn
                   <span style={{ color: "blue" }}>Đăng nhập</span>
                 </TypograPhyM8>
               </Box>
               <Box component="div" style={{ padding: "15px" }}>
                 <StepperM8 steps={["hello", "ae"]} />
               </Box>
               <Box component="div" style={{ padding: "15px" }}>
                 <FormSubmitM8>
                   <TypograPhyM8 variant="h5" component="h5" className="title">
                     Đăng ký tài khoản
                   </TypograPhyM8>
                   <TypograPhyM8 component={"p"} variant={"p"}>
                     Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
                     <span style={{ color: "red" }}>Chính sách riêng tư</span>
                   </TypograPhyM8>
                   <AuthCodeInputM8 />
                   <TypograPhyM8 component={"p"} variant={"p"}>
                     Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
                     <span style={{ color: "red" }}>Chính sách riêng tư</span>
                   </TypograPhyM8>
                   <ButtonBlockM8
                     type="submit"
                     className="btn-submit"
                     style={{ background: "#0061AF" }}
                   >
                     Tiếp theo
                   </ButtonBlockM8>
                 </FormSubmitM8>
               </Box>
               <Box component="div" style={{ padding: "15px" }}>
                 <FormSubmitM8>
                   <TypograPhyM8 variant="h5" component="h5" className="title">
                     Đăng ký tài khoản
                   </TypograPhyM8>
                   <TypograPhyM8 component={"p"} variant={"p"}>
                     Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
                     <span style={{ color: "red" }}>Chính sách riêng tư</span>
                   </TypograPhyM8>
                   <InputPasswordM8></InputPasswordM8>
                   <InputPasswordM8></InputPasswordM8>
                   <ButtonGroupM8>
                     <ButtonBlockM8
                       className="btn-submit"
                       style={{ background: "#0061AF", marginRight: "10px" }}
                     >
                       Tiếp theo
                     </ButtonBlockM8>
                     <ButtonBlockM8
                       className="btn-submit"
                       style={{ background: "#0061AF", marginLeft: "10px" }}
                     >
                       Tiếp theo
                     </ButtonBlockM8>
                   </ButtonGroupM8>
                 </FormSubmitM8>
               </Box>
             </Grid>
           </Grid>
         </Container>
       </Box>
       <Footer></Footer>
     </>
   );
 }
 