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
 
const FormAuthCode = () => {
    return (
      <FormSubmitM8
        // handleSubmit={(e) => changeStepActive("activeStep",1)}
        className="form-auth-code"
      >
        <TypograPhyM8 variant="h5" component="h5" className="title">
          Đăng ký tài khoản
        </TypograPhyM8>
        <TypograPhyM8 component={"p"} variant={"p"}>
          Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
          <span style={{ color: "red" }}>Chính sách riêng tư</span>
        </TypograPhyM8>
        <AuthCodeInputM8 
        // handleChange={handleChangeCodeValidator}
         />
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
        <TypograPhyM8 component={"p"} variant={"p"}>
          Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
          <span style={{ color: "red" }}>Chính sách riêng tư</span>
        </TypograPhyM8>
      </FormSubmitM8>
    );
  };

 const FormSignIn = (props) => {
    const {stSignIn, setStSignIn, handleChangeType, handleChangeData,handleChange, types}=useSignInContext()

   return (
     <FormSubmitM8
       handleSubmit={props.handleSubmit}
       className="form-signup"
     >
       <TypograPhyM8
         variant="h1"
         component="h1"
         className="title"
         style={{ textAlign: "center" }}
       >
         Đăng ký tài khoản
       </TypograPhyM8>
       <InputM8
         placeHolder={props.placeHolder}
         icon={props.icon}
         style={{ marginTop: "15px" }}
         //   handleChange={(e) => handleChange(e.target.value, (stSignupPhone.type.key === signUpTypes[0].key)?"phoneNumber":"email")}
       />
       <InputPasswordM8
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
       <LinkM8 href={"/quenmatkhau"} title={"quên mật khẩu"} />
       <Box component="div" style={{position: 'relative',marginTop: '2vw'}}>
        <hr style={{position:'absolute',width: '100%'}}></hr>
        <TypograPhyM8 component={"p"} className="sign-in__text">Hoặc đăng nhập qua</TypograPhyM8>
       </Box>
       <ButtonGroupM8 className="sign-in__btn-items">
         <ButtonBlockM8 className="sign-in__btn-item" onClick={()=>handleChangeType(types[1])}>
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={cart.src} width={30} height={30} alt="cart" />}
             title={"san pham"}
           />
         </ButtonBlockM8>
         <ButtonBlockM8 className="sign-in__btn-item">
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={cart.src} width={30} height={30} alt="cart" />}
             title={"san pham"}
           />
         </ButtonBlockM8>
         <ButtonBlockM8 className="sign-in__btn-item">
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={cart.src} width={30} height={30} alt="cart" />}
             title={"san pham"}
           />
         </ButtonBlockM8>
       </ButtonGroupM8>
       <TypograPhyM8 component={"p"} variant={"p"}>
         Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
         <span style={{ color: "red" }}>Chính sách riêng tư</span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 const FormSignInOTP = (props) => {
    const {stSignIn, setStSignIn, handleChangeType, handleChangeData,handleChange, types}=useSignInContext()

   return (
     <FormSubmitM8
       handleSubmit={props.handleSubmit}
       className="form-signup"
     >
       <TypograPhyM8
         variant="h1"
         component="h1"
         className="title"
         style={{ textAlign: "center" }}
       >
         Đăng ký tài khoản
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
       <Box component="div" style={{position: 'relative',marginTop: '2vw'}}>
        <hr style={{position:'absolute',width: '100%'}}></hr>
        <TypograPhyM8 component={"p"} className="sign-in__text">Hoặc đăng nhập qua</TypograPhyM8>
       </Box>
       <ButtonGroupM8 className="sign-in__btn-items">
         <ButtonBlockM8 className="sign-in__btn-item" onClick={()=>handleChangeType(types[0])}>
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={cart.src} width={30} height={30} alt="cart" />}
             title={"san pham"}
           />
         </ButtonBlockM8>
         <ButtonBlockM8 className="sign-in__btn-item">
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={cart.src} width={30} height={30} alt="cart" />}
             title={"san pham"}
           />
         </ButtonBlockM8>
         <ButtonBlockM8 className="sign-in__btn-item">
           <IconTitle
             variant="p"
             component="h6"
             className={
               "display--flex align-items--center justify-content--center"
             }
             icon={<Image src={cart.src} width={30} height={30} alt="cart" />}
             title={"san pham"}
           />
         </ButtonBlockM8>
       </ButtonGroupM8>
       <TypograPhyM8 component={"p"} variant={"p"}>
         Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
         <span style={{ color: "red" }}>Chính sách riêng tư</span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 export default function SignIn() {
    const {stSignIn, setStSignIn, handleChangeType, handleChangeData,handleChange}=useSignInContext()
   return (
     <>
     <style jsx global> {

        `
        .sign-in .sign-in__text.text-mobi-8{
            position: absolute;
            left: 30%;
            background: white;
            padding: 0 10%;
        }
        .sign-in .link-mb-8{
            margin-top: 10px;
            text-transform: capitalize;
        }
        .sign-in .icon-title__title{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.0015em;
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
            max-width: 160px;
            border: 1px solid #CBCBCB;
            border-radius: 4px;
            padding: 10px 0;
        }
        .sign-in .sign-in__btn-items .MuiButtonGroup-root{
            display: flex;
            justify-content: space-between;
        }
        `
     }</style>
       <Navbar />
       <div style={{ height: "120px" }}></div>
       <BreadCrumbsM8 />
       <Box component="section" className="sign-in">
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
             <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
               <Box
                 component="div"
                 style={{ padding: "15px", width: '100%' }}
                 className="sign-in__right"
               >
                 {(stSignIn.activeStep===0 && stSignIn.type.key==='SIGNIN_EMAIL_PHONENUMBER')&& <FormSignIn
                
                   icon={
                     <LocalPhoneOutlinedIcon
                       aria-label="toggle password visibility"
                       edge="end"
                     >
                       {<Visibility />}
                     </LocalPhoneOutlinedIcon>
                   }
                 />}
                 {
                    (stSignIn.activeStep===0 && stSignIn.type.key==='SIGNIN_OTP')  && <FormSignInOTP 
                    handleSubmit={(e) => handleChange("activeStep",1)}
                    />
                 }
                 { (stSignIn.activeStep===1 && stSignIn.type.key==='SIGNIN_OTP') && <FormAuthCode/>}
               </Box>
             </Grid>
           </Grid>
         </Container>
       </Box>
       <Footer></Footer>
     </>
   );
 }
 