import Head from 'next/head'
import { APP_NAME, DOMAIN, FB_APP_ID } from '../../config'
const MetaSEO=({children,title,keywords,description,ogTitle, ogDescription, ogImage, ogUrl,asPath, indexing})=>{
    return (
        <Head>
            <title>{title}</title>
            <link rel="canonical" href={`${DOMAIN}${asPath}`}/>

            <meta name="keywords" keyword={keywords}/>
            <meta name="description" content={description} />
            <meta property='og:type' content='website'/>
            <meta property='og:title' content={ogTitle}/>
            <meta property='og:description' content={ogDescription}/>
            <meta property='og:image' content={'https://info-imgs.vgcloud.vn/2022/01/03/13/gap-go-con-meo-hai-mat-ky-la-noi-tieng-khap-mang-xa-hoi.jpg'}/>
            <meta property="og:image:secure_url" content={ogImage}/>

            <meta property='og:url' content={ogUrl}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>

            <meta name="robots" content='indexing'/>
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />

            {children}
        </Head>
    )
}

export default MetaSEO