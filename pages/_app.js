import Header from "@/components/header";
import "@/styles/globals.css";
import Head from "next/head";
import { GlobalContext } from "../globals/lib";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GETCOOKIE } from "@/globals/functions";
import { COOKIE_TOKEN } from "@/globals/var";
import Loading from "@/components/loading";
import styles from "./index.module.css";


export default function App({ Component, pageProps }) {
  const [AUTHENTICATED, SETAUTHENTICATED] = useState(false)
  const [TOKEN, SETTOKEN] = useState("")
  const router = useRouter()
  let authenticated = false

  /*
  Global states
  */
  const value = {
    AUTHENTICATED,
    SETAUTHENTICATED,
    TOKEN,
  }

  const init = (cookie_token)=>{
    /*
    init
    */
    authenticated = true
    SETAUTHENTICATED(true)
    SETTOKEN(cookie_token)
  }

  useEffect(()=>{
    /*
    on load
    */
    const cookie_token = GETCOOKIE(COOKIE_TOKEN)
    if (cookie_token) {
      init(cookie_token)
    } else {
      router.push("/login")
    }
  },[AUTHENTICATED])

  return (
    <GlobalContext.Provider value={value}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      {
        (authenticated || AUTHENTICATED) ?
        // display regular pages
        <>
          <Header />
          <Component {...pageProps} />
        </>
        :
        (
          router.pathname === "/login" ?
          // display login page
          <Component {...pageProps} />
          :
          // still loading
          <Loading />
        )
      }
      </main>
    </GlobalContext.Provider>
  )
}
