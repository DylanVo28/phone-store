import { Button } from '@mui/material';
import ButtonBlockM8Style from './../styles/ButtonBlockM8Style';
import  React  from 'react';

const ButtonBlockM8=({children, background,className})=>{
    return (<Button className={`button-block-m8 ${background} ${className}`} variant="contained">
        <ButtonBlockM8Style />
        <React.Fragment>
        {children}

        </React.Fragment>
    </Button>)
}
export default ButtonBlockM8