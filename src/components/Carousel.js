import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import IconPrev from '../images/icon-prev.svg'
import IconNext from '../images/icon-next.svg'

const CarouselM8=(props)=>{
   
    return <>
  
     <Carousel id="carousel" className="carousel-banner"
    animation="slide" activeIndicatorIconButtonProps={{className: "activeIndicator"}}
    NextIcon={<img src={IconNext.src}/>}
    PrevIcon={<img src={IconPrev.src}/>}
    swipe={true}
    cycleNavigation={true}
    navButtonsAlwaysVisible={true}
    duration={1000}
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

export default CarouselM8
