import  Box  from "@mui/material/Box"
import  Link  from 'next/link';
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import  Typography  from '@mui/material/Typography';
import AllOutIcon from '@mui/icons-material/AllOut';
import IconTitle from "./IconTitle";
import background from '../images/background-reverse.png'
const Footer=()=>{
    return (<footer>
        <style jsx global>
            {`
                #footer{
                    background: url('${background.src}');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    padding: 100px 0;
                }
            `}

        </style>
        <Box id="footer">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            <img src="https://th.bing.com/th/id/OIP.85bPVpVnLxxD1252w5VY_wHaB_?pid=ImgDet&rs=1"
                            style={{width: 100 +"%"}}/>
                            </Box>
                        <Box>
                            <h5>Giới thiệu</h5>
                            <IconTitle variant="p" component="h6"
                                icon={<div style={{width:5+"px",height: 5+"px",background: 'orange', borderRadius: 50+"%"}}/>}
                                title="Công ty Dịch vụ mobifone khu vực 8"
                            />
                      
                        </Box>
                      
                    </Grid>
                   
                        
                    <Grid item xs={12} sm={8}>
                    <Grid container>
                         <Grid item xs={12} sm={4}>
                         <Box>
                            <h5>Hỗ trợ khách hàng</h5>
                            <IconTitle variant="p" component="h6"
                               
                                title="Công ty Dịch vụ mobifone khu vực 8"
                            />
                        </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                         <Box>
                            <h5>Hỗ trợ khách hàng</h5>
                            <IconTitle variant="p" component="h6"
                               
                                title="Công ty Dịch vụ mobifone khu vực 8"
                            />
                        </Box>
                            </Grid> <Grid item xs={12} sm={4}>
                         <Box>
                            <h5>Hỗ trợ khách hàng</h5>
                            <IconTitle variant="p" component="h6"
                               
                                title="Công ty Dịch vụ mobifone khu vực 8"
                            />
                        </Box>
                        <Box>
                            <h5>Hỗ trợ khách hàng</h5>
                            <Box sx={{ borderRadius: '50%',
                            borderColor: 'primary.main',
                            border:1  ,
                            width: '30px',
                            height:'30px',
                            overflow: 'hidden'
                            }}><img src="https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=ycoXFwG5Udz08A&pid=ImgRaw&r=0"/></Box>
                        </Box>
                            </Grid>
                            </Grid>

                    </Grid>
                </Grid>
            </Container>
        </Box>

    </footer>)
}
export default Footer