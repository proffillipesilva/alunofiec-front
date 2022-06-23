import axios from 'axios';

const HOST = process.env.MYSERVER_IP || "http://localhost";
const PORT = process.env.MYSERVER_PORT || "8080"; 

const myaxios = axios.create({
    baseURL: HOST + ":" + PORT;
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
