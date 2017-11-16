
import React from 'react'
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth'

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state={id: '', password: ''};

        this.handleIdChange=this.handleIdChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleIdChange(event){
        console.log(event.target.value);
        this.setState({id: event.target.value})
    }

    handlePasswordChange(event){
        console.log(event.target.value);
        this.setState({password: event.target.value})
    }
    handleSubmit = (event) => {
        //
        event.preventDefault();
        this.props.startLogin(this.state);
        // this.props.startLogin();
    };


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>Email</div>
                    <input onChange={this.handleIdChange} value={this.state.id} name="email" type="text" placeholder="email" />
                    <input onChange={this.handlePasswordChange} value={this.state.password} name="password" type="password" placeholder="password" />

                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }};




const mapDispatchToProps = (dispatch) => ({
   startLogin: (props) => dispatch(startLogin(props))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);