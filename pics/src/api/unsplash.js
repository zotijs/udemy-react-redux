import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 623164348b2e4822b5df817eaae88299b90b5f93269971a25e0ec6603455c21f'
    }
});