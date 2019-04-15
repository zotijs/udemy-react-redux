import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Stone River', duration: '20:01'},
        {title: 'Sky Valley', duration: '24:17'},
        {title: 'Village Wood', duration: '29:23'},
        {title: 'Repo', duration: '23:41'},
        {title: 'Reverse Repo', duration: '23:45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;    
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});