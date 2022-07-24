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