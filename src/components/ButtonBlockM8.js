/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import { Button } from '@mui/material';
import ButtonBlockM8Style from './../styles/components/ButtonBlockM8Style';
import  React  from 'react';

const ButtonBlockM8=({children, background,className,type,style})=>{
    return (<Button className={`button-block-m8 ${background} ${className}`} variant="contained" type={type} style={style}>
        <ButtonBlockM8Style />
        <React.Fragment>
        {children}

        </React.Fragment>
    </Button>)
}
export default ButtonBlockM8