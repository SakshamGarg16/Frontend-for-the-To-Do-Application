import { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { useAuth } from './Security/AuthContext';

export default function LoginComponent(){

    const [UserName,SetUserName]= useState("Saksham");
    const [password,SetPassword]= useState("");
    const [failure,Setfailure]= useState(false);
    const navi = useNavigate();
    const authcontext = useAuth();


    function UserChangeevent(event){
        SetUserName(event.target.value);
    }
    function PasswordChangeEvent(event){
        SetPassword(event.target.value);
    }
    async function loginEventHndler(){
        if(await authcontext.Login(UserName,password)){
            navi(`/Welcome/${UserName}`);
        }
        else{
            Setfailure(true);
        }
    }

    return(
        <div className="LoginComponent">
            <h1>Please Login!</h1>
            {failure && <div>Autentiction Failed. Please check your credentials.</div>}
            <div className="LoginForm">
            <div>
                <label>User Name</label>
                <input type="text" name="UserName" value={UserName} onChange={UserChangeevent}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={PasswordChangeEvent}/>
            </div>
            <button type="button" onClick={loginEventHndler}>Login</button>
            </div>
        </div>
    )
}