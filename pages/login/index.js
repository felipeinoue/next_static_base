import { LOGIN } from "@/globals/apicalls";
import { SETCOOKIE_FOR_ONE_WEEK } from "@/globals/functions";
import { GlobalContext } from "@/globals/lib";
import { COOKIE_TOKEN } from "@/globals/var";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";


export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const {AUTHENTICATED, SETAUTHENTICATED} = useContext(GlobalContext);

  const form_submit = async (e) => {
    /*
    on form submit
    */
    e.preventDefault()
    const user = await LOGIN(email, password)
    if (user) {
      SETCOOKIE_FOR_ONE_WEEK(COOKIE_TOKEN, user.token)
      SETAUTHENTICATED(true)
    } else {
      alert("email or password invalid")
    }
  }

  useEffect(()=>{
    /*
    on load
    */

    // do not show this page if authenticated
    if (AUTHENTICATED) {
      router.push("/")
    }

  },[])

  return (
    <>
      <form onSubmit={form_submit}>
        <input 
          type={"email"}
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="user@info-rmi.com"
          autoComplete=""
          autoFocus
        />
        <input 
          type={"password"}
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="*************"
          autoComplete=""
        />
        <input
          type={"submit"}
          value="LOG IN"
        />
      </form>
    </>
  )
}
