import axios from 'axios';
import { parseCookies } from 'nookies';

export const api = axios.create({
    baseURL: 'https://week-planner-node.herokuapp.com/'
    // baseURL: 'http://localhost:5000'
});

const { token } = parseCookies();


if (token) { 
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
