/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
const ButtonBlockM8Style=()=>{
    return (<style jsx global>
        {
            `
            .button-block-m8.btn-cancel{
                background: rgb(217, 217, 217);
                margin-right: 10px;
                color: #828282;
                width: 100%;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: .0015em;
                text-transform: uppercase;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
                height: 48px;
                border-top-right-radius: 4px!important;
                border-bottom-right-radius: 4px!important;
            }
            .button-block-m8.btn-submit{
                width: 100%;
                background: rgb(0 97 175 / 70%);
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.0015em;
                text-transform: uppercase;
                border-radius: 4px;
                height: 48px;
                border-top-left-radius: 4px!important;
                border-bottom-left-radius: 4px!important;
            }
            .button-block-m8{
                background: linear-gradient(89.99deg, #0061AF 0.57%, #3787F3 99.99%);
                border-radius: 6px;
                display:block;
                padding: 15px 0;
                text-transform: capitalize;
            }
            .button-block-m8 .button-block-m8__title{
                font-weight: 600;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.005em;
            }
            .button-block-m8 .button-block-m8__description{
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.0025em;
                padding-top: 5px
            }
            `
        }
    </style>)
}

export default ButtonBlockM8Style