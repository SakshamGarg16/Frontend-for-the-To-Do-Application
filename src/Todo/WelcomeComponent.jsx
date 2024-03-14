import {useParams,Link } from 'react-router-dom';
import { useState } from 'react';
import { RetriveHelloWorldUser } from './API/HelloWorldApiService';




export default function WelcomeComponent(){
    const {UserName}=useParams();
    const [message,setMessage] = useState(null);


    function CallRestAPI(){
        // RetriveHelloWorld()
        //     .then((response)=>succesfulres(response))
        //     .catch((error)=>errorResponse(error))
        //     .finally(()=>console.log('Cleanup'))

            RetriveHelloWorldUser(UserName)
            .then((response)=>{setMessage(response.data.msg)})
            .catch((error)=>{console.log(error)})
    }

    return(

        <div className='WelcomeComponent'>
            <div className='container'>
                <h1>Welcome {UserName}</h1>
                Your Todos : 
                <Link to='/Todo'>Manage your Todos</Link>
            </div>
            <div>
                
                <button className='btn btn-success m-5' onClick={CallRestAPI}>Call Hello World</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}