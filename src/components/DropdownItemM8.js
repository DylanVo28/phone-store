import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconTitle from "./IconTitle";
import IconCashBack from "../images/Cashback.svg";
import { Container, Grid } from "@mui/material";
import TypograPhyM8 from "./TypographyM8/TypographyM8";
import ListItemText from "@mui/material/ListItemText";

export default function DropdownItemM8(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [move,setMove]=React.useState(false)
  const open = Boolean(anchorEl);
  const handleHover=(event)=>{
    setAnchorEl(event.currentTarget);
  }
  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
   
  };
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const handleCloseMenu=async()=>{
  setMove(false)
  setAnchorEl(null);

}
  const handleClose = async () => {
    sleep(1000)
    if(!move){
      setAnchorEl(null);

    }
    else if(anchorEl){
      setAnchorEl(null);

    }

    
  };
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const ListMenuItemM8 = (arrItem) => {
    return (
      <Demo className="dropdown--item__demo">
        <List dense={dense} class="dropdown--item__list">
          {arrItem.map((item, index) => (
            <ListItem key={index} className="dropdown--item__listitem">
              <ListItemText
                className="dropdown--item__listitemtext"
                primary={item}
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          ))}
        </List>
      </Demo>
    );
  };

  return (
    <div className="dropdown--item">
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onMouseOver={handleHover}
        onMouseLeave={handleClose}
        className="dropdown--item__button"
      >
        {
          <IconTitle
            variant="p"
            component="h6"
            className="dropdown--item__menu-title"
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
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleCloseMenu }}
        className="dropdown--item__menu"
        onMouseOver={e=>setMove(true)}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <List dense={dense} class="dropdown--item__list-parent">
              {props.items.map((item, index) => (
                <ListItem key={index} className="dropdown--item__list-child">
                  <TypograPhyM8 title={item.title} isWhiteColor={true} />
                  <div
                    style={{
                      width: 70 + "px",
                      height: 1 + "px",
                      background: "white",
                      marginTop: 10 + "px",
                    }}
                  ></div>

                  {ListMenuItemM8(item.items)}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Container>
      </Menu>
    </div>
  );
}

DropdownItemM8.defaultProps = {
  title: "hello",
  items: ["tada", "ple ple"],
  icon: IconCashBack.src,
};
