
import  Button  from '@mui/material/Button';
const ButtonM8=(props)=>{
    return (<>
   <style jsx global>{`
        .btn-mobi-8{
            padding: 8px 24px;
            gap: 10px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
            border-radius: 20px;
            color: #0061AF;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.0025em;
            margin-right: 15px
                }
        
        .btn-mobi-8-outline{
            border: 1px solid #FFFFFF;
            border-radius: 20px;
            padding: 8px 24px;
            gap: 10px;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.0025em;
            color: white;
            background: none;
            font-family: 'Roboto';
            font-style: normal;
            box-shadow: none;
            margin-right: 15px
        }
        .btn-package-active{
            background: #5180C0;
            color: white;
            box-shadow: none;
        }
        .btn-package-outline{
            color: #5180C0;
            border-color: #5180C0;
        }
    `}     
    </style>
    <Button variant="contained" className={props.className}>
    
        {props.title}
        </Button>
    </>)
}
export default ButtonM8