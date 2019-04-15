import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

//ASYNCHRONOUS Action Creator using a middleware (redux-thunk)
// export const fetchPosts = () => {
//     return async (dispatch) => {
//         const response = await jsonPlaceHolder.get('/posts'); 

//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         });
//     };
// };

//REFACTORED fetchPosts
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts'); 
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

//SYNCHRONOUS Action Creator
// export const selectPost = () => {
//     return {
//         type: 'SELECT_POST'
//     };
// };

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

//solve overfetching using lodash memoize -- app used to make a request for the user data for each post
// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });
//(end) solve overfetching using lodash memoize

//alternative overfetch solution -- parent action creator
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//     await dispatch(fetchPosts());

//     //get all unique ids from posts
//     const userIds = _.uniq(_.map(getState().posts, 'userId'));
//     userIds.forEach(id => dispatch(fetchUser(id)));
// }

//REFACTOR using lodash chain of the fetchPostsAndUsers
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    //using chain the result of the method called are passed as the first argument of the next method
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value() //execute the chain

}


//(end) alternative overfetch solution