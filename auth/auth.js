/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import React, { useEffect,useState } from "react"
import { isAuth } from "../actions/MobiService"
import Router from 'next/router'
const Private=({children})=>{
    useEffect(()=>{
        if(!isAuth()){
            Router.push(`/signin`)
        }

    },[])
    return <React.Fragment>{children}</React.Fragment>
}
const Hydration=({children})=>{
  const [hydrated, setHydrated] = useState(false);
    useEffect(()=>{
        setHydrated(true);

    },[])
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    return children
}

export {Private,Hydration}