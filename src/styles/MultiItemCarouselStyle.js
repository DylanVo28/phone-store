const MultiItemCarouselStyle=()=>{
    return <style jsx global>
        {`
            .multi-item-carousel-m8 .carousel-button-group{
                transform: translateY(-355px);
            }
            .multi-item-carousel-m8 .react-multiple-carousel__arrow{
                display: none;
            }
            .multi-item-carousel-m8 .react-multiple-carousel__arrow.react-multiple-carousel__arrow-right,
            .multi-item-carousel-m8 .react-multiple-carousel__arrow.react-multiple-carousel__arrow-left{
                background: none;
                display: block;
            }
            .multi-item-carousel-m8 .react-multiple-carousel__arrow.react-multiple-carousel__arrow-left{
                left: calc(4% + -130px);
            }
            .multi-item-carousel-m8 .react-multiple-carousel__arrow.react-multiple-carousel__arrow-right{
                right: calc(4% - 130px);
            }
            .multi-item-carousel-m8 .react-multiple-carousel__arrow.react-multiple-carousel__arrow-left::before,
            .multi-item-carousel-m8 .react-multiple-carousel__arrow.react-multiple-carousel__arrow-right::before{
                content: '';
            }
            .multi-item-carousel-m8 .react-multi-carousel-track .react-multi-carousel-item--active a{
                display: flex;
                justify-content: center;
            } 
           
            
           
        `}
    </style>
}
export default MultiItemCarouselStyle