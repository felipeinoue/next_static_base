import Header from "@/components/header";
import "@/styles/globals.css";
import Head from "next/head";
import { GlobalContext } from "../globals/lib";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DELETECOOKIE, GETCOOKIE } from "@/globals/functions";
import { BASE_PATH, COOKIE_TOKEN } from "@/globals/var";
import Loading from "@/components/loading";
import styles from "./index.module.css";
import { GET_USER } from "@/globals/apicalls";


export default function App({ Component, pageProps }) {
  const [AUTHENTICATED, SETAUTHENTICATED] = useState(false)
  const [TOKEN, SETTOKEN] = useState("")
  const router = useRouter()

  /*
  Global states
  */
  const value = {
    AUTHENTICATED,
    SETAUTHENTICATED,
    TOKEN,
  }

  const init = async (cookie_token)=>{
    /*
    init
    */
    const token_valid = await GET_USER(cookie_token)
    if (token_valid) {
      SETAUTHENTICATED(true)
      SETTOKEN(cookie_token)
    } else {
      DELETECOOKIE(COOKIE_TOKEN)
      router.push("/login")
    }
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
        <link rel="icon" href={`/${BASE_PATH}/favicon.ico`} />
      </Head>
      <main>
      {
        AUTHENTICATED ?
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
