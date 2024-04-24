import { DELETECOOKIE } from "@/globals/functions";
import { GlobalContext } from "@/globals/lib";
import { COOKIE_TOKEN, DEBUG } from "@/globals/var";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
  const {SETAUTHENTICATED} = useContext(GlobalContext);

  const logout = ()=>{
    /*
    logout procedure
    */
    SETAUTHENTICATED(false)
    DELETECOOKIE(COOKIE_TOKEN)
  }

  return (
    <>
      <ul>
        <li><Link href="/">home</Link></li>
        <li><Link href="/page1">Page1</Link></li>
        <li><Link href="/blog/a">Blog a</Link></li>
        <li><Link href="/blog/b">Blog b</Link></li>
        {
          DEBUG ?
          <li><Link href="/examples">Examples</Link></li>
          :
          null
        }
      </ul>
      <button onClick={()=>logout()}>Logout</button>
      <hr></hr>
    </>
  );
}
