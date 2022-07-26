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
            p.text-mobi-8{
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                letter-spacing: 0.004em;
                color: #333333!important;
                text-transform: initial;
                display: block;
            }
            h5.text-mobi-8{
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                text-align: center;
                color: #333333!important;
                text-transform: capitalize;
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