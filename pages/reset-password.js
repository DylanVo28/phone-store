/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 26/07/2022
 * Author: Dinh Vo
 *******************************************************************************/

 import BreadCrumbsM8 from "../src/components/BreadCrumbsM8";
 import Navbar from "../src/components/Navbar";
 import { Box } from "@mui/material";
 import { Container } from "@mui/material";
 import { Grid } from "@mui/material";
 import Image from "next/image";
import FormSubmitM8 from "../src/components/FormSubmitM8";
import TypograPhyM8 from "../src/components/TypographyM8/TypographyM8";
import InputM8 from './../src/components/InputM8';
import ButtonBlockM8 from './../src/components/ButtonBlockM8';
import InputPasswordM8 from "../src/components/InputPasswordM8";
import ButtonGroupM8 from "../src/components/ButtonGroupM8";
import IconTickSuccess from "../src/images/tick-success.svg";
import AuthCodeInputM8 from "../src/components/AuthCodeInputM8";
import LinkM8 from "../src/components/LinkM8";
import { useResetPasswordContext } from "../src/context/ResetPasswordProvider";
import banner from '../src/images/banner-form.png'
import emailIcon from '../src/images/email-outline.svg'
import Footer from "../src/components/Footer";
const FormAuthCode = () => {
  const {handleChange,submitUsername}=useResetPasswordContext()

  return (
    <FormSubmitM8
    handleSubmit={(e)=>{
      e.preventDefault();
      handleChange("activeStep",2)
    }}
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
      
    </FormSubmitM8>
  );
};

 const FormInput=(props)=>{
  const {handleChange,submitUsername}=useResetPasswordContext()
    return  <FormSubmitM8
    handleSubmit={(e)=>{
      e.preventDefault();
      submitUsername()
    }}
    className="form-input"
  >
    <TypograPhyM8
      variant="h1"
      component="h1"
      className="title"
      style={{ textAlign: "center" }}
    >
      QUÊN MẬT KHẨU
    </TypograPhyM8>
    <TypograPhyM8
      variant="p"
      component="p"
      style={{ textAlign: "center" }}
      className={"p-14"}
    >
      Nhập số điện thoại hoặc email bạn đã đăng nhập.
Chúng tôi sẽ gửi  thông tin đặt lại mật khẩu cho bạn.
    </TypograPhyM8>
    <InputM8
      placeHolder={"Email/ SDT"}
      icon={<Image src={emailIcon.src} width={30} height={25} alt="tada"/>}
      style={{ marginTop: "15px" }}
        handleChange={(e) => handleChange("stUsername",e.target.value )}
    />
    
    <ButtonBlockM8
      type="submit"
      className="btn-submit"
      style={{ marginTop: "15px",background: "#0061AF" }}
    >
      Tiếp theo
    </ButtonBlockM8>
    
  </FormSubmitM8>
 }
 const FormResetPassword = (props) => {
  const {handleChange,submitUsername,stResetPassword,handleChangeData}=useResetPasswordContext()
    return (
      <FormSubmitM8
      handleSubmit={(e)=>{
        e.preventDefault();
        handleChange("activeStep",3)
      }}
        className={"form-password"}
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
        <InputPasswordM8
        handleChange={(e) => handleChangeData( "password",e.target.value)}
        placeHolder={"Nhập mật khẩu *"}
        validates={stResetPassword.isArrayValidPassword}
        hideValidatePassword={stResetPassword.hideValidatePassword}
        ></InputPasswordM8>
        <InputPasswordM8
        placeHolder={"Nhập lại mật khẩu"}
        handleChange={(e) => handleChangeData( "confirmPassword",e.target.value)}
        ></InputPasswordM8>
        <ButtonGroupM8>
          <ButtonBlockM8
            className="btn-cancel"
            style={{ background: "#D9D9D9", marginRight: "10px" }}
            onClick={()=>handleChange("activeStep",0)}
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
        <Box>
        <TypograPhyM8 variant="h6" component="h6" className="title f-16">
        Bạn đã tạo lại mật khẩu thành công với số
        </TypograPhyM8>
        <TypograPhyM8 variant="h6" component="h6" className="title f-16" style={{color: 'red'}}> 
        (+84) 3591617190
        </TypograPhyM8>
        </Box>
      
        <ButtonBlockM8
          className="btn-submit"
          style={{ background: "#0061AF"}}
        >
          Đăng nhập
        </ButtonBlockM8>
      </FormSubmitM8>
    );
  };
 export default function ResetPassword() {
  const {stResetPassword}=useResetPasswordContext()
   return (
     <>
      <style jsx global>
{
  `
  .bread-crumb-m8 {
    padding-top: 15px;
    padding-bottom: 15px;
  }
    .reset-password .form-input{
      min-height: 360px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0px 0px 18px rgb(0 0 0 / 15%);
    }
    .reset-password .input-m8{
      width: 100%;
      margin: 0;
    }
    .reset-password .input-m8 .input-m8__outlined-input{
      border-radius: 4px;
    }
    .reset-password .form-auth-code{
      min-height: 490px!important;
      margin: 0;
    }
    .reset-password .form-password{
      min-height: 400px!important;
    }
    .reset-password .form-submit-m8.form-success{
      min-height: 400px;
    }
  `
}
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
       <Box component="section" className="reset-password">
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
                 style={{ padding: "15px", width: '100%' }}
                 className="reser-password__right"
               >
                {stResetPassword.activeStep===0 &&   <FormInput/>}
                {stResetPassword.activeStep===1 && <FormAuthCode/>}
                {stResetPassword.activeStep===2 &&  <FormResetPassword/>}
                {stResetPassword.activeStep===3 &&   <FormSuccess/>}
               
               
               </Box>
            </Grid>
           </Grid>
         </Container>
       </Box>
       <Footer></Footer>

     </>
   );
 }
 