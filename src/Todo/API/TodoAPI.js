import { baseic } from "./ApiClient"


export const todoApi = (UserName)=> baseic.get(`users/${UserName}/todos`)

export const deltodoApi= (UserName,id)=> baseic.delete(`users/${UserName}/todos/${id}`)

export const getATodoApi = (UserName,id)=> baseic.get(`users/${UserName}/todos/${id}`)

export const updateTodoAPI= (UserName,id ,todos)=>baseic.put(`users/${UserName}/todos/${id}`,todos)

//http://localhost:8080/users/Saksham/todos/3


export const newtodoApi = (UserName,todos)=> baseic.post(`users/${UserName}/todos`,todos)