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
 import { Visibility } from "@mui/icons-material/Visibility";
 import FormSubmitM8 from "../src/components/FormSubmitM8";
 import ButtonM8 from "../src/components/ButtonM8/Button";
 import ButtonBlockM8 from "../src/components/ButtonBlockM8";
 import TypograPhyM8 from "../src/components/TypographyM8/TypographyM8";
 import StepperM8 from "../src/components/StepperM8";
 import InputPasswordM8 from "../src/components/InputPasswordM8";
 import AuthCodeInputM8 from "../src/components/AuthCodeInputM8";
 import ButtonGroupM8 from "../src/components/ButtonGroupM8";
 import IconTickSuccess from "../src/images/tick-success.svg";
 import { useSignUpcontext } from "../src/context/SignupProvider";
 import LinkM8 from "../src/components/LinkM8";
 import banner from '../src/images/banner-form.png'
 import iconPhoneOutline from '../src/images/icon-phone-outline.svg'
 import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
 import emailIcon from '../src/images/email-outline.svg'
 const SelectTypeSignUp = (props) => {
   const { stSignupPhone, handleChange, handleChangeSelect } =
     useSignUpcontext();
   return (
     <>
       <Box component="div">
         <Typography
           variant="h1"
           component="h1"
           className="title"
           style={{ textAlign: "center" }}
         >
           Đăng ký tài khoản
         </Typography>
       </Box>
       <Box
         component="div"
         style={{ display: "flex", justifyContent: "space-around",marginTop: '10px' }}
       >
         {props.signUpTypes.map((item) => (
           <CheckboxM8
             icon={<CircleOutlinedIcon />}
             checkedIcon={<RadioButtonCheckedRoundedIcon />}
             key={item.key}
             // defaultChecked={item === stSignupPhone.type}
             handleChange={(e) => handleChangeSelect(item, "type")}
             checked={item === stSignupPhone.type}
           >
             <Typography component="span" variant="span" style={{fontSize: '14px'}}>
               {item.text}
             </Typography>
           </CheckboxM8>
         ))}
       </Box>
     </>
   );
 };
 const FormSignUp = (props) => {
   const { handleChange, signUpTypes, stSignupPhone, changeStepActive } =
     useSignUpcontext();
   return (
     <FormSubmitM8
       handleSubmit={(e) => changeStepActive("activeStep", props.activeStep)}
       className="form-signup"
     >
       <InputM8
         placeHolder={props.placeHolder}
         icon={<Image src={ stSignupPhone.type.key === signUpTypes[0].key ?iconPhoneOutline.src:emailIcon.src} width={30} height={30} alt={"iconphone"}/>}
         handleChange={(e) =>
           handleChange(
             e.target.value,
             stSignupPhone.type.key === signUpTypes[0].key
               ? "phoneNumber"
               : "email"
           )
         }
         style={{marginTop: '10px'}}
       />
       <ButtonBlockM8
         type="submit"
         className="btn-submit"
         style={{ marginTop: "24px" }}
       >
         Tiếp theo
       </ButtonBlockM8>
       <Box component="div">
       <TypograPhyM8
         component={"p"}
         variant={"p"}
         style={{ marginTop: "32px" }}
         className={"p-14"}
       >
         Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
       </TypograPhyM8>
       <TypograPhyM8
         component={"p"}
         variant={"p"}
         style={{ color:"red" }}
         className={"p-14"}
       >Chính sách riêng tư
        </TypograPhyM8>
       </Box>
       
       <TypograPhyM8
         component={"p"}
         variant={"p"}
         style={{ marginTop: "24px" }}
         className={"p-14"}
       >
         Bạn đã có tài khoản? Bạn muốn
         <span>
           <LinkM8
             href={"/signin"}
             title={" Đăng nhập"}
             style={{ color: "blue" }}
             className={"sign-up__href-sign-in"}
           ></LinkM8>
         </span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 const FormAuthCode = () => {
   const { handleChange, handleChangeCodeValidator, changeStepActive } =
     useSignUpcontext();
   return (
     <FormSubmitM8
       handleSubmit={(e) => changeStepActive("activeStep", 1)}
       className="form-auth-code"
     >
       <TypograPhyM8 variant="h5" component="h5" className="title">
         Vui lòng nhập mã xác minh
       </TypograPhyM8>
       <Box component="div">
         <TypograPhyM8 component={"p"} variant={"p"} className={"p-14"}>
           Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
         </TypograPhyM8>
         <TypograPhyM8 component={"h6"} variant={"h6"} className={"f-16"}>
           +84 378344936
         </TypograPhyM8>
       </Box>
 
       <AuthCodeInputM8 handleChange={handleChangeCodeValidator} />
       <TypograPhyM8
         component={"p"}
         variant={"p"}
         className="p-14"
         style={{ color: "#A2A2A2" }}
       >
         Nếu chưa nhận được, vui lòng chờ trong 60 giây để gửi lại.
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
         Bạn đã có tài khoản? Bạn muốn
         <span>
           <LinkM8
             href={"/signin"}
             title={" Đăng nhập"}
             style={{ color: "blue" }}
             className={"sign-up__href-sign-in"}
           ></LinkM8>
         </span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 const FormPassword = (props) => {
   const {
     stSignupPhone,
     handleChange,
     handleChangeCodeValidator,
     changeStepActive,
   } = useSignUpcontext();
   return (
     <FormSubmitM8
       handleSubmit={(e) => changeStepActive("activeStep", 2)}
       className={"form-password"}
     >
       <TypograPhyM8 variant="h5" component="h5" className="title">
         Thiết lập mật khẩu
       </TypograPhyM8>
       <TypograPhyM8 component={"p"} variant={"p"} className={"p-14"}>
         Thiết lập mật khẩu để hoàn tất việc đăng ký
       </TypograPhyM8>
       <InputPasswordM8
         value={stSignupPhone.password}
         handleChange={(e) => handleChange(e.target.value, "password")}
         placeHolder={"Nhập mật khẩu *"}
       ></InputPasswordM8>
       <InputPasswordM8
         value={stSignupPhone.confirmPassword}
         handleChange={(e) => handleChange(e.target.value, "confirmPassword")}
         placeHolder={"Nhập lại mật khẩu *"}
       ></InputPasswordM8>
       <ButtonGroupM8>
         <ButtonBlockM8
           className="btn-cancel"
           style={{ background: "#D9D9D9", marginRight: "10px" }}
           onClick={props.back}
         >
           Quay lại
         </ButtonBlockM8>
         <ButtonBlockM8
           type="submit"
           className="btn-submit"
           style={{ background: "#0061AF", marginLeft: "10px" }}
         >
           Tiếp theo
         </ButtonBlockM8>
       </ButtonGroupM8>
       <TypograPhyM8
         component={"p"}
         variant={"p"}
         style={{ marginTop: "15px" }}
         className={"p-14"}
       >
         Bạn đã có tài khoản? Bạn muốn
         <span>
           <LinkM8
             href={"/signin"}
             title={" Đăng nhập"}
             style={{ color: "blue" }}
             className={"sign-up__href-sign-in"}
           ></LinkM8>
         </span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 const FormSuccess = () => {
   return (
     <FormSubmitM8 className={"form-success"}>
       <TypograPhyM8 variant="h5" component="h5" className="title">
         Đăng ký thành công
       </TypograPhyM8>
       <Image
         width={64}
         height={64}
         src={IconTickSuccess.src}
         alt={"tick success"}
       />
       <Box component={"div"}>
         <TypograPhyM8 variant="h6" component="h6" className="f-16" style={{textTransform: 'inherit'}}>
           Bạn đã tạo thành công tài khoản Mobifone với số
         </TypograPhyM8>
         <TypograPhyM8
           variant="h6"
           component="h6"
           className="f-16"
           style={{ color: "red" }}
         >
           (+84) 359161790
         </TypograPhyM8>
       </Box>
       <ButtonBlockM8
         className="btn-submit"
         style={{ background: "#0061AF" }}
       >
         Đăng nhập
       </ButtonBlockM8>
     </FormSubmitM8>
   );
 };
 export default function SignUp() {
   const { stSignupPhone, signUpTypes, handleChange, steps, changeStepActive } =
     useSignUpcontext();
   var TO_later;
   function delayedCall(fn, delay) {
     clearTimeout(TO_later);
     TO_later = setTimeout(
       (function (Vfn) {
         return function () {
           Vfn();
         };
       })(fn),
       delay
     );
   }
 
   return (
     <>
       <style jsx global>
         {`
            .sign-up__right{
              width: 100%;
              padding: 15px;
             min-height: 328px;
             display: flex;
             flex-direction: column;
             justify-content: space-between;
            }
         
            .sign-up .sign-up__href-sign-in{
             font-weight: 400;
             line-height: 14px;
             text-align: center;
             letter-spacing: 0.004em;
             text-transform: capitalize;
             text-decoration: none;
             float: none;
            }
            .sign-up .form-auth-code{
             min-height: 400px!important;
            }
            .sign-up .form-password{
             min-height: 400px!important;
            }
            .sign-up .input-password-m8 .MuiOutlinedInput-notchedOutline{
             display: none;
            }
            .sign-up .input-password-m8 .MuiInputBase-root{
             border: 1px solid #CBCBCB;
            }
            .sign-up .form-success{
             min-height: 400px!important;
            }
            .sign-up .sign-up__right .checkbox-m8 .Mui-checked{
             color: #F1B821;
            }
            .bread-crumb-m8 {
              padding-top: 15px;
              padding-bottom: 15px;
            }
            .sign-up .input-password-m8 .MuiOutlinedInput-input{
              padding: 12.5px 14px;
            }
            .sign-up .sign-up__right 
             `}
       </style>
       <Navbar />
       <div style={{ height: "120px" }}></div>
       <Box component="section">
         <Container>
           <Grid container spacing={2}>
             <Grid item xs={12}>
               <BreadCrumbsM8 />
             </Grid>
           </Grid>
         </Container>
       </Box>
       <Box component="section" className="sign-up">
         <Container>
           <Grid container spacing={2}>
             <Grid item xs={7}>
               <div
                 style={{ width: "100%", height: "521px", position: "relative",marginTop:'30px' }}
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
                 style={{ padding: "15px" }}
                 className="sign-up__right"
               >
                 {stSignupPhone.activeStep === -1 && (
                   <SelectTypeSignUp signUpTypes={signUpTypes} />
                 )}
                 {stSignupPhone.activeStep === -1 && (
                   <FormSignUp
                     activeStep={
                       stSignupPhone.type.key === signUpTypes[0].key ? 0 : 1
                     }
                     placeHolder={
                       stSignupPhone.type.key === signUpTypes[0].key
                         ? "Nhập sdt của bạn"
                         : "Nhập email của bạn"
                     }
                     icon={
                       <LocalPhoneOutlinedIcon
                         alt={"icon phone outline"}
                       >
                         {<Visibility />}
                       </LocalPhoneOutlinedIcon>
                     }
                   />
                 )}
                 {stSignupPhone.activeStep !== -1 && (
                   <StepperM8
                   
                     activeStep={stSignupPhone.activeStep}
                     steps={steps}
                   />
                 )}
                 {stSignupPhone.activeStep === 0 &&
                   stSignupPhone.type.key === signUpTypes[0].key && (
                     <FormAuthCode />
                   )}
                 {stSignupPhone.activeStep === 1 && (
                   <FormPassword
                     back={() =>
                       stSignupPhone.type.key === signUpTypes[0].key
                         ? changeStepActive("activeStep", 0)
                         : changeStepActive("activeStep", -1)
                     }
                   />
                 )}
                 {stSignupPhone.activeStep === 2 && <FormSuccess />}
               </Box>
             </Grid>
           </Grid>
         </Container>
       </Box>
       <Footer></Footer>
     </>
   );
 }
 