import ImageGallery from 'react-image-gallery';
import iconPrev from'../images/icon-prev.svg'
import LeftNavM8 from './LeftNavM8';
const images = [
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
  },
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
  },
  {
    original: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/274360/samsung-galaxy-a13-xanh-thumb-1-600x600.jpg',
  },
];

const ImageGalleryM8=()=>{
  const prevButton=()=>{
    return (<LeftNavM8/>)
  }
  return <>

    <ImageGallery items={images} showPlayButton={false} />;

  </>}

export default ImageGalleryM8