import axios from 'axios';

const HOST = process.env.REACT_APP_MYSERVER_HOST || "http://localhost:8080";

const myaxios = axios.create({
    baseURL: HOST
})

myaxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token){
        config.headers['Authorization'] = "Bearer " + token;
    };
    return config;
}, (error) => {
    return Promise.reject(error);
})


export default myaxios;
