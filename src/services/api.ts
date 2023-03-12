import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
        baseURL: 'http://localhost:3001/'//`${API_URL}`
    })

export default api;
