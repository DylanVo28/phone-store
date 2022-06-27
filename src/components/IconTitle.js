
import  Typography  from '@mui/material/Typography';
import  AllOutIcon  from '@mui/icons-material/AllOut';
const IconTitle=(props)=>{
    return ( <Typography variant={props.variant} component={props.component} className={props.className}>
    <span>{props.icon}</span><span>{props.title}</span>
    </Typography>)
}
export default IconTitle