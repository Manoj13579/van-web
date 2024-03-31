import React, { useState } from 'react';
import { useLoaderData, Form, redirect } from 'react-router-dom';
import { loginUser } from '../Utility/Api';


export function loader({ request }){
  return new URL(request.url).searchParams.get("message")
}
export async function action({ request }){
const formData = await request.formData()
const email = formData.get('email')
const password = formData.get('password')
const data = await loginUser ({ email, password })
localStorage.setItem("loggedin", true)
const response = redirect("/host")
response.body = true
return (response) /* can also use throw for return*/ 
}

const Login = () => {
  
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null)
  const message = useLoaderData();


const handleSubmit = (e)=>{
e.preventDefault();
setStatus('submitting');
setError(null)
loginUser(formData)
.then(data => console.log(data))
.catch((err) => setError(err))
.finally(() => setStatus("idle"));

}


  return (
    <div className='form-container'>
      <h1>Sign in to your account</h1>
       {message && <h3 className = "red">{message}</h3>}
      {error && <h3 className = "red">{error.message}</h3>}
      <Form method='post'
       className='input-form'
       replace
      >
      <input
      placeholder='Enter email'
      type='email'
      name='email'
      />
      <input
      placeholder='Enter Password'
      type='password'
      name='password'
      />
      <button disabled={status === "submitting"}>
        {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  )
}

export default Login