import {Link, Navigate, useNavigate } from 'react-router-dom';
import {  useAuth } from './Security/AuthContext';




export default function HeaderComponent(){

    const authcontext = useAuth();
    const navi = useNavigate();
    const isAuthenticated = authcontext.isAuthenticated

    function logOut(){
        const confirm = window.confirm('Are you sure you want to Logout?');
        console.log(confirm)
        if (confirm) {
            Logout()
            
        }
        else {
            navi(`/Welcome/${authcontext.UserName}`)
        }
    }

    function Logout(){
        navi('/Logout')
        authcontext.Logout()
    }

    //console.log(authcontext.number);

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="#">SG</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {isAuthenticated && 
                                    <Link className="nav-link" to="/welcome/Saksham">Home</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {isAuthenticated && 
                                    <Link className="nav-link" to="/Todo">Todos</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!isAuthenticated && 
                                <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated && 
                                <Link className="nav-link" onClick={logOut}>Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}