import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImgMediaCard from "./ImgMediaCard";
import { Container, Input, InputAdornment } from "@mui/material";

import { Image } from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonM8 from "./ButtonM8/Button";
import TypograPhyM8 from "./TypographyM8/TypographyM8";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ArrowForwardM8 } from "./Icons";
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];
const MultiItemCarousel = (props) => {
  
  return (
    <>
      {props.style}
      <div>
        <span>
          <h1 className="title">{props.titleLeft}</h1>
        </span>
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={9} style={{ paddingLeft: 0 }}>
          {props.component == "package" && (<>
            <ButtonM8 title="Trả trước" className="btn-mobi-8 btn-package-active"></ButtonM8>
                <ButtonM8
                title="Thiết bị phát wifi"
                className="btn-mobi-8-outline btn-package-outline"
              >
                Outlined
              </ButtonM8>
          </>
               
          )}
            {props.component == "product" && (
              <>
                <ButtonM8 title="Trả trước" className="btn-mobi-8"></ButtonM8>
                <ButtonM8
                  title="Thiết bị phát wifi"
                  className="btn-mobi-8-outline"
                >
                  Outlined
                </ButtonM8>
              </>
            )}
          </Grid>
          <Grid item xs={3} style={{ textAlign: "right" }}>
            <Link href={props.linkTo} >
              <a className="text-decoration--none display--flex align-item--center float--right">
                <TypograPhyM8 title={"Xem tất cả"} isWhiteColor={props.isColorWhiteTextRight}></TypograPhyM8>
                {<ArrowForwardM8 />}
              </a>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <div id={props.id}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
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
          slidesToSlide={1}
          swipeable
        >
          {props.htmlDescription}
        </Carousel>
        <div style={{textAlign: 'center'}}>
        <Button variant="outlined" style={{    color: 'white',borderColor: 'white'}}>Xem thêm</Button>

        </div>
      </div>
    </>
  );
};

export default MultiItemCarousel;
