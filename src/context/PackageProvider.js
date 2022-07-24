/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import { createContext, useContext, useState,useEffect } from "react";
import MobiService from "../../actions/MobiService";
import content from "../../public/locales/content";
import { useRouter } from 'next/router';

const Context = createContext();

export function PackageProvider({ children }) {
  const {locale}=useRouter()
  const [stPackages,setStPackages]=useState([])
  const [stFilterPrice,setStFilterPrice]=useState({
    min:0,
    max:100000000
  });
  const [stFilter,setStFilter]=useState({
    type: {
      id:'',
      name:''
    },
    price:{
      min:0,
      max:100000000
    },
    uint_duration_value:0,
    uint_duration:'',
  })
  const [stFilterTab,setStFilterTab]=useState('')
  useEffect(()=>{
    const fetchApi=async ()=>{
      const res=await MobiService.getFilterPackages(stFilter.type.id,stFilter.price.min,stFilter.price.max,stFilter['uint_duration_value'],stFilter['uint_duration'].id)
      setStPackages(res['data'])
    }
   fetchApi()
  },[stFilter])
  useEffect(()=>{
    const fetchApi=async ()=>{
      const res=await MobiService.getFilterPackages(stFilterTab,stFilter.price.min,stFilter.price.max,stFilter['uint_duration_value'],stFilter['uint_duration'].id)
      setStPackages(res['data'])
    }
   fetchApi()
  },[stFilterTab])
  const filter={
    type:[
      {
        id:'',
        name: content[locale]['title.packages.typeAll']
      },
      {
        id:'TRA_TRUOC',
        name: content[locale]['title.packages.typePrepay']
      },
      {
        id:'TRA_SAU',
        name:  content[locale]['title.packages.typePostpaid']
      },
      {
        id:'GIAI_TRI',
        name:  content[locale]['title.packages.typeEntertainment']
      },
      {
        id:'FOR_ENTERPRISE',
        name:  content[locale]['title.packages.typeEnterprise']
      }
   
    ],
    MIN_UINT_PRICE:0,
    MAX_UINT_PRICE:100000000,
    uint_duration_value:[1,2,3],
    uint_duration:[
      {
        id:'DAY',
        name:content[locale]['title.packages.uintDuration.day']
      },
      {
        id:'MONTH',
        name:content[locale]['title.packages.uintDuration.month']
      },
      {
        id:'YEAR',
        name:content[locale]['title.packages.uintDuration.year']
      }
    ]
  }
  const handleChangeFilter=(value,name)=>{
    setStFilter({...stFilter,[name]:value})
 }
 const removeFilterDuration=()=>{
  setStFilter({...stFilter,["uint_duration_value"]:0,["uint_duration"]:""})
 }
  const handleChange=(name,value)=>{
    if(stFilter[name]===value){
    setStFilter({...stFilter,[name]:''})
    }
    else{
      setStFilter({...stFilter,[name]:value})
    }
  }
  const onChangeTabs=(value)=>{
    setStFilterTab(value)
  }
  return (
    <Context.Provider value={{stPackages,setStPackages,filter,stFilter,setStFilter,handleChange,
      stFilterPrice,setStFilterPrice,onChangeTabs,stFilterTab,handleChangeFilter,removeFilterDuration }}>{children}</Context.Provider>
  );
}

export function usePackageContext() {
  return useContext(Context);
}