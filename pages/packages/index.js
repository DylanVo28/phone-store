import { Container } from "@mui/material";
import List from "@mui/material/List";
import ItemCheckBox from "../../src/components/ItemCheckbox";
import Navbar from "./../../src/components/Navbar";
import { Grid } from "@mui/material";
import ImgMediaCard from "./../../src/components/ImgMediaCard";
import ItemButton from "../../src/components/ItemButton";
import Footer from "./../../src/components/Footer";
import SpeedDialTooltipOpen from "./../../src/components/SpeedDialTooltipOpen";
import React, { useEffect, useState } from "react";
import PackageCardM8 from "../../src/components/PackageCardM8";
import CloseIcon from "@mui/icons-material/Close";
import ButtonM8 from "../../src/components/ButtonM8/Button";
import TabsM8 from "../../src/components/TabsM8";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ActionAreaCardM8 from "../../src/components/ActionAreaCardM8/ActionAreaCardM8";
import CarouselM8 from "../../src/components/Carousel";
import iconNotFound from "../../src/images/404.svg";
import BreadCrumbsM8 from "../../src/components/BreadCrumbsM8";
import faq from "../../src/images/faq.png";
import NoSSR from "react-no-ssr";
import { useRouter } from "next/router";
import content from "../../public/locales/content";
import MobiService from "../../actions/MobiService";
import { usePackageContext } from "../../src/context/PackageProvider";
import InputRangeM8 from "../../src/components/InputRangeM8";
import Tab from "@mui/material/Tab";
import PackagePageStyle from './../../src/styles/pages/PackagePageStyle';
import { replaceStringMultiLanguage } from "../../src/helpers/utils";
import MetaSEO from "../../src/components/MetaSEO";
import { APP_NAME, DOMAIN } from "../../config";
import banner from '../../src/images/baner_1.jpg'
import { Hydration } from "../../auth/auth";

