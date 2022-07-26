/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 24/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
export default function FormSubmitM8({children, className,handleSubmit}){

    

    return <>
        <style jsx global>{`
            .form-submit-m8.form-signup .title{
                text-align: center;
            }
            .form-submit-m8.form-auth-code,.form-submit-m8.form-password,.form-submit-m8.form-success{
                padding: 15px;
                background: #fff;
                -webkit-box-shadow: 0px 0px 18px rgb(0 0 0 / 15%);
                -moz-box-shadow: 0px 0px 18px rgb(0 0 0/15%);
                box-shadow: 0px 0px 18pxrgb(0 0 0/15%);
                -webkit-border-radius: 12px;
                -moz-border-radius: 12px;
                border-radius: 12px;
                margin-top: 30px;
                min-height: 20vw;
                justify-content: space-around;
                display: flex;
                flex-direction: column;
            }
            .form-submit-m8.form-signup .input-m8{
                width: 100%;
                margin: 0;
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