import axios from 'axios';
import xss from "xss";

const baseurl = localStorage.getItem('baseurl')
const token = localStorage.getItem('token')
const http = axios.create({
    baseURL: baseurl,
    headers: { 'token': token }
})

const Model = {}

Model.list = () => {
    return ['facebook', 'instagram', 'github', 'twitter', 'whatsapp']
}

Model.get = async (key) => {
    try{
        const url = `/fields/key/${key}`;
        const response = await http.get(url);
        const data = response.data.pair.text;
        return data
    }catch(error){
        console.error(error)
        return false
    }
}

Model.update = async (key, text) => {
    try{
        const url = `/fields/key/${key}`;
        const response = await http.put(url, { text: xss(text.trim()) })
        if (response.data.success === true) {
            return true
        } else {
            return false
        }
    }catch(error){
        console.error(error)
        return false
    }
}

export default Model;