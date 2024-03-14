
import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom';
import './TodoApp.css'
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import LogoutComponent from './LogoutComponent';
import TodoComponent from './TodoComponent';
import LoginComponent from './LoginComponent';
import HeaderComponent from './HeaderComponent';
import AuthContext, { useAuth } from './Security/AuthContext';
import UpdateTodoComp from './UpdateTodoComp';


function Authentication({children}){
    const authcontext = useAuth();
    if(authcontext.isAuthenticated)
        return children
    return <Navigate to="/"/>
}


export default  function TodoApp(){
    return(
        <>
            <AuthContext>
                <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/Login' element={<LoginComponent/>}/>
                    <Route path='/Welcome/:UserName' element={
                     <Authentication>   
                        < WelcomeComponent/>
                    </Authentication>
                    }/>
                    <Route path='/Todo' element={
                    <Authentication> 
                        <TodoComponent/>
                    </Authentication>
                    }/>

                    <Route path='/Todo/:id' element={
                    <Authentication> 
                        <UpdateTodoComp/>
                    </Authentication>
                    }/>

                    <Route path='/Logout' element={
                    <Authentication> 
                        <LogoutComponent/>
                    </Authentication>    
                    }/>
                    <Route path='*' element={< ErrorComponent/>}/>
                </Routes>
                </BrowserRouter>  
            </AuthContext>  
        </>

    )
}