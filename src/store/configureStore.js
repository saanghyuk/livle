import {createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from '../reducers/auth';

export default ()=>{
    const store = createStore(
        combineReducers({
            auth : authReducer,
            form: formReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}