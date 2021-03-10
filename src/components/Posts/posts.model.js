import axios from 'axios';
import xss from "xss";

const baseurl = localStorage.getItem('baseurl')
const token = localStorage.getItem('token')
const http = axios.create({
    baseURL: baseurl,
    headers: { 'token': token }
})

const Model = {}

Model.get = async (id) => {
    try {
        const url = `/posts/id/${id}`;
        const response = await http.get(url);
        const data = {
            folder: response.data.folder,
            title: response.data.title
        }
        return data;
    } catch (error) {
        console.error(error)
        return false
    }
}

Model.list = async (page, pagesize) => {
    try {
        const url = `/posts/page/${page}/pagesize/${pagesize}`;
        const response = await http.get(url);
        if (response.data.success === true) {
            return response.data.list;
        } else {
            return response.data.success;
        }
    } catch (error) {
        console.error(error)
        return false
    }
}

Model.create = async (data) => {
    try {
        const url = `/posts`;
        const response = await http.post(url, {
            title: xss(data.title).trim(),
            folder: xss(data.folder).trim()
        })
        return response.data.success;
    } catch (error) {
        console.error(error)
        return false
    }
}

Model.modify = async (id, data) => {
    try {
        const url = `/posts/id/${id}`;
        const response = await http.put(url, {
            title: xss(data.title).trim(),
            folder: xss(data.folder).trim()
        });
        return response.data.success;
    } catch (error) {
        console.error(error)
        return false
    }
}

Model.remove = async (id) => {
    try {
        const url = `/posts/id/${id}`;
        const response = await http.delete(url);
        return response.data.success;
    } catch (error) {
        console.error(error)
        return false;
    }
}

Model.pages = async (pagesize) => {
    try {
        const url = `/posts/total`;
        const response = await http.get(url);
        const count = response.data.total;
        const pages = Math.ceil(count / pagesize);
        return { pages: pages }
    } catch (error) {
        console.error(error)
        return false;
    }
}

export default Model;