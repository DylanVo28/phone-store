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
 import IconTickSuccess from "../src/images/tick-success.svg";
 import { useSignUpcontext } from "../src/context/SignupProvider";
 
 const SelectTypeSignUp = (props) => {
   const {
     stSignupPhone,
     handleChange,
     handleChangeSelect
   } = useSignUpcontext();
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
         style={{ display: "flex", justifyContent: "space-around" }}
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
             <Typography component="span" variant="span">
               {item.text}
             </Typography>
           </CheckboxM8>
         ))}
       </Box>
     </>
   );
 };
 const FormSignUp = (props) => {
   const {
     handleChange,
     signUpTypes,
     stSignupPhone,
     changeStepActive
   } = useSignUpcontext();
   return (
     <FormSubmitM8
       handleSubmit={(e) => changeStepActive("activeStep",props.activeStep)}
       className="form-signup"
     >
       <InputM8
         placeHolder={props.placeHolder}
         icon={props.icon}
         style={{ marginTop: "15px" }}
         handleChange={(e) => handleChange(e.target.value, (stSignupPhone.type.key === signUpTypes[0].key)?"phoneNumber":"email")}
       />
       <ButtonBlockM8
         type="submit"
         className="btn-submit"
         style={{ marginTop: "15px" }}
       >
         Tiếp theo
       </ButtonBlockM8>
       <TypograPhyM8 component={"p"} variant={"p"} style={{ marginTop: "15px" }}>
         Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
         <span style={{ color: "red" }}>Chính sách riêng tư</span>
       </TypograPhyM8>
       <TypograPhyM8 component={"p"} variant={"p"} style={{ marginTop: "15px" }}>
         Bạn đã có tài khoản? Bạn muốn
         <span style={{ color: "blue" }}>Đăng nhập</span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 const FormAuthCode = () => {
   const { handleChange, handleChangeCodeValidator,changeStepActive } = useSignUpcontext();
   return (
     <FormSubmitM8
       handleSubmit={(e) => changeStepActive("activeStep",1)}
       className="form-auth-code"
     >
       <TypograPhyM8 variant="h5" component="h5" className="title">
         Đăng ký tài khoản
       </TypograPhyM8>
       <TypograPhyM8 component={"p"} variant={"p"}>
         Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
         <span style={{ color: "red" }}>Chính sách riêng tư</span>
       </TypograPhyM8>
       <AuthCodeInputM8 handleChange={handleChangeCodeValidator} />
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
 const FormPassword = (props) => {
   const { stSignupPhone, handleChange, handleChangeCodeValidator,changeStepActive } =
     useSignUpcontext();
   return (
     <FormSubmitM8
       handleSubmit={(e) => changeStepActive("activeStep",2)}
       className={"form-password"}
     >
       <TypograPhyM8 variant="h5" component="h5" className="title">
         Đăng ký tài khoản
       </TypograPhyM8>
       <TypograPhyM8 component={"p"} variant={"p"}>
         Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
         <span style={{ color: "red" }}>Chính sách riêng tư</span>
       </TypograPhyM8>
       <InputPasswordM8
         value={stSignupPhone.password}
         handleChange={(e) => handleChange(e.target.value, "password")}
       ></InputPasswordM8>
       <InputPasswordM8
         value={stSignupPhone.confirmPassword}
         handleChange={(e) => handleChange(e.target.value, "confirmPassword")}
       ></InputPasswordM8>
       <ButtonGroupM8>
         <ButtonBlockM8
           className="btn-submit"
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
       <TypograPhyM8 component={"p"} variant={"p"}>
         Bằng việc Đăng kí, bạn đã đồng ý với Mobifone và{" "}
         <span style={{ color: "red" }}>Chính sách riêng tư</span>
       </TypograPhyM8>
     </FormSubmitM8>
   );
 };
 const FormSuccess = () => {
   return (
     <FormSubmitM8 className={"form-success"}>
       <TypograPhyM8 variant="h5" component="h5" className="title">
         Đăng ký tài khoản
       </TypograPhyM8>
       <Image
         width={64}
         height={64}
         src={IconTickSuccess.src}
         alt={"tick success"}
       />
       <TypograPhyM8 variant="p" component="p" className="title">
         Tạo thành công
       </TypograPhyM8>
       <ButtonBlockM8
         className="btn-submit"
         style={{ background: "#0061AF", marginLeft: "10px" }}
       >
         Đăng nhập
       </ButtonBlockM8>
     </FormSubmitM8>
   );
 };
 export default function SignUp() {
   const {
     stSignupPhone,
     signUpTypes,
     handleChange,
     steps,
     changeStepActive
   } = useSignUpcontext();
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
           }
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
             <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
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
                         aria-label="toggle password visibility"
                         edge="end"
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
                         ? changeStepActive("activeStep",0)
                         : changeStepActive( "activeStep",-1)
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
 