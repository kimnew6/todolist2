import React, { Component, MouseEventHandler } from 'react';

interface State {
  idInput: string;
  pwInput: string | number;
}
class Login extends Component {
  state: State = {
    idInput: '',
    pwInput: '',
  };

  updateInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitUserInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { idInput, pwInput } = this.state;
    e.preventDefault();

    fetch(`http://localhost:10001/api/login/users`, {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          localStorage.setItem('token', response.result.token);
          return console.log(response);
          // } else alert('아이디와 비밀번호를 다시 확인하세요');
        } else console.log(response);
      });
  };
  render() {
    const { idInput, pwInput } = this.state;
    return (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        className="login"
      >
        <h1>LuluZoe's Todolist</h1>
        <form
          style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
          className="loginForm"
        >
          <input
            type="email"
            placeholder="이메일"
            name="idInput"
            onChange={this.updateInputs}
          />
          <input
            type="password"
            placeholder="비밀번호"
            name="pwInput"
            onChange={this.updateInputs}
          />
          <button type="submit" onClick={this.submitUserInfo}>
            로그인
          </button>
        </form>
      </section>
    );
  }
}
export default Login;