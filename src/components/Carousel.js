import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const Item=(props)=>
{
    return (
        <Paper>
           <img src="https://cdn.tgdd.vn/Files/2015/04/21/634836/3638927_y-nghia-logo-mobifone.jpg"/>
            
        </Paper>
    )
}

const Slide=()=>{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return <>
     <Carousel 
    animation="slide" activeIndicatorIconButtonProps={{className: "activeIndicator"}}
     >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </>
}

export default Slide
