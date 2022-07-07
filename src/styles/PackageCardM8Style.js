const PackageCardM8Style=()=>{
    return <style jsx global>
        {
            `
            .package-card{
                border: none;
                box-shadow: none;
                background: none;
                width: 100%;
              }
              .package-card .package-card__list{
                padding: 15px 0;
              }
              .package-card .package-card-content{
                transform: translateY(-35px);
                left: calc(50% - 385px/2 - 0.5px);
                top: calc(50% - 366px/2 + 111px);
                background: #FFFFFF;
                border: 1px solid #D9D9D9;
                border-radius: 42px 42px 12px 12px;
              }
              .package-card__title{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 28px;
                text-align: center;
                color: #0061AF;
              }
              .package-card{
                border: none;
                box-shadow: none;
              }
              .package-card .package-card__list{
                padding: 15px 0;
              }
              .package-card-content{
                transform: translateY(-35px);
                left: calc(50% - 385px/2 - 0.5px);
                top: calc(50% - 366px/2 + 111px);
                background: #FFFFFF;
                border: 1px solid #4BA6DD;
                border-radius: 42px 42px 12px 12px;
              }
              .package-card__description{
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.005em;
                color: #44494D;
              }
              .package-card__description span{
                color: #0061AF;
              }
              .package-card__title-list{
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
               /* identical to box height */
                letter-spacing: 0.0015em;
               /* Blue main */
                color: #0061AF;
              }
              .package-card__list-item{
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
               /* identical to box height */
                letter-spacing: 0.0025em;
               /* gray sub text */
                color: #44494D;
                display: flex;
              }
              .package-card__list-item span{
                padding-right: 5px;
                display: flex;
                align-items: center;
              }
              .package-card__price{
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #EE1C24;
              }
              .package-card_image{
                border-top-right-radius: 15px;
                border-top-left-radius: 15px;
              }
              .package-card .package-card__title{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 28px;
                text-align: center;
                color: #0061AF;
              }
              .package-card .package-card__description{
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.005em;
                color: #44494D;
                text-align: left;
              }
              .package-card .package-card__description span{
                color: #0061AF;
              }
              .package-card .package-card__title-list{
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
               /* identical to box height */
                letter-spacing: 0.0015em;
               /* Blue main */
                color: #0061AF;
              }
              .package-card .package-card__list-item{
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
               /* identical to box height */
                letter-spacing: 0.0025em;
               /* gray sub text */
                color: #44494D;
                display: flex;
              }
              .package-card .package-card__list-item span{
                padding-right: 5px;
                display: flex;
                align-items: center;
              }
              .package-card .package-card__price{
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
                color: #EE1C24;
              }
              .package-card .package-card_image{
                border-top-right-radius: 15px;
                border-top-left-radius: 15px;
              }
              
              .package-card:hover .package-card_image,.img-media-card:hover .card-image,
              .solution-card:hover .MuiCardMedia-img{
                transform: scale(1.2);
                transition: 0.3s;
              }
              .package-card:hover .package-card-content {
                border: 1px solid #0061AF;
                transition: 0.3s;

              }
              
            `
        }
    </style>
}
export default PackageCardM8Style