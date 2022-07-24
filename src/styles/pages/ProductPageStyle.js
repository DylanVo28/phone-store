/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
const ProductPageStyle=()=>{
    return <style jsx global>
    {`
  .package__list-option{
    box-shadow: 0px 0px 4px rgb(130 130 130 / 25%);
    border-radius: 12px;
  }
  .package__list-option .MuiList-root{
    background: none;
  }
  .package-list__title{
    box-shadow: 0px 0px 4px rgb(130 130 130 / 25%);
    border-radius: 12px;
    padding: 10px 20px;
  }
  .package-list__title .title{
    margin: 0;
  }
  .package-list__item{
    margin-left: 15px;
    box-shadow: 0px 0px 4px rgb(130 130 130 / 25%);
    border-radius: 12px;
    margin-top: 30px;
  }
  .item-checkbox .MuiListItemButton-root{
    padding-left: 0px;
  }
  .package-list__title .title{
    padding-left: 0;
  }
`}
  </style>
}
export default ProductPageStyle