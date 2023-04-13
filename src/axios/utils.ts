import axios from './index';

export const setAuthHeader = (token: string) => {
    // update instance so that if I have a token then create the header
    // and this update to the object should be available in all of the files

    axios.defaults.headers.Authorization = `Bearer ${token}`;
}