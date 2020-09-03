// import Axios from "axios"

import axios from 'axios'
export default function request(config) {
    // return new Promise((resolve, reject) => {
    //     const instance = axios.create({
    //         baseURL: 'http://123.207.32.32:8000' ,
    //         timeout: 5000
    //     })
    //     instance(config).then(res => {
    //         resolve(res)
    //     }).catch(err => {
    //         reject(err)
    //     })
    // })
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/z8' ,
        timeout: 5000
    })
    //响应拦截
    instance.interceptors.request.use(config => {
        console.log('1:',config)
        return config
    },err => {
        console.log(err)
    })
    instance.interceptors.response.use(config => {
        console.log('2:',config)
        return config
    },err => {
        console.log(err)
    })
    return instance(config)

}