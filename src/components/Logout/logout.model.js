import axios from 'axios';

const baseurl = localStorage.getItem('baseurl')
const token = localStorage.getItem('token')
const http = axios.create({
    baseURL: baseurl,
    headers: { 'token': token }
})

const Model = {}

Model.logout = async () => {
    try{
        const url = `/login`;
        const response = await http.delete(url);
        return response.data.isLogout;
    }catch(error){
        console.error(error);
        return false;
    }
}

export default Model;