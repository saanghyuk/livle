// Libraries
import React, { Component } from 'react';
import CheckAuth from './CheckAuth';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    CheckAuth(this.state.username, this.state.password)
      .then(res => console.log('성공적으로 로그인되었습니다.'))
      .catch(msg => console.log('오류가 발생하였습니다'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>USER NAME</p>
          <input
            type="text"
            name="username"
            value={this.state.username || ''}
            onChange={this.handleChange}
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <p>PASSWORD</p>
          <input
            type="password"
            name="password"
            value={this.state.password || ''}
            onChange={this.handleChange}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}
