import axios from 'axios';


export default axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2bGY506FQkLr-Ie3kk10WH6_asLgx67jwokNNubPo80'
    }
});