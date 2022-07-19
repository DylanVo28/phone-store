
import Typography  from '@mui/material/Typography';
import styles from './TypographyM8.module.sass'
const TypograPhyM8=(props)=>{
    return <>
   
    <Typography className={styles.textmobi8 +" "+ `${props.isWhiteColor?"":styles.colorblue}`} style={props.style}>
        {props.title}

    </Typography>
    </>
}
TypograPhyM8.defaultProps={
    isWhiteColor: false

}
export default TypograPhyM8