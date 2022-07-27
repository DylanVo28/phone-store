/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 26/07/2022
 * Author: Dinh Vo
 *******************************************************************************/

 import Image from "next/image";
 import BreadCrumbsM8 from "../src/components/BreadCrumbsM8";
 import Navbar from "../src/components/Navbar";
 import { Grid } from "@mui/material";
 import { Container } from "@mui/material";
 import { Box } from "@mui/material";
 import Footer from "../src/components/Footer";
 import FormSubmitM8 from "../src/components/FormSubmitM8";
 import InputM8 from "../src/components/InputM8";
 import ButtonBlockM8 from "../src/components/ButtonBlockM8";
 import TypograPhyM8 from "../src/components/TypographyM8/TypographyM8";
 import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
 import { Visibility } from "@mui/icons-material/Visibility";
 import InputPasswordM8 from "../src/components/InputPasswordM8";
 import IconTitle from "../src/components/IconTitle";
 import cart from "../src/images/cart-blue.svg";
 import ButtonGroupM8 from "../src/components/ButtonGroupM8";
 import LinkM8 from "../src/components/LinkM8";
 import AuthCodeInputM8 from "../src/components/AuthCodeInputM8";
 import { useSignInContext } from "../src/context/SigninProvider";
 import banner from '../src/images/banner-form.png'
 import phone from '../src/images/icon-phone.svg'
 import fb from '../src/images/icon-facebook.png'
 import google from '../src/images/icon-google.png'
