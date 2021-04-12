import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-demo-8d4f0.firebaseio.com/'
});

export default instance;
