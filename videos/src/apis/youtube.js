import axios from 'axios';

const KEY = 'AIzaSyDz_9ly_7dWfi7jP1hAK_3n8GOLr8oGv2g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});