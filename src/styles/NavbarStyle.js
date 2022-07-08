export default function NavbarStyle(){
    return (<style jsx global>
        {`
            .navbar-header{
                background: #0061AF;
                height: 70px;
              }
              .navbar-header .css-1oqqzyl-MuiContainer-root, .navbar-header .css-mhc70k-MuiGrid-root, .navbar-header .css-1equabv-MuiGrid-root{
                height:100%!important;
              }
              .navbar-header .navbar-header__between{
                text-align: right;
                font-size:18px;
                color: white;
              }
              .navbar-header .navbar-header__right{
                text-align: right;
                font-size:18px;
                color: white;
                display: flex;
                align-items: center;
                justify-content: flex-end;
              }
              .navbar-header .textmobi8{
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.0015em;
                color: #FFFFFF;
              }
              .navbar-header .navbar-header__vn-en{
                margin-left:15px;
              }
              .navbar-header .navbar-header__cart{
                width: 24px;
              }
              .navbar-header .icon-title__icon{
                display: inline-block;
                position: relative;
              }
              .navbar-header__right span.icon-title__icon::after {
                  content: "2";
                  position: absolute;
                  width: 15px;
                  height: 15px;
                  background: white;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  border-radius: 50%;
                  left: -5px;
                  top: -5px;
                  color: red;
                  display: flex;
                  align-items: center;
                  justify-content: center;
              }
              .navbar-header .navbar-header__icon-title{
                display: flex;
                align-items: center;
              }
              .navbar-header .navbar-header__between{
                display: flex;
                align-items: center;
                justify-content: flex-end;
              }
              .navbar-header .navbar-header__sign-in{
                display: flex;
                align-items: center;
              }
              #navbar .navbar__toolbar{
                justify-content: space-between;
                padding: 0;
              }
              #navbar .MuiPaper-root{
                position: unset!important 
              }
              #navbar .logo.width-15{
                width: 15% 
              }
              #navbar .width-100{
                width: 100% 
              }
              #navbar .bg-white{
                background: white;
                box-shadow: none;
              }
              .navbar__box{
                display:flex 
              }
              #navbar .input-m8{
                margin-right: 0;
                width: 135px;
              }
              
              
              .dropdown--item__list-parent{
                display: flex;
                margin-top: 20px;
              }
              .dropdown--item__list-child{
                display: block;
              }
              .dropdown--item__demo{
                background-color: #0061AF;
              }
              
              .dropdown--item__list,.dropdown--item__listitem{
                padding: 0;
              }
              .dropdown--item .dropdown--item__button{
                background: none;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.0015em;
                color: #333333;
              }
              .dropdown--item .dropdown--item__menu-title{
                font-size: 16px;
                display: flex;
                align-items: center;
              }
              .dropdown--item .dropdown--item__icon-btn{
                width: 26px;
                height: 26px;
                background-repeat: no-repeat!important;
                display: inline-block;
                background-size: 100%;
              }
              .dropdown--item__menu .MuiMenu-list{
                background: #0061AF;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.0015em;
                color: #FFFFFF;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
              }
              .dropdown--item__menu .MuiMenu-list::before{
                content: "";
                position: absolute;
                width: 10px;
                height: 10px;
                top: -10px;
                left: 0px;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid#0061af;
              }
              .dropdown--item__menu .MuiPaper-elevation{
                overflow: unset;
                margin-left: 15px;
                border-bottom-right-radius: 57px;
                border-bottom-left-radius: 57px;
                background: none;
                border: none;
                margin-top: 13px;
              }
        `}
    </style>)
}