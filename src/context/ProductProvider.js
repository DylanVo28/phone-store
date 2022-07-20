import { createContext, useContext, useState,useEffect } from "react";
import MobiService from "../../actions/MobiService";

const Context = createContext();

export function ProductProvider({ children }) {
  const [stFilter,setStFilter]=useState({})
  const [stDevices,setStDevices]=useState([])
  const [stFilterProduct,setStFilterProduct]=useState({
    brand:0,
    os:0,
    type:0,
    storage:0,
    price:{
      min:0,
      max:100000000
    }
  })
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await MobiService.getDevicesFilter(stFilterProduct['type'],stFilterProduct['storage'],stFilterProduct['brand'],
      stFilterProduct['os'],stFilterProduct['price'].min,stFilterProduct['price'].max)
      if(res){
        setStDevices(res['data'])
      }
    }
    fetchData()
  },[stFilterProduct])
 const handleChangeFilter=(id,name)=>{
    setStFilterProduct({...stFilterProduct,[name]:id})
 }
 const handleChangeChecked=(id,name,checked)=>{
  if(!checked){
    setStFilterProduct({...stFilterProduct,[name]:id})
  }
  else{
    setStFilterProduct({...stFilterProduct,[name]:0})
  }
 }

 
  return (
    <Context.Provider value={{setStFilter,stFilter,stDevices,setStDevices,handleChangeFilter,stFilterProduct,handleChangeChecked}}>{children}</Context.Provider>
  );
}

export function useProductContext() {
  return useContext(Context);
}