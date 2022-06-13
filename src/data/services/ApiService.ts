import axios from 'axios';
import { json } from 'stream/consumers';

export const ApiService = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json'

    }

})