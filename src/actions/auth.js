

export const LOGIN= 'LOGIN';
export const LOGOUT='LOGOUT';

export const login=(sanghyuk)=>({
    type: LOGIN,
    sanghyuk
});




export const logout =()=>({
    type: LOGOUT
});

export const startLogin = () =>{
  console.log('Start Log in!')
};

export const startLogout=()=>{

};
