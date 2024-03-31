import React from "react";
import { useRouteError } from "react-router-dom";


const Error = () =>{

    const error = useRouteError();
    
    return(
        <div className="error-container">
         <h2> Error: Sorry, An error occurred !</h2>
         <h4>{error.message}</h4>
          <pre>error: ({error.status}) - {error.statusText}</pre>
        </div>
    )
}
export default Error