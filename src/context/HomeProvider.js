import { createContext, useContext, useState } from "react";

const Context = createContext();
const filter={
  type: {
      TRA_TRUOC: 'TRA_TRUOC',
      TRA_SAU:'TRA_SAU'
  },
  minUintPrice: 0,
  maxUintPrice:0,
  uintDurationValue:0,
  uintDuration:{
      MONTH:'MONTH',
      YEAR: 'YEAR'
  }
}
export function HomeProvider({ children }) {
   
  const [stFilter, setStFilter] = useState({...filter});
  const [stDevices,setStDevices]=useState([]);
  const [stPackages,setStPackages]=useState([]);
 
  return (
    <Context.Provider value={{stFilter, setStFilter,filter,stDevices,setStDevices,stPackages,setStPackages}}>{children}</Context.Provider>
  );
}

export function useHomeContext() {
  return useContext(Context);
}