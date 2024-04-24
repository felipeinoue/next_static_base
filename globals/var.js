
/*
Configuration
*/
export const BASE_PATH = "myapp" //search for myapp in the whole project and rename to the desired name [tbd]

/*
Vars
*/
export const DEBUG = process.env.NODE_ENV === "development"
export const COOKIE_TOKEN = BASE_PATH + "_token"
