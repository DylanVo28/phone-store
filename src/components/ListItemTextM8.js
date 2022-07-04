import IconTitle from "./IconTitle"
import { List } from '@mui/material/List';
import { ListItem } from '@mui/material/ListItem';
import { ArrowForwardM8 } from "./Icons";

const ListItemTextM8 =()=>{
    return (
       <>
      
        <IconTitle
            variant="p"
            component="h6"
            icon={
                props.iconTitle
            }
            title={props.title}
          />
         <List >
            
            {props.item.incentives && props.item.incentives.map((item,index)=><ListItem key={index}>
                <IconTitle variant="p" component="h6"
                            icon={<div style={{width:5+"px",height: 5+"px",background: 'orange', borderRadius: 50+"%", display: 'inline-block'}}/>}
                            title={item}
                            className="package-card__list-item"
                        />
                  
            </ListItem>)}
        </List>
       </>
    )
}
export default ListItemTextM8
ListItemTextM8.defaultProps={
    iconTitle: ArrowForwardM8,
    title: "Enter title",
    
}