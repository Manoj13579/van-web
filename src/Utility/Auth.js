import { redirect, } from "react-router-dom"


export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("loggedin")
  const pathname = new URL(request.url).pathname
    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must login first.&redirectTo=${pathname}`)
        response.body = true
        throw response /* can also use return for throw*/ 
    }
    return null
}