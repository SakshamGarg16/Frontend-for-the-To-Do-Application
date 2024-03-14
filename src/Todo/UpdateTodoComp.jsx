import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./Security/AuthContext"
import { getATodoApi, newtodoApi, updateTodoAPI } from "./API/TodoAPI"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import moment from "moment/moment"

export default function UpdateTodoComp(){

    const {id}=useParams()
    const[targetDate,setTargetDate]=useState("")
    const auth=useAuth()
    const [description , setDescription]=useState("")
    const[Done,setDone]=useState("")

    useEffect(
        ()=>retriveAPI(),[id]
    )
    const navi = useNavigate()

    function submittedForm(values){
        
        
        if(id!=-1){
            const todos={
                id:id,
                username:auth.UserName,
                description:values.description,
                targetDate:values.targetDate,
                done:values.Done
            }
        updateTodoAPI(auth.UserName,id,todos)
        .then(()=>{
            navi('/todo')})
        .catch((error)=>{console.log(error)})}

    else{
        const todos={
            username:auth.UserName,
            description:values.description,
            targetDate:values.targetDate,
            done:values.Done
        }
        newtodoApi(auth.UserName,todos)
        .then(()=>{navi('/todo')})
        .catch((error)=>console.log(error))

    }

    }

    function retriveAPI(){
        if(id!=-1){
        getATodoApi(auth.UserName,id)
            .then((response)=>{
                // console.log(response.data)
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
                setDone(response.data.done)
            })
            .catch((error)=>console.log(error))
        }

    }

    function validation(value){
        let error = {
        }
        
        if(value.description=="" || value.description.length<4){
            error.description='Enter minimum 5 characters'
        }
        if(value.targetDate == null || value.targetDate == '' || !moment(value.targetDate).isValid ){
            error.targetDate='Enter a valid date'
        }
        // if(moment(value.targetDate).isBefore && value.targetDate !=''){
        //     error.targetDate='Target date should be in future'
        // }

        return error
    }

    return(
        <div className="container">
            <h1>Update Todo</h1>
            <div>
                <Formik  initialValues={{description,targetDate ,Done}}
                    enableReinitialize={true}
                    onSubmit={submittedForm}
                    validate={validation}
                    validateOnChange ={false}
                    validateOnBlur ={false}
                >{
                    (props)=>(
                        <Form>
                            <ErrorMessage 
                            name="description" 
                            component="div"
                            className="alert alert-warning"/>
                            <ErrorMessage 
                            name="targetDate" 
                            component="div"
                            className="alert alert-warning"/>
                            <fieldset className="form-group" >
                                <label>
                                    Description
                                </label>
                                <Field className="form-control" type="text" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>
                                        Target Date
                                </label>
                                <Field className="form-control" type="date" name="targetDate" />
                            </fieldset> 
                            <fieldset className="form-group">
                                <label>
                                        Is Completed?
                                </label>
                                <Field className="form-control" type="boolean" name="Done" />
                            </fieldset>

                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }             
                </Formik>
            </div>
        </div>


    )

}