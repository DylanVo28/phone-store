import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'



const Slide=(props)=>{
   
    return <>
    <style jsx global>{`
        .carousel-banner .css-1ps6pg7-MuiPaper-root .banner{
            height: 500px;
           
            background-repeat: no-repeat!important;
            background-size: cover!important;
            background-position: center!important;
            
        }
    `}
       
    </style>
     <Carousel id="carousel" className="carousel-banner"
    animation="slide" activeIndicatorIconButtonProps={{className: "activeIndicator"}}
     >
            {
                props.items.map( (item, i) => <>
                 <Paper>
            <div className="banner" style={{background: `url(${item.image})`}}></div>
            </Paper>
                </>  )
            }
        </Carousel>
    </>
}

export default Slide
