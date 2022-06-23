import axios from 'axios';

const myaxios = axios.create({
    baseURL: "http://44.206.235.35:8080"
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
