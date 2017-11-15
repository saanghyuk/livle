
import React from 'react'
import { reduxForm } from 'redux-form'

import {startLogin} from '../actions/auth'


class LoginPage extends React.Component{


    onSubmit(props){
        console.log(props);
        this.props.startLogin(props);
    }

    render(){
        const {fields: {id, password}, handleSubmit}=this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Login!</h3>
                <div>
                    <label>ID</label>
                    <input type="text" {...id}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" {...password}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }}


const mapDispatchToProps=(dispatch)=>({
   startLogin: (props)=>dispatch(startLogin(props))
});


export default reduxForm({
    form: 'LoginForm',
    fields: ['id', 'password'],
}, null, mapDispatchToProps)(LoginPage)
