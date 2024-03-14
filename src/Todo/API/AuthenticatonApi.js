import { baseic } from "./ApiClient";


export const basicauth= (token)=>baseic.get(`basicauth`,{
    headers:{
        Authorization:token
    }
})

export const JOTauth= (username,password)=>baseic.post(`authenticate`,{username,password})
