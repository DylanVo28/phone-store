/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
export const replaceSpaceToDash=(str)=>{
    return str.replace(/\s+/g, '-')
}

export const replaceStringMultiLanguage=(str,...objs)=>{
    if(str){
        objs.forEach(item=> {
            str=str.replace(`{{${item.key}}}`,item.value)
         })
         return str
    }
   return ""
}

export const isValidStrUpperCase=(str)=>{
    if(str.match(new RegExp("[A-Z]"))){
        return true
    }
    return false
}

export const isValidStrLowerCase=(str)=>{
    if(str.match(new RegExp("[a-z]"))){
        return true
    }
    return false
}

export const isSpecialString=(str)=>{
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(str)){
        return true;
      } 
    return false
}

export const isValidCharNumber=(str)=>{
    if(str.match(new RegExp(/\d+/g))){
        return true
    }
    return false
}

export const isValidPhoneNumber=(str)=>{
    if(str.match(new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im))){
        return true
    }
    return false
}

export const isValidEmail=(str)=>{
    if(str.match(new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
        return true
    }
    return false
}