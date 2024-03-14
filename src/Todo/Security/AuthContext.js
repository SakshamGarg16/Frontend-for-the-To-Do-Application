import { createContext, useContext, useState } from "react";
import { JOTauth, basicauth } from "../API/AuthenticatonApi";
import { baseic } from "../API/ApiClient";


export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);



export default function AuthProvider({children}){

    function Logout(){
        setAuthenticated(false)
        setUserName(null)
    }

    // function Login(UserName,password){
    //     if(UserName==="Saksham"&&password==="dummy"){
    //         setAuthenticated(true)
    //         setUserName(UserName)
    //         return true
    //     }
    //     else{
    //         setAuthenticated(false)
    //         setUserName(null)
    //         return false
    //     }
    // }

    // async function Login(UserName,password){
    //     const batoken = 'Basic '+ window.btoa(UserName+":"+password)
        
    //     try{
    //     const response = await basicauth(batoken)
    //     if(response.status==200){
    //         setAuthenticated(true)
    //         setUserName(UserName)
    //         baseic.interceptors.request.use(
    //             (config)=>{
    //             config.headers.Authorization=batoken
    //             return config
    //             }
    //         )
    //         return true
    //     }
    //     else{
    //         setAuthenticated(false)
    //         setUserName(null)
    //         return false
    //     }
    // }catch(error){
    //     setAuthenticated(false)
    //         setUserName(null)
    //         return false
    // }
    // }

    async function Login(UserName,password){
        const batoken = 'Basic '+ window.btoa(UserName+":"+password)
        
        try{
        const response = await JOTauth(UserName,password)
        if(response.status==200){
            const jwtToken = 'Bearer ' + response.data.token
            setAuthenticated(true)
            setUserName(UserName)
            baseic.interceptors.request.use(
                (config)=>{
                config.headers.Authorization=jwtToken
                return config
                }
            )
            return true
        }
        else{
            Logout()
            return false
        }
    }catch(error){
        Logout()
            return false
    }
    }

    const [isAuthenticated , setAuthenticated] = useState(false)
    const [UserName , setUserName] = useState(null)

    //setInterval (()=>setNumber(number+1),10000);

    return(
    <AuthContext.Provider value = {{isAuthenticated,Login,Logout , UserName}}>
            {children}
    </AuthContext.Provider>
    )
}