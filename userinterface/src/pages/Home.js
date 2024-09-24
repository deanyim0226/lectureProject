import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom"
import idm from "../backend/idm";
import { removeToken } from "../state/User/UserAction";


const Home = (prop) =>{

    //makes our component capable of being subscriber to store like mapstatetoprops

    let auth = useSelector((state)=> state.userReducer.auth)
 
    let dispatchToStore = useDispatch()

    useEffect(()=>{

        console.log("testing" + JSON.stringify(auth))


    },[auth]) 


    let logout = (evt) =>{

        console.log("user is being logged out")
        auth = {
            accessToken: "",
            refreshToekn: ""
        }

        dispatchToStore(removeToken(auth))

        console.log("auth is now", auth)
        evt.preventDefault();
    }

    console.log(auth)
    /*
    no dependency pass then useEffect runs on every render
    empty array pass then useEffect runs only on first render
    */
    
    return(
        <>
        <h1>Home Daniel</h1>
     <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> 
        <div className="container-fluid">
            <ul className="nav">
                <NavLink  to = "/home"  className="nav-link" activeclassname = "success"   >Home </NavLink>
            </ul>

            <div className="dropdown">
                <a className="btn btn-dark dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account <span className="navbar-toggler-icon"></span>
                </a>
                <ul className="dropdown-menu">
                    
                        <NavLink to = "/login" className= "dropdown-item" activeclassname = "success">Sign in</NavLink>
                        <NavLink to = "/register" className= "dropdown-item" activeclassname = "success">Register</NavLink>
          
                </ul>
            </div>
            </div>
        </nav>

        <button onClick={logout}>logout</button>
        </>
    )
}

export default Home;