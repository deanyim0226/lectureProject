import React from "react";
import { useState } from "react";
import idm from "../backend/idm";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTokens } from "../state/User/UserAction";

const Login = (prop) =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    let dispatchToStore = useDispatch();
    
    const login = (evt) =>{
        
        const user ={
            email,
            password
        }

        console.log(user)
   
        idm.login(user)
            .then((auth) =>  {
                console.log(auth.data)

            })
            .catch((error) => alert(error))

            evt.preventDefault();
    }

    return(
        <>

            <form className={"form-register"} onSubmit={login}>       
            <h1>Login</h1>
            <label>
            <b>Email</b>
            <input type="text" className="form-control" value={email}  
            onChange={ (evt) => {setEmail(evt.target.value)}}
            placeholder="Email" maxLength={20} required/>
            </label>
            <label>
                <b>Password</b>
                <input type="password" className="form-control" value={password}  onChange={ (evt) => {setPassword(evt.target.value)}}
                        placeholder="Password is required" maxLength={20} required/>
            </label>
 
            <br/>
            <button className="btn btn-warning" >Coninue </button>
            <br/>
            <label>Don't have an account? <a>Register</a></label>
    
            </form>
        </>

    );

}

export default Login;