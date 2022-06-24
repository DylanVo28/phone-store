
import Typography  from '@mui/material/Typography';
const TypograPhyM8=(props)=>{
    return <>
    <style jsx global>{`
    .text-mobi-8{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.0125em;
        text-transform: uppercase;
        color: white;
        display: inline
    }
  
    `}</style>
    <Typography className='text-mobi-8'>
        {props.title}
    </Typography>
    </>
}

export default TypograPhyM8