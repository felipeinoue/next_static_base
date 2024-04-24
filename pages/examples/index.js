import { useContext, useEffect } from "react";
import { GlobalContext } from "../../globals/lib";
import styles from "./index.module.css";
import { GET_USER } from "@/globals/apicalls";
import { BASE_PATH, DEBUG } from "@/globals/var";

export default function Examples() {
  const {TOKEN} = useContext(GlobalContext);

  useEffect(()=>{
    /*
    on load
    */
  },[])

  const test = async () => {
    /*
    test api call
    */
    const user = await GET_USER(TOKEN)
  }

  return (
    <>
      {
        DEBUG ?
        <>
          Examples
          <br></br>
          <br></br>
          <div>global context access</div>
          <div>{TOKEN}</div>
          <br></br>
          <div>css</div>
          <div className={styles.hero}>module.CSS</div>
          <br></br>
          <div>image source example</div>
          <div>
            <img src={`/${BASE_PATH}/instagram.svg`}></img>
          </div>
          <br></br>
          <div>image css</div>
          <div className={styles.facebook}>background image</div>
          <br></br>
          <div>media web/mobile (mobile first!)</div>
          <div className={styles.main}>squeeze me</div>
          <br></br>
          <div>calling API</div>
          <button onClick={()=>{test()}}>BTN Test</button>
        </>
        :
        <>
          no hay
          <br></br>
          keine
        </>
      }
    </>
  );
}
