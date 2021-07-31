import axios, { AxiosInstance } from 'axios';

const cefaloMovieManiaInstance: AxiosInstance = axios.create({
    baseURL: process.env.CEFALO_API_BASE_URL,
});

export { cefaloMovieManiaInstance };
