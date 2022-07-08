import Box from "@mui/material/Box";
import Link from "next/link";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AllOutIcon from "@mui/icons-material/AllOut";
import IconTitle from "./IconTitle";
import background from "../images/background-1.svg";
import logoMobi from "../images/logo-mobi.svg";
import address from "../images/address.svg";
import headphone from "../images/headphone.svg";
import mail from "../images/mail.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer>
      {<style jsx global>
            {`
                #footer .icon-title__title{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                    letter-spacing: 0.0015em;
                    color: #FFFFFF;
                  
                }
                #footer .footer__title{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.0015em;
                    color: #FFFFFF;
                    text-transform: uppercase;
                }
                #footer span.icon-title__icon{
                  padding-right: 5px;
                }
            `}

        </style> }
      <Box id="footer">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box>
                <img src={logoMobi.src} style={{ maxWidth: 150 + "px" }} />
              </Box>
              <Box>
                <h5 className="footer__title">CÔNG TY DỊCH VỤ MOBIFONE KHU VỰC 8</h5>
                <IconTitle
                  variant="p"
                  component="h6"
                  icon={<Image src={address.src} width={15} height={15} />}
                  title="236a Phan Trung, Phường Tân Tiến, TP. Biên Hòa, Đồng Nai "
                />
                <IconTitle
                  variant="p"
                  component="h6"
                  icon={<Image src={headphone.src} width={15} height={15} />}
                  title="c8_khcn@mobifone.vn"
                />
                <IconTitle
                  variant="p"
                  component="h6"
                  icon={<Image src={mail.src} width={15} height={15} />}
                  title="18001090 và 9090"
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <Box>
                    <h5 className="footer__title">Giới thiệu</h5>
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box>
                    <h5 className="footer__title">Hỗ trợ khách hàng</h5>
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                  </Box>
                </Grid>{" "}
                <Grid item xs={12} sm={4}>
                  <Box>
                    <h5 className="footer__title">Hỗ trợ khách hàng</h5>
                    <IconTitle
                      variant="p"
                      component="h6"
                      title="Công ty Dịch vụ mobifone khu vực 8"
                    />
                  </Box>
                  <Box>
                    <h5 className="footer__title">Kết nối với chúng tôi</h5>
                    <Box
                      sx={{
                        borderRadius: "50%",
                        borderColor: "primary.main",
                        border: 1,
                        width: "30px",
                        height: "30px",
                        overflow: "hidden",
                        display: "inline-block",
                        marginRight: 10 + "px"
                      }}
                    >
                      <img
                        src="https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=ycoXFwG5Udz08A&pid=ImgRaw&r=0"
                        style={{ width: 100 + "%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "50%",
                        borderColor: "primary.main",
                        border: 1,
                        width: "30px",
                        height: "30px",
                        overflow: "hidden",
                        display: "inline-block",
                        marginRight: 10 + "px"
                      }}
                    >
                      <img
                        src="https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=ycoXFwG5Udz08A&pid=ImgRaw&r=0"
                        style={{ width: 100 + "%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "50%",
                        borderColor: "primary.main",
                        border: 1,
                        width: "30px",
                        height: "30px",
                        overflow: "hidden",
                        display: "inline-block",
                        marginRight: 10 + "px"
                      }}
                    >
                      <img
                        src="https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=ycoXFwG5Udz08A&pid=ImgRaw&r=0"
                        style={{ width: 100 + "%" }}
                      />
                    </Box>
                    
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Grid container spacing={5} className="footer-pvs">
        <Grid xs={12}>© Copyright 2022. Design by PVS.com</Grid>
      </Grid>
    </footer>
  );
};
export default Footer;