var itemsBanner = [
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
  },
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
  },
];
const Packages = ({ res }) => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [width, setWidth] = useState(0);
  const [checkNull, setCheckNull] = useState(true);
  const {
    stPackages,
    setStPackages,
    filter,
    stFilter,
    setStFilter,
    handleChange,
    stFilterPrice,
    setStFilterPrice,
    onChangeTabs,
    stFilterTab,
    handleChangeFilter,
    removeFilterDuration 
  } = usePackageContext();
  useEffect(() => {
    const string=content[locale]['/packages/[id]']
    setWidth(window.innerWidth);
    setStPackages(res[0]["data"]);
  }, []);
  const head = () => {
    return (
      <MetaSEO
        title={`Packages | ${APP_NAME}`}
        description={"Trang packages"}
        asPath={asPath}
        keywords="keywords"
        ogTitle={`Lasted web development | ${APP_NAME}`}
        ogDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        ogUrl={`${DOMAIN}${asPath}`}
        ogImage={banner.src}
      ></MetaSEO>
    );
  };
  return (
    <>
      <PackagePageStyle/>
      {head()}
      <React.Fragment>
      
      <div style={{ height: 120 + "px" }}></div>

      <Navbar />
      <CarouselM8 items={itemsBanner} />

      <Container
        maxWidth="lg"
        style={{ paddingTop: "5vw", paddingBottom: "5vw" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} className="package__list-option">
            <Grid item xs={12} style={{ padding: "10px 0" }}>
              <h4 style={{ margin: 0 }}>
                {content[locale]["title.packages.type"]}
              </h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {filter.type.map((item, index) => (
                  <ItemCheckBox
                    title={item.name}
                    key={index}
                    value={item.id}
                    handleChange={(e) => handleChange("type", item)}
                    checked={item.id === stFilter.type.id}
                  />
                ))}
              </List>
            </Grid>
             <Grid item xs={12} style={{ padding: "10px 0" }}>
              <h4 style={{ margin: 0 }}>
                {content[locale]["title.packages.duration"]}
              </h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {filter.uint_duration_value.map((item, index) => (
                  <ItemCheckBox
                    title={item}
                    key={index}
                    value={item}
                    handleChange={(e) =>
                      handleChange("uint_duration_value", item)
                    }
                    checked={item === stFilter.uint_duration_value}
                  />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} style={{ padding: "10px 0" }}>
              <h4 style={{ margin: 0 }}>
                {content[locale]["title.packages.uintDuration"]}
              </h4>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {filter.uint_duration.map((item, index) => (
                  <ItemCheckBox
                    title={item.name}
                    key={index}
                    value={item.id}
                    handleChange={(e) =>
                      handleChange("uint_duration", item)
                    }
                    checked={item.id === stFilter.uint_duration.id}
                  />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} style={{ padding: "10px 0" }}>
              <h4 style={{ margin: 0 }}>
                {content[locale]["title.packages.price"]}
              </h4>
              <Hydration>
              <InputRangeM8
                min={filter["MIN_UINT_PRICE"]}
                max={filter["MAX_UINT_PRICE"]}
                value={stFilterPrice}
                onChange={(value) => setStFilterPrice(value)}
                handleChange={(value) => handleChange("price", value)}
              />

              </Hydration>
              
            </Grid> 
          </Grid>
          <Grid item xs={12} sm={9} style={{ paddingTop: 0 }}>
            <Grid item xs={12} className="package-list__title">
              <div style={{ padding: "15px 0" }}>
                <h1 className="title">
                  {content[locale]["packages.title"]}
                </h1>
                <BreadCrumbsM8 />
                <div style={{ marginTop: "5px" }}>
                  <span>{content[locale]['title.products.titleFilter']} </span>
                  {stFilter.type.id && (
                    <ItemButton
                      icon={<CloseIcon />}
                      onClick={(e) => handleChangeFilter(filter.type[0], "type")}
                      title={
                        <span style={{ paddingTop: "4px" }}>
                          {stFilter.type.name}
                        </span>
                      }
                    />
                  )}
                  {stFilter["uint_duration_value"] !== 0 &&
                    stFilter["uint_duration"] && (
                      <ItemButton
                        icon={<CloseIcon />}
                        onClick={(e) => removeFilterDuration()}
                        title={
                          <span
                            style={{ paddingTop: "4px" }}
                          >{`${stFilter["uint_duration_value"]} ${stFilter["uint_duration"].name} `}</span>
                        }
                      />
                    )}
                </div>
              </div>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} className="package-list__item">
                {/* <div>
                  <p
                    style={{
                      display: "inline-block",
                      paddingRight: "10px",
                    }}
                  >
                    Ưu tiên xem:
                  </p>
                  <ButtonM8
                    title="Trả trước"
                    className="btn-mobi-8 active"
                  ></ButtonM8>
                  <ButtonM8
                    title="Trả trước"
                    className="btn-mobi-8"
                  ></ButtonM8>
                </div> */}
                <TabsM8 items={!stFilter.type.id? filter.type:[]} onChangeTabs={onChangeTabs} type={"type"}>
                  {!stFilter.type.id &&
                    filter.type.map((item, index) => {
                        return  <Tab
                        style={{width :`${100/(filter.type.length)}%`}}
                        label={item.name}
                        value={item.id}
                        key={index}
                        className="tabs-m8__tab"
                      />
                     
                    })}
                 {stFilter.type.id &&
                  <Tab
                  style={{ width:`${100/(filter.type.length)}%`}}
                  label={stFilter.type.name}
                  value={stFilter.type.id}
                  className="tabs-m8__tab"
                />
                 }
                </TabsM8>
                {checkNull && (
                  <Grid container spacing={2}>
                    {stPackages.map((item, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        {" "}
                        <PackageCardM8
                          id={item.id}
                          item={item}
                          detail={true}
                          maxHeightImage={195}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
                {stPackages.length === 0 && (
                  <Grid item xs={12} className="text-align--center">
                    <img
                      className="not-found"
                      src={iconNotFound.src}
                      alt="not-found"
                    />
                    <h1
                      className="title"
                      style={{ textTransform: "inherit" }}
                    >
                      {content[locale]['title.packages.notFound']}
                    </h1>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
      {/*banner section */}
      <Container maxWidth="lg" id="banner">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 + "%" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="400"
                image={
                  "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg"
                }
                className="card-image"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/*support section*/}
      <Container maxWidth="lg" style={{ paddingBottom: "5vw" }}>
        <Grid item xs={12}>
          <span>
            <h1 className="title">Hỗ trợ khách hàng</h1>
          </span>
        </Grid>
        <Grid container spacing={2} id="supports">
          <Grid item xs={3}>
            <ActionAreaCardM8 image={faq.src} />
          </Grid>
          <Grid item xs={3}>
            <ActionAreaCardM8 image={faq.src} />
          </Grid>
          <Grid item xs={3}>
            <ActionAreaCardM8 image={faq.src} />
          </Grid>
          <Grid item xs={3}>
            <ActionAreaCardM8 image={faq.src} />
          </Grid>
        </Grid>
      </Container>

      {width && <SpeedDialTooltipOpen />}
      <Footer></Footer>

  </React.Fragment>
      
    </>
  );
};

export default Packages;

export async function getServerSideProps() {
  //where call api to render data for page

  const res = await Promise.all([MobiService.getPackages()]);
  return {
    props:{res}
  };
};