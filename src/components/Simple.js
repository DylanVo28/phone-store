/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonM8 from "./ButtonM8/Button";
import TypograPhyM8 from "./TypographyM8/TypographyM8";
import { ArrowForwardM8 } from "./Icons";
import IconPrev from '../images/icon-prev.svg'
import IconNext from '../images/icon-next.svg'
import MultiItemCarouselStyle from "../styles/components/MultiItemCarouselStyle";
import { useRouter } from "next/router";
import content from "../../public/locales/content";
import TranslatedLink from "./TranslatedLink";
const filterPackages=["Trả trước", "Trả sau", "Giải trí", "Gói cước cho doanh nghiệp"]
const filterProducts=["Smartphone chính hãng","Thiết bị phát wifi", "Tablet","Điện thoại cơ bản"]
const MultiItemCarousel = (props) => {
  const {locale}=useRouter()
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems, slidesToShow }
  } = rest;
    return (
      <div className="carousel-button-group">
        <button aria-label="Go to previous slide"
                        className={currentSlide === 0 ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left react-multiple-carousel__arrow-left"}
                        onClick={() => previous()}>
        <img src={IconPrev.src} alt="prev" />

                        </button>
       <button
        onClick={() => next()}
        aria-label="Go to next slide"
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right react-multiple-carousel__arrow-right"
      >
        <img src={IconNext.src} alt="next"/>
      </button>
      </div>
    );
  };
  return (
    <>
      {props.style}
      <MultiItemCarouselStyle/>
      <Grid  xs={12} className="">
        <span>
          <h1 className="title">{props.titleLeft}</h1>
        </span>
      </Grid>
        <Grid container className="filter-product" style={{paddingLeft: 7 +"px"}}>
          <Grid item xs={9} className="">
          {props.component == "package" && (<>
            {filterPackages.map((item,index)=>index===0? <ButtonM8 key={index} title={item} className="btn-mobi-8 active"></ButtonM8> : <ButtonM8
                title={item}
                key={index} 
                className="btn-mobi-8-outline btn-package-outline"
              >
                Outlined
              </ButtonM8> )}
               
          </>
               
          )}
            {props.component == "product" && (
              <>
              {filterProducts.map((item,index)=>index===0? <ButtonM8  key={index}  title="Trả trước" className="btn-mobi-8"></ButtonM8>:  <ButtonM8
                  title="Thiết bị phát wifi"
                  className="btn-mobi-8-outline"
                  key={index} 
                >
                  Outlined
                </ButtonM8>)}
               
               
              </>
            )}
          </Grid>
          {props.titleRight && <Grid item xs={3} style={{ textAlign: "right" }} className="multi-item-carousel__right">
            <TranslatedLink
              href={{
                pathname: props.linkTo
              }}
            >
              <a className="text-decoration--none display--flex align-item--center float--right">
                <TypograPhyM8 title={props.titleRight} isWhiteColor={props.isColorWhiteTextRight}></TypograPhyM8>
                {<ArrowForwardM8 />}
              </a>
            </TranslatedLink>
          </Grid>}
        </Grid>
      <div id={props.id} style={{position: 'relative'}} className="multi-item-carousel-m8">
        <Carousel
        containerClass="carousel-container"
        itemClass="carousel-item"
        renderButtonGroupOutside={true}
         customButtonGroup={<ButtonGroup />}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: props.maxItemSlide,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={3}
          swipeable
        >
          {props.htmlDescription}
        </Carousel>
        {
          props.isBtnMore &&  <div style={{textAlign: 'center'}}>
          <Button variant="outlined" style={props.btnWhite && {color: 'white',borderColor: 'white'}}>{content[locale]['title.viewMore']}</Button>
          </div>
        }
       
      </div>
    </>
  );
};

export default MultiItemCarousel;
MultiItemCarousel.defaultProps={
  isBtnMore:true
}