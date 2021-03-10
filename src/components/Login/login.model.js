import axios from 'axios';
import xss from "xss";
import crypto from 'crypto';

const baseurl = localStorage.getItem('baseurl')
const token = localStorage.getItem('token')
const http = axios.create({
    baseURL: baseurl,
    headers: { 'token': token }
})

const Model = {}

Model.login = async (password) => {
    try{
        const url = `/login`;
        const hash = crypto.createHash('sha256').update(xss(password)).digest('base64');
        const response = await http.post(url, {
            password: hash
        })
        return response.data.isLogined;
    }catch(error){
        console.error(error)
        return false
    }
}

export default Model