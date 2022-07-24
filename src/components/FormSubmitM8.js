/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 24/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
export default function FormSubmitM8({children, className}){

    const handleSubmit=evt=>{
        evt.preventDefault();
        
    }

    return <>
        <style jsx global>{`
            .form-submit-m8.form-signup .title{
                text-align: center;
            }
            .form-submit-m8.form-signup .input-m8{
                width: 100%;
            }
            .form-submit-m8.form-signup .input-m8 .input-m8__outlined-input{
                border-radius: 4px;
            }
        `}</style>
         <form onSubmit={handleSubmit} className={`form-submit-m8 ${className}`}>
        {children}
        </form>
    </> 
   
}