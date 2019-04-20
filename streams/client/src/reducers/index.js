import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //rename redux-form package reducer for ease of use
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer //always assign the redux-form reducer to a key of form
});