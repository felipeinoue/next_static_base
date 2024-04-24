
export function GETCOOKIE(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

export function SETCOOKIE(key, value) {
  /*
  string * string -> _
  */
  document.cookie = `${key}=${value};path=/`;
}

export function DELETECOOKIE(key) {
  /*
  string -> _
  */
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

export function SETCOOKIE_FOR_ONE_WEEK(key, value) {
  /*
  set cookie for 1 week
  */
  const now = new Date()
  const one_week_in_miliseconds = 7*24*60*60*1000
  const expireTime = now.getTime() + one_week_in_miliseconds
  now.setTime(expireTime)
  SETCOOKIE(key, value + ';expires='+now.toUTCString())
}