/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 26/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
 import { createContext, useContext, useState } from "react";
 const Context = createContext();
 const types = [
   {
     key: "SIGNIN_EMAIL_PHONENUMBER",
   },
   {
     key: "SIGNIN_OTP",
   },
 ];
 export function SignInProvider({ children }) {
   const [stSignIn, setStSignIn] = useState({
     type: types[0],
     activeStep:0,
     stUserName: {
       userName: "",
       password: "",
     },
     stOTP: {
       phoneNumber: "",
       authCode: "",
     },
   });
   const handleChange=(name,value)=>{
    setStSignIn({...stSignIn,[name]:value})
   }
   const handleChangeType = (value) => {
     if (value.key === types[0].key) {
       setStSignIn({
         ...stSignIn,
         stOTP: {
           phoneNumber: "",
           authCode: "",
         },
         ["type"]: value,
       });
     } else {
       setStSignIn({
         ...stSignIn,
         stUserName: {
           userName: "",
           password: "",
         },
         ["type"]: value,
       });
     }
   };
   const handleChangeData = (name, value) => {
     if (stSignIn.type.key === types[0].key) {
       setStSignIn({
         ...stSignIn,
         stUserName: {
           ...stSignIn.stUserName,
           [name]: value,
         },
       });
     } else {
       setStSignIn({
         ...stSignIn,
         stOTP: {
           ...stSignIn.stOTP,
           [name]: value,
         },
       });
     }
   };
   return (
     <Context.Provider
       value={{ types, stSignIn, setStSignIn, handleChangeType, handleChangeData,handleChange }}
     >
       {children}
     </Context.Provider>
   );
 }
 export function useSignInContext() {
   return useContext(Context);
 }
 