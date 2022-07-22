/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import  Link  from 'next/link';
import LinkM8Style from '../styles/components/LinkM8Style';

const LinkM8=(props)=>{
    return (<>
        <LinkM8Style/>
        <Link href={props.href}><a className={"link-mb-8 " +props.className}>{props.title}</a></Link>
    </>)
}
export default LinkM8