
import  Typography  from '@mui/material/Typography';
import  AllOutIcon  from '@mui/icons-material/AllOut';
const IconTitle=(props)=>{
    return ( <Typography variant={props.variant} component={props.component} className={props.className}>
    <span>{props.icon}</span>{props.title}
    </Typography>)
}
export default IconTitle