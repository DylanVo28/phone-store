import  Link  from 'next/link';
import LinkM8Style from '../styles/LinkM8Style';

const LinkM8=(props)=>{
    return (<>
        <LinkM8Style/>
        <Link href={props.href}><a className={"link-mb-8 " +props.className}>{props.title}</a></Link>
    </>)
}
export default LinkM8