import axios from 'axios';

export const LOGIN= 'LOGIN';
export const LOGOUT='LOGOUT';

const URL = '05jaeecklb.execute-api.ap-northeast-2.amazonaws.com';


export const startLogin = auth => {
    let errorMessage = null;

    let response = axios.get(
        `${URL}/partner/session`,
        { params: auth }
    ).catch(err => {
        console.log('########## error occured ##########');
        if(err.response.status === 404) {
            errorMessage = 'Page Not Found'
        } else if(err.response.status === 400) {
            errorMessage = 'Wrong Id or Password'
        } else if(err.response.status === 403) {
            errorMessage = 'There no one like you'
        }
    });

    return ({
        type: LOGIN,
        payload: response,
        error: errorMessage,
    });
};



export const logout =()=>({
    type: LOGOUT
});

export const startLogout=()=>{

};
