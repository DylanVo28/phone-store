
import  Button  from '@mui/material/Button';
const ButtonM8=(props)=>{
    return (<>
  
    <Button variant="contained" className={props.className} type={props.type}>
    
        {props.title}
        </Button>
    </>)
}
export default ButtonM8