/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import { Typography } from "@mui/material"

const TitleBoxM8=({children,variant,component,className})=>{
    return (
        <>
        <style jsx global>
            {`
                .title-box-m8{
                    background: linear-gradient(89.99deg, #0061AF 0.57%, #3787F3 99.99%);
                    border-radius: 80px 100px 100px 0px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 8px 0px 8px 12px;
                    gap: 12px;
                    display: inline-block;
                    padding-right: 7rem;
                }
                .title-box-m8 .icon-title__title{
                    font-size: 18px;
                    line-height: 21px;
                    letter-spacing: 0.0015em;
                    color: #FFFFFF;
                }
            `}
        </style>
        <Typography
        variant={variant}
        component={component}
        className={`title-box-m8 ${className}`}
        >
            {children}
        </Typography>
        </>
       
    )
}
export default TitleBoxM8