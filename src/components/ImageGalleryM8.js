/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import ImageGallery from 'react-image-gallery';
import iconPrev from'../images/icon-prev.svg'
import LeftNavM8 from './LeftNavM8';
const images = [
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    alt:"image gallery"
  },
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    alt:"image gallery"

  },
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    alt:"image gallery"

  },
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    alt:"image gallery"

  },
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    alt:"image gallery"

  },
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    alt:"image gallery"

  },
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    alt:"image gallery"

  },
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    alt:"image gallery"

  },
];

const ImageGalleryM8=()=>{
  const prevButton=()=>{
    return (<LeftNavM8/>)
  }
  return <>
    <style jsx global>
      {
        `
        .image-gallery .image-gallery-thumbnail+.image-gallery-thumbnail:nth-of-type(1n+5){
          display: none;
        }
        .image-gallery .image-gallery-thumbnail+.image-gallery-thumbnail:nth-child(4){
          position: relative;
        }
        .image-gallery .image-gallery-thumbnail+.image-gallery-thumbnail:nth-child(4)::before{
          content: 'Xem thêm';
          left: 0;
          top: 0;
          width: 92px;
          height: 92px;
          background: #00000052;
          display: block;
          position: absolute;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 12px;
          overflow: hidden;
        }
        .image-gallery .image-gallery-fullscreen-button{
          right: 83px;
          opacity:0;
          bottom: -103px;
          padding: 34px 35px;
        }
        .image-gallery .image-gallery-content.bottom.fullscreen{
          top: 18%;
        }
        .image-gallery .image-gallery-content.bottom.fullscreen .image-gallery-fullscreen-button{
          opacity:1
        }
        .image-gallery .image-gallery-content.bottom.fullscreen .image-gallery-thumbnail+.image-gallery-thumbnail:nth-of-type(n+5){
          display: inline-block;
        }
        .image-gallery .image-gallery-content.bottom.fullscreen .image-gallery-thumbnail+.image-gallery-thumbnail:nth-child(4)::before{
          content: '';
          background: none;
        }
        .image-gallery .image-gallery-content.bottom.fullscreen .image-gallery-left-nav,.image-gallery .image-gallery-content.bottom.fullscreen .image-gallery-right-nav{
          display: block!important;
        }
        .image-gallery .image-gallery-thumbnail{
          padding: 10px;
        }
        .image-gallery .image-gallery-thumbnail.active{
          background: #E2EEFF;
          border: 1px solid #5180C0;
          border-radius: 8px;
        }
        .image-gallery .image-gallery-thumbnail:hover{
          transition: 0.3s;
          background: #E2EEFF;
          border: 1px solid #5180C0;
          border-radius: 8px;
          padding: 10px;
        }
        .image-gallery .image-gallery-icon{
          filter: none;
        }
        .image-gallery .image-gallery-swipe{
          padding: 30px;
        }
        `
      }
    </style>
    <ImageGallery items={images} showPlayButton={false} className="image-gallery-m8" ></ImageGallery>

  </>}

export default ImageGalleryM8