/**
 * Setup
 */
const url = {
    protocol: "http",
    server: "192.168.1.11",
    port: 3000
}
const baseurl = `${url.protocol}://${url.server}:${url.port}`;
const token = "63c7cd2f-4181-4896-9269-46956b65e291";

/**
 * Output
 */
const config = ()=>{
    return {
        baseurl: baseurl,
        token: token,
        pagesize: 10 
    }
}

export default config