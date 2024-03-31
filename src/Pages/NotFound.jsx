import React from "react";
import { Link } from "react-router-dom";

const NotFound = ()=>{


    return (
    <div className="notfound-container">
        <h1>Sorry! Page you were looking was not Found.</h1>
       <Link to={"/"}><button>Return to home</button></Link>
    </div>
    )
}
export default NotFound