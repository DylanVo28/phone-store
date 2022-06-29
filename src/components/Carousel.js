import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'



const Slide=(props)=>{
   
    return <>
  
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
