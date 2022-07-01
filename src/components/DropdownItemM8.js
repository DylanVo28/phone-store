import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconTitle from "./IconTitle";
import IconCashBack from "../images/Cashback.svg";
import { Container, Grid } from "@mui/material";
import TypograPhyM8 from "./TypographyM8/TypographyM8";
import ListItemText from '@mui/material/ListItemText';


export default function DropdownItemM8(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
 
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
  const ListMenuItemM8=(arrItem)=>{
    return <Demo className="dropdown--item__demo">
    <List dense={dense} class="dropdown--item__list">
    {
arrItem.map((item,index)=><ListItem  key={index}  className="dropdown--item__listitem">
    <ListItemText className="dropdown--item__listitemtext"
      primary={item}
      secondary={secondary ? 'Secondary text' : null}
    />
  </ListItem>
)}
    
    
    </List>
  </Demo>
   
    
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
         <Grid container spacing={2} >
         <List dense={dense} class="dropdown--item__list-parent">

        {props.items.map((item, index) => (
           
           <ListItem  key={index}  className="dropdown--item__list-child">
          <TypograPhyM8 title={item.title} isWhiteColor={true}/>
          <div style={{width: 70 +"px",height: 1+"px",background: "white",marginTop: 10+"px"}}></div>
         
          {ListMenuItemM8(item.items)}
       
       </ListItem>
        
        ))}
        </List>
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
