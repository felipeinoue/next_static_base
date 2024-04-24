
import { DEBUG } from "./var";


export async function LOGIN(email, password) {
  /*
  _ -> string || null
  */
  return fetch("https://dev.proj-mgmt.com/main/isapi.dll/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  .then(response=>{
    if (response.ok) {
      return response.json()
    } 
  })
  .then(result => {
    if (result) {
      if (DEBUG) {
        console.log(result[0])
      }
      return result[0]
    } else {
      return null
    }
  });
}


export async function GET_USER(token) {
  /*
  _ -> string || null
  */
  return fetch(`https://dev.proj-mgmt.com/main/isapi.dll/get_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      client_id: "9",
    }),
  })
  .then(response=>{
    if (response.ok) {
      return response.json()
    } 
  })
  .then(result => {
    if (result) {
      if (DEBUG) {
        console.log(result[0])
      }
      return result[0]
    } else {
      return null
    }
  });
}
