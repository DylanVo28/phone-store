import  Link  from 'next/link';

const LinkM8=(props)=>{
    return (<>
        <style jsx global>{`
            .link-mb-8{
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                text-align: right;
                letter-spacing: 0.0015em;
                text-decoration-line: underline;
                color: #0061AF;
                float: right;
            }
        `}</style>
        <Link href={props.href}><a className="link-mb-8">{props.title}</a></Link>
    </>)
}
export default LinkM8