import mail from '../src/images/icon-email.png'
 const FormAuthCode = () => {
   return (
     <FormSubmitM8
       // handleSubmit={(e) => changeStepActive("activeStep",1)}
       className="form-auth-code"
     >
       <TypograPhyM8 variant="h5" component="h5" className="title">
         Vui lòng nhập mã xác minh
       </TypograPhyM8>
       <Box component="div">
         <TypograPhyM8 component={"p"} variant={"p"} className={"p-14"}>
           Mã xác minh của bạn sẽ được gửi bằng tin nhắn đến
         </TypograPhyM8>
         <TypograPhyM8 component={"h6"} variant={"h6"} className={"f-16"}>
           (+84) 359161790
         </TypograPhyM8>
       </Box>
       <AuthCodeInputM8
       // handleChange={handleChangeCodeValidator}
       />
       <TypograPhyM8 component={"p"} variant={"p"} className="p-14">
         Bạn vẫn chưa nhận được?
         <span style={{ color: "red" }}>Gửi lại </span>
       </TypograPhyM8>
       <ButtonBlockM8
         type="submit"
         className="btn-submit"
         style={{ background: "#0061AF" }}
       >
         Tiếp theo
       </ButtonBlockM8>
       <TypograPhyM8
         component={"p"}
         variant={"p"}
         style={{ marginTop: "15px" }}
         className={"p-14"}
       >
         Bạn chưa có tài khoản? Bạn có muốn
         <span>
           <LinkM8
             href={"/signup"}
             title={" Đăng ký?"}
             style={{ color: "blue" }}
             className={"sign-in__href-sign-up"}
           ></LinkM8>
         </span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 
 const FormSignIn = (props) => {
   const {
     handleChangeType,
     types,
   } = useSignInContext();
 
   return (
     <FormSubmitM8 handleSubmit={props.handleSubmit} className="form-signin">
       <TypograPhyM8
         variant="h1"
         component="h1"
         className="title"
         style={{ textAlign: "center" }}
       >
         ĐĂNG NHẬP TÀI KHOẢN
       </TypograPhyM8>
       <InputM8
         placeHolder={props.placeHolder}
         icon={props.icon}
         style={{ marginTop: "15px" }}
         //   handleChange={(e) => handleChange(e.target.value, (stSignupPhone.type.key === signUpTypes[0].key)?"phoneNumber":"email")}
       />
       <InputPasswordM8
         placeHolder={"Mật khẩu"}
         //  value={stSignupPhone.password}
         //  handleChange={(e) => handleChange(e.target.value, "password")}
       ></InputPasswordM8>
       <ButtonBlockM8
         type="submit"
         className="btn-submit"
         style={{ marginTop: "15px" }}
       >
         Tiếp theo
       </ButtonBlockM8>
       <LinkM8 href={"/reset-password"} title={"Quên mật khẩu"} />
       <Box component="div" style={{ position: "relative", marginTop: "2vw" }}>
         <hr
           style={{ position: "absolute", width: "100%", color: "#757575" }}
         ></hr>
         <TypograPhyM8
           component={"p"}
           className="sign-in__text p-14"
           style={{ color: "#757575" }}
         >
           Hoặc đăng nhập qua
         </TypograPhyM8>
       </Box>
       <ButtonGroupM8 className="sign-in__btn-items">
         <ButtonBlockM8
           className="sign-in__btn-item"
           onClick={() => handleChangeType(types[1])}
         >
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={phone.src} width={25} height={25} alt="phone" />}
             title={"OTP"}
           />
         </ButtonBlockM8>
         <ButtonBlockM8 className="sign-in__btn-item">
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={fb.src} width={25} height={25} alt="fb" />}
             title={"facebook"}
           />
         </ButtonBlockM8>
         <ButtonBlockM8 className="sign-in__btn-item">
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={google.src} width={25} height={25} alt="phone" />}
             title={"google"}
           />
         </ButtonBlockM8>
       </ButtonGroupM8>
       <TypograPhyM8
         component={"p"}
         variant={"p"}
         style={{ marginTop: "15px" }}
         className={"p-14"}
       >
         Bạn chưa có tài khoản? Bạn có muốn
         <span>
           <LinkM8
             href={"/signup"}
             title={" Đăng ký?"}
             style={{ color: "blue" }}
             className={"sign-in__href-sign-up"}
           ></LinkM8>
         </span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 const FormSignInOTP = (props) => {
   const {
     handleChangeType,
     types,
   } = useSignInContext();
 
   return (
     <FormSubmitM8 handleSubmit={props.handleSubmit} className="form-signin-otp">
       <TypograPhyM8
         variant="h1"
         component="h1"
         className="title"
         style={{ textAlign: "center" }}
       >
         ĐĂNG NHẬP TÀI KHOẢN
       </TypograPhyM8>
       <InputM8
         placeHolder={props.placeHolder}
         icon={props.icon}
         style={{ marginTop: "15px" }}
         //   handleChange={(e) => handleChange(e.target.value, (stSignupPhone.type.key === signUpTypes[0].key)?"phoneNumber":"email")}
       />
 
       <ButtonBlockM8
         type="submit"
         className="btn-submit"
         style={{ marginTop: "15px" }}
       >
         Tiếp theo
       </ButtonBlockM8>
       <Box component="div" style={{ position: "relative", marginTop: "2vw" }}>
         <hr
           style={{ position: "absolute", width: "100%", color: "#757575" }}
         ></hr>
         <TypograPhyM8
           component={"p"}
           className="sign-in__text p-14"
           style={{ color: "#757575" }}
         >
           Hoặc đăng nhập qua
         </TypograPhyM8>
       </Box>
       <ButtonGroupM8 className="sign-in__btn-items">
         <ButtonBlockM8
           className="sign-in__btn-item"
           onClick={() => handleChangeType(types[0])}
         >
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={mail.src} width={25} height={25} alt="phone" />}
             title={"Email"}
           />
         </ButtonBlockM8>
         <ButtonBlockM8 className="sign-in__btn-item">
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={fb.src} width={25} height={25} alt="fb" />}
             title={"facebook"}
           />
         </ButtonBlockM8>
         <ButtonBlockM8 className="sign-in__btn-item">
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={google.src} width={25} height={25} alt="phone" />}
             title={"google"}
           />
         </ButtonBlockM8>
       </ButtonGroupM8>
       <TypograPhyM8
         component={"p"}
         variant={"p"}
         style={{ marginTop: "15px" }}
         className={"p-14"}
       >
         Bạn chưa có tài khoản? Bạn có muốn
         <span>
           <LinkM8
             href={"/signup"}
             title={" Đăng ký?"}
             style={{ color: "blue" }}
             className={"sign-in__href-sign-up"}
           ></LinkM8>
         </span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 export default function SignIn() {
   const {
     stSignIn,
     handleChange,
   } = useSignInContext();
   return (
     <>
       <style jsx global>
         {`
         .sign-in .sign-in__href-sign-up{
             font-weight: 400;
             line-height: 14px;
             text-align: center;
             letter-spacing: 0.004em;
             text-transform: capitalize;
             text-decoration: none;
             float: none;
         }
         .sign-in .form-signin-otp{
           min-height: 350px;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
         }
         .sign-in .form-auth-code{
           min-height: 500px;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           margin: 0;
           padding-top: 30px;
           padding-bottom: 30px;
         }
         .sign-in .form-signin .input-m8,.sign-in .form-signin-otp .input-m8{
           width: 100%;
           margin: 0;
           margin-top: 15px;
         }
         .sign-in .form-signin .input-m8 .input-m8__outlined-input,.sign-in .form-signin-otp .input-m8 .input-m8__outlined-input{
           border-radius: 4px;
         }
         .sign-in .form-signin{
           min-height: 440px;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
         }
         .sign-in .sign-in__text.text-mobi-8{
             position: absolute;
             left: 25%;
             background: white;
             padding: 0 10%;
         }
         .sign-in .link-mb-8{
             margin-top: 10px;
             text-transform: inherit;
         }
         .sign-in .icon-title__title{
             font-weight: 400;
             font-size: 14px;
             line-height: 16px;
             letter-spacing: 0.0015em;
             padding-left: 5px;
         }
         .sign-in .input-password-m8{
             margin-top: 20px;
         }
         .sign-in .sign-in__btn-items{
             margin-top: 4vw;
         }
         .sign-in .sign-in__btn-items .button-block-m8{
             color: black;
             box-shadow: none;
             background: none;
          
             flex: 1;
             max-width: 130px;
             border: 1px solid #CBCBCB;
             border-radius: 4px;
             padding: 10px 0;
         }
         .sign-in .sign-in__btn-items .MuiButtonGroup-root{
             display: flex;
             justify-content: space-between;
         }
         .sign-in .input-password-m8 .MuiOutlinedInput-notchedOutline{
           display: none;
          }
          .sign-in .input-password-m8 .MuiInputBase-root{
           border: 1px solid #CBCBCB;
          }
          .bread-crumb-m8 {
            padding-top: 15px;
            padding-bottom: 15px;
          }
         `}
       </style>
       <Navbar />
       <div style={{ height: "120px" }}></div>
       <Box component="section" className="">
         <Container>
           <Grid container spacing={2}>
             <Grid item xs={12}>
               <BreadCrumbsM8 />
             </Grid>
           </Grid>
         </Container>
       </Box>
       <Box component="section" className="sign-in">
         <Container>
           <Grid container spacing={2}>
             <Grid item xs={7}>
               <div
                 style={{ width: "100%", height: "521px", position: "relative" }}
               >
                 <Image
                   alt="Mountains"
                   src={banner.src}
                   layout="fill"
                   objectFit="cover"
                 />
               </div>
             </Grid>
             <Grid item xs={5} style={{ display: "flex", alignItems: "center" }}>
               <Box
                 component="div"
                 style={{ padding: "15px", width: "100%" }}
                 className="sign-in__right"
               >
                 {stSignIn.activeStep === 0 &&
                   stSignIn.type.key === "SIGNIN_EMAIL_PHONENUMBER" && (
                     <FormSignIn
                       placeHolder={"Email/Số điện thoại"}
                       icon={
                         <LocalPhoneOutlinedIcon
                           aria-label="toggle password visibility"
                           edge="end"
                         >
                           {<Visibility />}
                         </LocalPhoneOutlinedIcon>
                       }
                     />
                   )}
                 {stSignIn.activeStep === 0 &&
                   stSignIn.type.key === "SIGNIN_OTP" && (
                     <FormSignInOTP
                       placeHolder={"Nhập số điện thoại của bạn"}
                       handleSubmit={(e) => handleChange("activeStep", 1)}
                     />
                   )}
                 {stSignIn.activeStep === 1 &&
                   stSignIn.type.key === "SIGNIN_OTP" && <FormAuthCode />}
               </Box>
             </Grid>
           </Grid>
         </Container>
       </Box>
       <Footer></Footer>
     </>
   );
 }
 