import { useEffect, useState } from "react";
import {  useAuth } from "./Security/AuthContext";
import { deltodoApi, todoApi } from "./API/TodoAPI";
import { useNavigate } from "react-router-dom";
        

export default function TodoComponent(){


    // const todos = [
    //     {ID:1 , Description:'Learn AWS' , Done: false , TargetDate: (new Date(today.getFullYear()+2,today.getMonth(),today.getDay()))},
    //     {ID:2 , Description:'Learn Full Stack' , Done: false , TargetDate: (new Date(today.getFullYear()+3,today.getMonth(),today.getDay()))},
    //     {ID:3 , Description:'Learn DevOps',Done: false , TargetDate: (new Date(today.getFullYear()+5,today.getMonth(),today.getDay()))},
    // ]
    const [todos,setTodos] = useState([])
    const[delMessage,setDelMessage]=useState(null)
    const[delConfir,setDelConfir]=useState(false)

    const auth = useAuth()
    const navi = useNavigate()

    

    function Deletetodo(id){
        deltodoApi(auth.UserName,id)
        .then(()=> {
            setDelMessage(`Successfully Deleted Todo`)
            setDelConfir(false)
            refreshUser()
        })
        .catch((error)=>console.log(error))

    }

    function updatetodo(id){
        console.log(id)
        navi(`/Todo/${id}`)
    }

    function Addnewtodo(){
        navi(`/Todo/-1`)
    }
   
    useEffect(
        ()=>refreshUser,[]
    )

    function refreshUser(){
        todoApi(auth.UserName)
        .then(response => {
            setTodos(response.data)
        })

    setInterval(()=>setDelMessage(false),10000)

  

    }
    return(
        <div className='container'>
            <h1>Things you want to do!</h1>
            {delMessage && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>{delMessage}</strong> 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>setDelMessage(false)}></button>
            </div>
            }
            <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done</th>
                        <th>Target Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.TargetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate}</td>
                                    <td><button className="btn btn-warning" onClick={()=>setDelConfir(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={()=>updatetodo(todo.id)}>Update Todo</button></td>
                                </tr>
                            )
                        )
                    }
                </tbody>

            </table>
            </div>
            <div>{delConfir &&<div id="confirmDialog" class="alert alert-danger">
                                <div class="modal-body">
                                    Are you sure you want to Delete the Todo with id = {delConfir}?
                                </div>
                                <div class="container m-3" >
                                    <button type="button" data-dismiss="modal" class="btn btn-primary" id="confirmed" onClick={()=>Deletetodo(delConfir)}>Delete</button>
                                    <button type="button" data-dismiss="modal" class="btn" onClick={()=>setDelConfir(false)}>Cancel</button>
                                </div>
                            </div>}</div>
            <div className="btn btn-success m-5" onClick={Addnewtodo}>Add New Todo</div>

       </div>
    )
}