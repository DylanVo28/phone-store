/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import fetch from 'isomorphic-fetch'
import cookie from 'js-cookie'
import { API } from '../config'

class MobiService{
    getFilterDevicesSetting(){
        return fetch(`${API}/settings/list-device-filter-setting`,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
           
        })
        .then(response=>{
            return response.json()
        })
        .catch(err=> console.log(err))
    }
    getDevicesFilter(type,storage,brand,os,min,max){
        let stringFilter="?";
        if(type){
            stringFilter+=`&type_id=${type}`
        }
        if(storage){
            stringFilter+=`&storage_id=${storage}`
        }
        if(brand){
            stringFilter+=`&brand_id=${brand}`
        }
        if(os){
            stringFilter+=`&os_id=${os}`
        }
        stringFilter+=`&min_unit_price=${min}`
        stringFilter+=`&max_unit_price=${max}`

        return fetch(`${API}/devices/list${stringFilter}`,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
           
            },
           
        })
        .then(response=>{
            return response.json()
        })
        .catch(err=> console.log(err))
    }
    getDevices(){
        return fetch(`${API}/devices/list`,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
           
        })
        .then(response=>{
            return response.json()
        })
        .catch(err=> console.log(err))
    }
    getPackages(){
        return fetch(`${API}/packages/list`,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
           
        })
        .then(response=>{
            return response.json()
        })
        .catch(err=> console.log(err))
    }
    getFilterPackages(type,minUintPrice,maxUintPrice,uintDurationValue,uintDuration){
        let stringFilter="?"
        if(type){
            stringFilter+=`&type=${type}`
        }
        if(uintDurationValue){
            stringFilter+=`&unit_duration_value=${uintDurationValue}`
        }
        if(uintDuration){
            stringFilter+=`&unit_duration=${uintDuration}`
        }
        stringFilter+=`&min_unit_price=${minUintPrice}`,
        stringFilter+=`&max_unit_price=${maxUintPrice}`
        return fetch(`${API}/packages/list${stringFilter}`,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
           
        })
        .then(response=>{
            return response.json()
        })
        .catch(err=> console.log(err))
    }
    getDeviceById(id){
        return fetch(`${API}/devices/detail/${id}`,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
           
        })
        .then(response=>{
            return response.json()
        })
        .catch(err=> console.log(err))
    }
}


export default new MobiService()

