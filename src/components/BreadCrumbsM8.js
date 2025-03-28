/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useEffect,useState} from 'react'
import { useRouter } from "next/router";
import content from '../../public/locales/content';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumbsM8() {
  const [paths,setPaths]=useState([])
  const {locale,pathname}=useRouter()
  const router=useRouter()

  useEffect(()=>{
    setPaths(pathname.split("/"))
  },[])
 

  return (
    <Stack spacing={2} className="bread-crumb-m8">
      <style jsx global>
        {`
          .bread-crumb-m8 .bread-crumb-m8__link{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.005em;
            color: #146AB3;
          }
        `}
      </style>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {paths.map((item,index)=>{
          if(index===0){
            return <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} className="bread-crumb-m8__link">
                        {content[locale]['title.home']}

          </Link>
          }
          else{
            return <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
            className="bread-crumb-m8__link"
          >
            {content[locale][item]}
          </Link>
          }
        })}
      </Breadcrumbs>
    </Stack>
  );
}
