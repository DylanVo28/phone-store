import { Card, CardMedia, Container } from "@mui/material";
import List from "@mui/material/List";
import ItemCheckBox from "../../src/components/ItemCheckbox";
import Navbar from "./../../src/components/Navbar";
import { Grid } from "@mui/material";
import ImgMediaCard from "./../../src/components/ImgMediaCard";
import ItemButton from "../../src/components/ItemButton";
import Footer from "./../../src/components/Footer";
import SpeedDialTooltipOpen from "./../../src/components/SpeedDialTooltipOpen";
import ButtonM8 from "../../src/components/ButtonM8/Button";
import CarouselM8 from "../../src/components/Carousel";
import CloseIcon from "@mui/icons-material/Close";
import iconNotFound from "../../src/images/404.svg";
import TabsM8 from "../../src/components/TabsM8";
import React, { useEffect, useState } from "react";
import BreadCrumbsM8 from "../../src/components/BreadCrumbsM8";
import phone from "../../src/images/phone.png";
import ActionAreaCardM8 from "../../src/components/ActionAreaCardM8/ActionAreaCardM8";
import banner62 from "../../src/images/baner-6-2.png";
import faq from "../../src/images/faq.png";
import NoSSR from "react-no-ssr";
import banner from "../../src/images/baner-6-1.png";
import {
  ProductProvider,
  useProductContext,
} from "../../src/context/ProductProvider";
import MobiService from "../../actions/MobiService";
import { useRouter } from "next/router";
import content from "../../public/locales/content";
import InputRangeM8 from "../../src/components/InputRangeM8";
import { replaceSpaceToDash } from "../../src/helpers/utils";
import Tab from "@mui/material/Tab";
import ProductPageStyle from "../../src/styles/pages/ProductPageStyle";
import { Hydration } from "../../auth/auth";

