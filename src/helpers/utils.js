export const replaceSpaceToDash=(str)=>{
    return str.replace(/\s+/g, '-')
}

export const replaceStringMultiLanguage=(str,...objs)=>{

    objs.forEach(item=> {
      str=str.replace(`{{${item.key}}}`,item.value)
   })
    return str
}