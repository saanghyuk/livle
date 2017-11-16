import {LOGIN} from '../actions/auth'


export default (state={}, action) => {
    switch(action.type){
        case LOGIN:
            console.log('reducer');
            console.log(action.payload);
            console.log(`reducer error: ${action.error}`);
            return action.payload;
        default:
            return state;
    }
}