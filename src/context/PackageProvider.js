import { createContext, useContext, useState,useEffect } from "react";
import MobiService from "../../actions/MobiService";

const Context = createContext();

export function PackageProvider({ children }) {
  const [stTheme,setStTheme]=useState('')
 
  return (
    <Context.Provider value={{stTheme,setStTheme}}>{children}</Context.Provider>
  );
}

export function usePackageContext() {
  return useContext(Context);
}