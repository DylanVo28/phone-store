/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 24/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import Typography  from '@mui/material/Typography';
import styles from './TypographyM8.module.sass'
const TypograPhyM8=({isWhiteColor,style,title,children,component,variant, className})=>{
    return <>
   <style jsx global>
        {`
            p.p-12{
                font-size:12px!important
            }
            p.p-14{
                font-size: 14px!important
            }
            h6.f-16{
                font-size: 16px!important
            }
            p.text-mobi-8{
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                letter-spacing: 0.004em;
                color: #333333;
                text-transform: initial;
                display: block;
            }
            h5.text-mobi-8{
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                text-align: center;
                color: #333333;
                text-transform: inherit;
                display:block;
            }
            h1.text-mobi-8{
                padding-left: 7px;
                font-weight: 600;
                font-size: 24px;
                line-height: 28px;
                color: #0061AF;
                text-transform: uppercase;
                display: block;
            }
            h6.text-mobi-8{
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.005em;
                color: #333333;
                text-align: center;
                display: block;
                margin-top:15px;
                padding: 0px;
                text-transform: inherit;
            }
        `}
   </style>
    <Typography component={component} variant={variant} className={" text-mobi-8 "+styles.textmobi8 +" "+ `${isWhiteColor?"":styles.colorblue} ${className}`} style={style}>
        {title}
        {children}
    </Typography>
    </>
}
TypograPhyM8.defaultProps={
    isWhiteColor: false

}
export default TypograPhyM8