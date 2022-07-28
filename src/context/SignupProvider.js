/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 25/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
 import { createContext, useContext, useState } from "react";
import { useEffect } from 'react';
import { isValidCharNumber, isValidStrLowerCase, isValidStrUpperCase,isSpecialString  } from "../helpers/utils";
import DoneIcon from '@mui/icons-material/Done';
 const Context = createContext();
 const signUpTypes=[
    {
        key:'SIGNUP_PHONE',
        text: "Đăng ký bằng số điện thoại"
    },
    {
        key:'SIGNUP_EMAIL',
        text:"Đăng ký bằng email"
    }
 ]
 const steps=[
    {
        key: 1,
        text: "Xác minh số điện thoại",
        activeStep:0
    },{
        key: 2,
        text: "Tạo mật khẩu",
        activeStep:1
    },
    {
        key:3,
        text:"hoàn thành",
        activeStep: 2
    }

 ]
 export function SignupProvider({ children }) {
    const [stSignupPhone,setStSignupPhone]=useState({
        type: signUpTypes[0],
        isStep:steps[0],
        activeStep:-1,
        stPhone:{
            phoneNumber: "",
            codeValidator: "",
            password:"",
            confirmPassword:"",
        },
       stEmail:{
            email:"",
            password:"",
            confirmPassword:"",
       }
    })
  
    const [stPhoneNumber,setStPhoneNumber]=useState("")
    const [stAuthCode,setStAuthCode]=useState("")

    // useEffect(()=>{
    //     if(!isValidStrUpperCase(stSignupPhone.password)){
    //         console.log("phai co chu hoa")
    //     }
    //     if(!isValidStrLowerCase(stSignupPhone.password)){
    //         console.log("Phai co chu thuong")
    //     }
    //     if(!isSpecialString(stSignupPhone.password)){
    //         console.log("Phai có ky tu dac biet")
    //     }
    //     if(stSignupPhone.password<6){
    //         console.log("It nhaat phai co 6 ky tu")
    //     }
    //     if(!isValidCharNumber(stSignupPhone.password)){
    //         console.log("Bao gom so")
    //     }
    // },[stSignupPhone.password])
    const handleChangeSelect=(value,name)=>{
        if(value.key===signUpTypes[0].key){
            setStSignupPhone({...stSignupPhone,
                stEmail:{
                    email:"",
                    password:"",
                    confirmPassword:"",
               },
                [name]:value
            })
        }
        else{
            setStSignupPhone({...stSignupPhone,
                
               stPhone:{
                phoneNumber: "",
                codeValidator: "",
                password:"",
                confirmPassword:"",
            },
                [name]:value
            })
        }
       
    }

    const handleChange=(value,name)=>{
        if(stSignupPhone.type.key===signUpTypes[0].key){
            setStSignupPhone({...stSignupPhone,
                stPhone:{
                    ...stSignupPhone.stPhone,
                    [name]:value
                }
            })
        }
        else{
            setStSignupPhone({...stSignupPhone,
                stEmail:{
                    ...stSignupPhone.stEmail,
                    [name]:value
                }
            })
        }
    }
    const changeStepActive=(name,value)=>{
        setStSignupPhone({...stSignupPhone,[name]:value})
    }
    const handleChangeCodeValidator=(value)=>{
        setStSignupPhone({...stSignupPhone,
            stPhone:{
                ...stSignupPhone.stPhone,
                ["codeValidator"]:value
            }
           })
    }
  
   return (
     <Context.Provider value={{stSignupPhone,setStSignupPhone,signUpTypes,handleChange,steps,handleChangeCodeValidator,
        stPhoneNumber,setStPhoneNumber,handleChangeSelect,changeStepActive}}>{children}</Context.Provider>
   );
 }
 
 export function useSignUpcontext() {
   return useContext(Context);
 }