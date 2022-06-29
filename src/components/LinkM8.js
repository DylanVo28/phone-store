import  Link  from 'next/link';

const LinkM8=(props)=>{
    return (<>
        
        <Link href={props.href}><a className="link-mb-8">{props.title}</a></Link>
    </>)
}
export default LinkM8