import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000/zones',  // Make sure this matches your Django server's URL and port
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;
