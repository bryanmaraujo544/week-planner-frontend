import axios from 'axios';
import { parseCookies } from 'nookies';

export const api = axios.create({
    baseURL: 'https://week-planner-node.herokuapp.com/'
});

const { token } = parseCookies();


if (token) { 
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
