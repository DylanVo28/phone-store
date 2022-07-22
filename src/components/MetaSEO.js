/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import Head from 'next/head'
import { APP_NAME, DOMAIN, FB_APP_ID } from '../../config'
const MetaSEO=({children,title,keywords,description,ogTitle, ogDescription, ogImage, ogUrl,asPath, indexing})=>{
    return (
        <Head>
            <title>{title}</title>

        
            <meta name="keywords" keyword={keywords}/>
            <meta name="description" content={description} />
            <meta property='og:type' content='website'/>
            <meta property='og:title' content={ogTitle}/>
            <meta property='og:description' content={ogDescription}/>
            <meta property='og:image' content={`http://mobi8.pvssolution.com${ogImage}`}/>
            <meta property="og:image:secure_url" content={`${DOMAIN}${ogImage}`}/>
            <meta property='og:url' content={ogUrl}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>
            <meta property="og:image:width" content="200" /> 
            <meta property="og:image:height" content="200" />
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image:alt" content="PSGC API Banner"/>
            <meta name="twitter:title" content={ogTitle}/>
            <meta name="twitter:description" content={ogDescription}/>
            <meta name="twitter:image" content={`http://mobi8.pvssolution.com${ogImage}`}></meta>
            {/* <meta name="robots" content='indexing'/> */}
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
            <link rel="canonical" href={`${DOMAIN}${asPath}`}/>

            {children}
        </Head>
    )
}

export default MetaSEO