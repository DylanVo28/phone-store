import NumericInput from 'react-numeric-input';

const NumericInputM8=({props})=>{
    return <>
    <style jsx global>
        {`
            .react-numeric-input{
                width: 8.5rem;
                display: inline-block;
                margin-left: 10px;
            }
            .react-numeric-input b{
                border: none!important;
                height: 32px!important;
                border-left: 1px solid #a4a4a4!important;
                border-radius: 0!important;
                background: none!important
                top: 0!important;
                bottom: 0!important;

            }
            .react-numeric-input input{
                border: 1px solid #a4a4a4;
                color: #A4A4A4!important;
                height: 32px!important;
                border-radius: 3px;
            }
            .react-numeric-input b i{
                color: #A4A4A4!important;
            }
            .react-numeric-input b:nth-child(3){
                border-left: none!important;
                border-right: 1px solid #a4a4a4!important;
            }
            
        `}
    </style>
    <NumericInput 
	className="form-control" 
	value={ 55 } 
	min={ 0 } 
	max={ 100 } 
	step={ 1 } 
	precision={ 0 } 
	size={ 5 } 
	mobile
/>
    </>
}

export default NumericInputM8;