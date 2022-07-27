/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 27/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
 import { createContext, useContext, useState } from "react";
import { isValidEmail, isValidPhoneNumber } from "../helpers/utils";
 const Context = createContext();
 const types = [
   {
     key: "RESET_EMAIL",
   },
   {
     key: "RESET_OTP",
   },
 ];
 export function ResetPasswordProvider({ children }) {
   const [stResetPassword, setStResetPassword] = useState({
     type: {},
     activeStep:0,
     stUsername:"",
     stEmail: {
       userName: "",
       password: "",
       confirmPassword:""
     },
     stOTP: {
       phoneNumber: "",
       authCode: "",
     },
   });
   const handleChange=(name,value)=>{
    setStResetPassword({...stResetPassword,[name]:value})
   }
   const handleChangeType = (value) => {
     if (value.key === types[0].key) {
        setStResetPassword({
         ...stResetPassword,
         stOTP: {
           phoneNumber: "",
           authCode: "",
         },
         ["type"]: value,
       });
     } else {
        setStResetPassword({
         ...stResetPassword,
         stEmail: {
           userName: "",
           password: "",
           confirmPassword:""
         },
         ["type"]: value,
       });
     }
   };
   const handleChangeData = (name, value) => {
     if (stResetPassword.type.key === types[0].key) {
        setStResetPassword({
         ...stResetPassword,
         stEmail: {
           ...stResetPassword.stEmail,
           [name]: value,
         },
       });
     } else {
        setStResetPassword({
         ...stResetPassword,
         stOTP: {
           ...stSignIn.stOTP,
           [name]: value,
         },
       });
     }
   };

   const submitUsername=()=>{
    if(isValidEmail(stResetPassword.stUsername)){
        setStResetPassword({...stResetPassword,
            type: types[0],
            activeStep:2,
            stEmail:{
                ...stResetPassword.stEmail,
                userName: stResetPassword.stUsername
            },
            stOTP:{
                phoneNumber: "",
                authCode: "",
            }
        })
    }
    else if(isValidPhoneNumber(stResetPassword.stUsername)){
        setStResetPassword({...stResetPassword,
            type: types[1],
            activeStep:1,
            stOTP:{
                ...stResetPassword.stOTP,
                phoneNumber: stResetPassword.stUsername
            },
            stEmail: {
                userName: "",
                password: "",
                confirmPassword:""
            }
        })
    }
    else{
        setStResetPassword({...stResetPassword,
            type: {},
            activeStep:0,
            
            stEmail: {
              userName: "",
              password: "",
              confirmPassword:""
            },
            stOTP: {
              phoneNumber: "",
              authCode: "",
            },
        })
    }
   
   }
   return (
     <Context.Provider
       value={{ types, stResetPassword, setStResetPassword, handleChangeType, handleChangeData,handleChange,submitUsername }}
     >
       {children}
     </Context.Provider>
   );
 }
 export function useResetPasswordContext() {
   return useContext(Context);
 }
 