import axios from 'axios';

const url = 'http://localhost'
const port = 3002;

export default axios.create({
    baseURL: `${url}:${port}`,
});