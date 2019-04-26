import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM, 
    DELETE_STREAM,
    EDIT_STREAM  
} from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn  = (userId) => {
    return ({
        type: SIGN_IN,
        payload: userId
    });
};

export const signOut  = () => {
    return ({
        type: SIGN_OUT
    });
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });

    //programmatic navigation to get user back to streams screen using our custom history
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
    //put: updates the whole object
    //const response = await streams.put(`/streams/${id}`, formValues);
    //patch: updates some props of the object. (solves the api issue) using put the api clears the userId value
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });

    //programmatic navigation to get user back to streams screen using our custom history
    history.push('/');
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
}