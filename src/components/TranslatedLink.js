/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import { useRouter } from 'next/router';
import content from '../../public/locales/content';
import  Link from 'next/link';

const TranslatedLink=({href,language,children})=>{
    const {locale}=useRouter()
    const translatedPath=content[locale]?.[href]
    const as=translatedPath?`/${locale}${translatedPath}`:undefined
    return (
        <Link href={href} as={as} locale={language}>
            {children}
        </Link>
    )
}
export default TranslatedLink