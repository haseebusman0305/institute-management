//utils/auth.js
import axios from 'axios';

export const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const removeToken = () => {
    axios.defaults.headers.common['Authorization'] = '';
}
