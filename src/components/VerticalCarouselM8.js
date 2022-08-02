import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconPrev from '../images/icon-prev.svg'
import IconNext from '../images/icon-next.svg'
import  Image  from 'next/image';
import { useEffect } from 'react';
import { Box } from '@mui/material';
export default function VerticalCarouselM8({items}) {

    useEffect(()=>{
    let counter=0;

       document.getElementsByClassName("vertical-carousel-prev")[0].addEventListener("click",function(){
        const height=document.getElementsByClassName("vertical-carousel-m8__banner")[0].offsetHeight+4
        
        if(Math.abs(counter)>= document.getElementsByClassName("vertical-carousel-m8__banner").length){
            return
        }
        counter--;
        document.getElementsByClassName("vertical-carousel-m8")[0].style.transform=`translateY(${height*counter}px)`
        
       })
       document.getElementsByClassName("vertical-carousel-next")[0].addEventListener("click",function(){
        if(counter==0){
            return
           }
        const height=document.getElementsByClassName("vertical-carousel-m8__banner")[0].offsetHeight+4
       
        counter++;
            document.getElementsByClassName("vertical-carousel-m8")[0].style.transform=`translateY(${height*counter}px)`
        if(Math.abs(counter)== document.getElementsByClassName("vertical-carousel-m8__banner").length){
            counter=-1;
        }
       })
    },[])
  return (
    <>
    <style jsx global>
        {
            `
                .vertical-carousel-m8{
                    transition: 0.3s;
                    transform: translateY(0);
                }
            `
        }
    </style>
    <Image className="vertical-carousel-prev" src={IconPrev.src} width={50} height={50} alt="prev" style={{transform:'rotate(90deg)'}}/>
    <Box style={{overflow: 'hidden', height: 720}}>
    <ImageList sx={{ width: '100%' }} cols={1}  className="vertical-carousel-m8">
      {items.map((item,index) => (
        <ImageListItem key={index}>
          <img
            className="vertical-carousel-m8__banner"
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            style={{height: '240px',maxWidth:"fit-content"}}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    
    <Image className="vertical-carousel-next" src={IconPrev.src} width={50} height={50} alt="prev" style={{transform:'rotate(-90deg)'}}/>

    </>
  );
}


