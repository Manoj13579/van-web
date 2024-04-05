import React from 'react';
import { 
useLoaderData,
Form,
redirect,
useActionData,
useNavigation } from 'react-router-dom';
import { loginUser } from '../Utility/Api';


export function loader({ request }){
  return new URL(request.url).searchParams.get("message")
}
export async function action({ request }){
const formData = await request.formData()
const email = formData.get('email')
const password = formData.get('password')
const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

try {
const data = await loginUser ({ email, password })
localStorage.setItem("loggedin", true)
const response = redirect(pathname)
response.body = true
return (response) /* can also use throw for return*/ 
}
catch(err) {
  return err.message
}
}

const Login = () => {
  
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();



  return (
    <div className='form-container'>
      <h1>Sign in to your account</h1>
       {message && <h3 className = "red">{message}</h3>}
      {errorMessage && <h3 className = "red">{errorMessage}</h3>}
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
      <button disabled={navigation.state === "submitting"}>
        {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  )
}

export default Login