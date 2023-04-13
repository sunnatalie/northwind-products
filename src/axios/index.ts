import axios from "axios";
import { BASE_API_URL } from "../config";

// create one instance of axios instead of two different ones

const axiosCustomInstance = axios.create({
    baseURL: BASE_API_URL //eventually, this interceptor will make the base url automatic in every call to the api
});

/**
 * Axios interceptors
 * 1 request
 * 2 response
 */

// axiosCustomInstance.interceptors.request.use((request) => {
//     console.log(request);

//     return request;
// });
axiosCustomInstance.interceptors.request.use(
    request => {
        return request;
    },
    err => {

        if(err.response.status === 401){
            console.log('you shall not pass request!')
        }
        console.log('this is a request error',err)
        return Promise.reject(err);
    }
);

axiosCustomInstance.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        if(err.response.status === 401){
            console.log('you shall not pass response!')
        }
        console.log('this is a response error',err)
        return Promise.reject(err); //meant to pass the error on and to be used and taken care of in other components
    }
);

export default axiosCustomInstance;

// every time we import axios, we should import it from this file