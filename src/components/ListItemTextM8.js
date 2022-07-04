import IconTitle from "./IconTitle"
import  List  from '@mui/material/List';
import ListItem  from '@mui/material/ListItem';
import { ArrowForwardM8 } from "./Icons";

const ListItemTextM8 =(props)=>{
    return (
       <>
      
        <IconTitle
            variant="p"
            component="h6"
            icon={
                props.iconTitle
            }
            title={props.title}
            className="list-item-text-m8"
          />
         <List >
            
            {props.items && props.items.map((item,index)=><ListItem key={index}>
                <IconTitle variant="p" component="h6"
                            icon={props.iconItem}
                            title={item}
                            className="package-card__list-item"
                        />
                  
            </ListItem>)}
        </List>
       </>
    )
}
export default ListItemTextM8
