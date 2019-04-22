import _ from 'lodash';
import {  
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM, 
    DELETE_STREAM,
    EDIT_STREAM  
} from '../actions/types';

//it's better to keep the state in an object keyed by id (ease of use, performance, easier CRUD ops)
//https://stackoverflow.com/questions/38445006/state-as-array-of-objects-vs-object-keyed-by-id

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM: 
            return _.omit(state, action.payload);
        default: 
            return state;
    }
};