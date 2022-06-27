import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconTitle from './IconTitle';
import IconCashBack from '../images/Cashback.svg'
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function DropdownItemM8() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='dropdown--item'>
        <style jsx global>
            {`
                .dropdown--item__button{
                    background: none;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.0015em;
                    color: #333333;
                }
                .css-37jdci-MuiTypography-root{
                    font-size: 16px
                }
                .dropdown--item__icon-btn{
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    display: inline-block;
                    background-size: 100%;
                }
                .dropdown--item__menu .css-6hp17o-MuiList-root-MuiMenu-list{
                    background: #0061AF;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.0015em;
                    color: #FFFFFF;
                }
                .dropdown--item__menu .css-edx3xz-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper::before{
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    top: -20px;
                    left: 0px;
                    border-left: 20px solid transparent;
                    border-right: 20px solid transparent;
                    border-bottom: 20px solid #0061AF;
                }
                .dropdown--item__menu .css-edx3xz-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper{
                    overflow: unset;
                }
            `}
        </style>
       
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
    className="dropdown--item__button"
      >{ <IconTitle variant="p" component="h6"
      icon={<div className='dropdown--item__icon-btn' style={{background: `url('${IconCashBack.src}')`}}/>}
      title="Sản phẩm"
  />
}
        
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="dropdown--item__menu"
      >
        <MenuItem onClick={handleClose} disableRipple>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Duplicate
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