var itemsBanner = [
  {
    image:
      "https://media4.giphy.com/media/jJjb9AUHOiP3nJJMdy/giphy.gif?cid=82a1493brk1p5lo4f0kludsbvfxp3iv8d9ajxafmvqch52xy&rid=giphy.gif&ct=v",
  },
  {
    image: banner.src,
  },
];
const MAX_PRICE = 100000000;
const MIN_PRICE = 0;
const Products = ({ res }) => {
  const [width, setWidth] = useState(0);
  const [checkNull, setCheckNull] = useState(true);
  const { locale } = useRouter();
  const {
    stFilter,
    setStFilter,
    stDevices,
    setStDevices,
    handleChangeFilter,
    stFilterProduct,
    handleChangeChecked,
    setStFilterProduct,
    onChangeTabs
  } = useProductContext();
  const [stFilterPrice, setStFilterPrice] = useState({
    min: MIN_PRICE,
    max: MAX_PRICE,
  });
  useEffect(() => {
    setWidth(window.innerWidth);
    setStDevices(res[0]["data"]);
    setStFilter(res[1]["data"]);
  }, []);
 

  const renderTabs = () => {
    if (stFilterProduct.brand === 0 && stFilter["brand_list"]) {
      let arrayTab = [];
      arrayTab.push(
        <Tab
          style={{ width: `${100 / (stFilter["brand_list"].length + 1)}%` }}
          label={"ALL"}
          value={0}
          className="tabs-m8__tab"
        />
      );

      arrayTab.push(
        stFilter["brand_list"].map((item, index) => (
          <Tab
            style={{ width: `${100 / (stFilter["brand_list"].length + 1)}%` }}
            label={item.value}
            value={item.id}
            key={index}
            className="tabs-m8__tab"
          />
        ))
      );
      return arrayTab;
    }
    else{
      const brand=stFilter["brand_list"].find(item=>item.id===stFilterProduct.brand)
      return  <Tab
        style={{ width: `${100 / (stFilter["brand_list"].length + 1)}%` }}
        label={brand.value}
        value={brand.id}
        className="tabs-m8__tab"
      />
    }
  };
  return (
    <>
    <Hydration>
      <React.Fragment>
        <ProductPageStyle/>
          <Navbar />
          <div style={{ height: 120 + "px" }}></div>
          <CarouselM8 items={itemsBanner} />
          <Container
            maxWidth="lg"
            style={{ paddingTop: "5vw", paddingBottom: "5vw" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} className="package__list-option">
                <Grid item xs={12} style={{ padding: "10px 0" }}>
                  <h4 style={{ margin: 0 }}>
                    {content[locale]["title.products.brand"]}
                  </h4>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                    
                    }}
                  >
                    <ItemCheckBox
                      title={"All"}
                      name={"brand"}
                      id={0}
                      handleChange={(e) =>
                        handleChangeChecked(
                          0,
                          "brand",
                          stFilterProduct.brand === 0
                        )
                      }
                      checked={stFilterProduct.brand === 0}
                    />
                    {stFilter["brand_list"] &&
                      stFilter["brand_list"].map((item, index) => (
                        <ItemCheckBox
                          title={item.value}
                          key={item.id}
                          name={"brand"}
                          id={item.id}
                          handleChange={(e) =>
                            handleChangeChecked(
                              item.id,
                              "brand",
                              stFilterProduct.brand === item.id
                            )
                          }
                          checked={stFilterProduct.brand === item.id}
                        />
                      ))}
                  </List>
                </Grid>
                <Grid item xs={12} style={{ padding: "10px 0" }}>
                  <h4 style={{ margin: 0 }}>
                    {content[locale]["title.products.os"]}
                  </h4>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    {stFilter["os_list"] &&
                      stFilter["os_list"].map((item, index) => (
                        <ItemCheckBox
                          title={item.value}
                          key={item.id}
                          name={"os"}
                          id={item.id}
                          handleChange={(e) =>
                            handleChangeChecked(
                              item.id,
                              "os",
                              stFilterProduct.os === item.id
                            )
                          }
                          checked={stFilterProduct.os === item.id}
                        />
                      ))}
                  </List>
                </Grid>
                <Grid item xs={12} style={{ padding: "10px 0" }}>
                  <h4 style={{ margin: 0 }}>
                    {content[locale]["title.products.type"]}
                  </h4>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    {stFilter["type_list"] &&
                      stFilter["type_list"].map((item, index) => (
                        <ItemCheckBox
                          title={item["value"]}
                          key={item.id}
                          id={item.id}
                          name={"type"}
                          handleChange={(e) =>
                            handleChangeChecked(
                              item.id,
                              "type",
                              stFilterProduct.type === item.id
                            )
                          }
                          checked={stFilterProduct.type === item.id}
                        />
                      ))}
                  </List>
                </Grid>
                <Grid item xs={12} style={{ padding: "10px 0" }}>
                  <h4 style={{ margin: 0 }}>
                    {content[locale]["title.products.storage"]}
                  </h4>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    {stFilter["storage_list"] &&
                      stFilter["storage_list"].map((item, index) => (
                        <ItemCheckBox
                          title={`${item.value} ${item["unit_name"]}`}
                          id={item.id}
                          key={item.id}
                          name={"storage"}
                          handleChange={(e) =>
                            handleChangeChecked(
                              item.id,
                              "storage",
                              stFilterProduct.storage === item.id
                            )
                          }
                          checked={stFilterProduct.storage === item.id}
                        />
                      ))}
                  </List>
                </Grid>
                <Grid item xs={12} style={{ padding: "10px 0" }}>
                  <h4 style={{ margin: 0 }}>
                    {content[locale]["title.products.price"]}
                  </h4>

                  {stFilterProduct.price && (
                    <InputRangeM8
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={stFilterPrice}
                      onChange={(value) => setStFilterPrice(value)}
                      handleChange={(value) =>
                        handleChangeFilter(value, "price")
                      }
                    />
                  )}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={9} style={{ paddingTop: 0 }}>
                <Grid item xs={12} className="package-list__title">
                  <div style={{ padding: "15px 0" }}>
                    <h1 className="title">
                      {content[locale]["title.products.devices"]}
                    </h1>
                    <BreadCrumbsM8 />
                    <div style={{ marginTop: "5px" }}>
                      <span>
                        {content[locale]["title.products.titleFilter"]}{" "}
                      </span>
                      {stFilter["brand_list"] &&
                        stFilter["brand_list"].map((item) => {
                          if (item.id === stFilterProduct["brand"]) {
                            return (
                              <ItemButton
                                icon={<CloseIcon />}
                                onClick={(e) => handleChangeFilter(0, "brand")}
                                title={
                                  <span style={{ paddingTop: "4px" }}>
                                    {item.value}
                                  </span>
                                }
                              />
                            );
                          }
                        })}
                      {stFilter["os_list"] &&
                        stFilter["os_list"].map((item) => {
                          if (item.id === stFilterProduct["os"]) {
                            return (
                              <ItemButton
                                icon={<CloseIcon />}
                                onClick={(e) => handleChangeFilter(0, "os")}
                                title={
                                  <span style={{ paddingTop: "4px" }}>
                                    {item.value}
                                  </span>
                                }
                              />
                            );
                          }
                        })}
                      {stFilter["type_list"] &&
                        stFilter["type_list"].map((item) => {
                          if (item.id === stFilterProduct["type"]) {
                            return (
                              <ItemButton
                                icon={<CloseIcon />}
                                onClick={(e) => handleChangeFilter(0, "type")}
                                title={
                                  <span style={{ paddingTop: "4px" }}>
                                    {item.value}
                                  </span>
                                }
                              />
                            );
                          }
                        })}
                      {stFilter["storage_list"] &&
                        stFilter["storage_list"].map((item) => {
                          if (item.id === stFilterProduct["storage"]) {
                            return (
                              <ItemButton
                                icon={<CloseIcon />}
                                onClick={(e) =>
                                  handleChangeFilter(0, "storage")
                                }
                                title={
                                  <span style={{ paddingTop: "4px" }}>
                                    {`${item.value} ${item["unit_name"]}`}
                                  </span>
                                }
                              />
                            );
                          }
                        })}
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
                        Ưu tiên xem:{" "}
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
                    <TabsM8
                      items={
                        stFilterProduct.brand === 0
                          ? stFilter["brand_list"]
                          : []
                      }
                      type={"brand"}
                      onChangeTabs={onChangeTabs}
                    >
                      { stFilter["brand_list"] && renderTabs()}
                    </TabsM8>
                    {checkNull && (
                      <Grid
                        container
                        spacing={2}
                        style={{ paddingTop: "15px" }}
                      >
                        {stDevices.map((item, index) => (
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            key={index}
                            style={{ padding: "16px" }}
                          >
                            <ImgMediaCard
                              item={item}
                              isCart={true}
                              isdiscount={true}
                              discountValue={3000000}
                              href={{
                                pathname:
                                  content[locale]["title.[/products/product]"],
                                query: {
                                  product: `${replaceSpaceToDash(item.name)}_${
                                    item.id
                                  }`,
                                },
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    )}
                    {stDevices.length === 0 && (
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
                          {content[locale]['title.products.notFound']}
                        </h1>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          {/*banner section */}
          <Container maxWidth="lg" id="banner">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card sx={{ maxWidth: 100 + "%", boxShadow: "none" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="400"
                    image={banner62.src}
                    className="card-image"
                  />
                </Card>
              </Grid>
            </Grid>
          </Container>

          {/*support section*/}
          <Container maxWidth="lg">
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
      </Hydration>
    </>
  );
};

export default Products;

export async function getServerSideProps() {
  //where call api to render data for page

  const res = await Promise.all([
    MobiService.getDevices(),
    MobiService.getFilterDevicesSetting(),
  ]);
  return {
    props:{res}
  };
};