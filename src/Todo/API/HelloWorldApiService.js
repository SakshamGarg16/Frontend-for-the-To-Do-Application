import { baseic } from "./ApiClient"



// export function RetriveHelloWorld(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }



export const RetriveHelloWorld = ()=> baseic.get('hello-world-bean')

export const RetriveHelloWorldUser = (UserName)=>  baseic.get(`hello-world/pathvar/${UserName}`,{
    headers:{
        Authorization:'Basic U2Frc2hhbTpkdW1teQ=='
    }
})

