import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconTitle from "./IconTitle";
import IconCashBack from "../images/Cashback.svg";
import { Container, Grid } from "@mui/material";
import TypograPhyM8 from "./TypographyM8/TypographyM8";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));


export default function DropdownItemM8(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ListMenuItemM8=(arrItem)=>{
    console.log(arrItem)
    return arrItem.map((item,index)=> <MenuItem onClick={handleClose} disableRipple key={index}>
      {item}
    </MenuItem>)
  }
  return (
    <div className="dropdown--item">
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        className="dropdown--item__button"
      >
        {
          <IconTitle
            variant="p"
            component="h6"
            icon={
              <div
                className="dropdown--item__icon-btn"
                style={{ background: `url('${props.icon}')` }}
              />
            }
            title={props.title}
          />
        }
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="dropdown--item__menu"
      >
         <Container maxWidth="lg">
         <Grid container spacing={2} id="supports">
        {props.items.map((item, index) => (
          
        <Grid item xs={3} key={index}>
          <TypograPhyM8 title={item.title} isWhiteColor={true}/>
          <div style={{width: 70 +"px",height: 1+"px",background: "white",marginTop: 10+"px"}}></div>

          {ListMenuItemM8(item.items)}
        </Grid>
        
        ))}
        </Grid>
           </Container>

      </StyledMenu>
    </div>
  );
}

DropdownItemM8.defaultProps = {
  title: "hello",
  items: ["tada", "ple ple"],
  icon: IconCashBack.src,
};
