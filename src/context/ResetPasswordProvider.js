/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 27/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
 import { createContext, useContext, useState } from "react";
import { isSpecialString, isValidCharNumber, isValidEmail, isValidPhoneNumber, isValidStrLowerCase, isValidStrUpperCase } from "../helpers/utils";
import { useEffect } from 'react';
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
       password: "",
       confirmPassword:""
     },
     isArrayValidPassword:[{
      valid:false,
      name: "Bao gồm chữ thường"
     },
     {
      valid:false,
      name: "Bao gồm chữ hoa"
     },
     {
      valid:false,
      name: "Bao gồm ký tự đặc biệt"
     },
     {
      valid:false,
      name: "Bao gồm ít nhất sáu ký tự"
     },
     {
      valid:false,
      name: "Bao gồm số"
     }],
     hideValidatePassword:false
   });
   useEffect(()=>{
    const arrayPassword=[{
        valid:false,
        name: "Bao gồm chữ thường"
       },
       {
        valid:false,
        name: "Bao gồm chữ hoa"
       },
       {
        valid:false,
        name: "Bao gồm ký tự đặc biệt"
       },
       {
        valid:false,
        name: "Bao gồm ít nhất sáu ký tự"
       },
       {
        valid:false,
        name: "Bao gồm số"
       }]
    let hideValidate=true
    
      const  password=stResetPassword.type.key===types[0].key?stResetPassword.stEmail.password:stResetPassword.stOTP.password
    if(isValidStrUpperCase(password)){
        arrayPassword[1].valid=true
    }
    if(isValidStrLowerCase(password)){
        arrayPassword[0].valid=true
    }
    if(isSpecialString(password)){
        arrayPassword[2].valid=true

    }
    if(password.length>=6){
        arrayPassword[3].valid=true
    }
    if(isValidCharNumber(password)){
        arrayPassword[4].valid=true
    }
    arrayPassword.map(item=>{
        if(!item.valid){
            hideValidate=false
        }
    })
 
    setStResetPassword(stResetPassword=>({...stResetPassword,isArrayValidPassword:arrayPassword,hideValidatePassword:hideValidate}))
},[stResetPassword.stOTP.password,stResetPassword.stEmail.password])
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
           password: "",
           confirmPassword:""
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
           ...stResetPassword.stOTP,
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
                password: "",
                confirmPassword:""
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
              password: "",
              confirmPassword:""
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
 