import React, { Component } from 'react';
import { withRouter } from './components/withRouter';
import { Dispatch } from 'redux';
import { connect, MapDispatchToProps } from 'react-redux';
import { RootState, loginRequest, LoginRequest } from './modules';
interface State {
  idInput: string;
  pwInput: string;
}

interface DispatchProps {
  loginRequest: typeof loginRequest;
}
// interface RouterProps {
//   navigate: (e: string) => void;
// }
type Props = DispatchProps;
class Login extends Component<Props> {
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
    // const { navigate } = this.props;
    const { loginRequest } = this.props;
    const payload = { email: idInput, password: pwInput };
    e.preventDefault();
    loginRequest(payload);
    // fetch(`http://localhost:9001/api/login/users`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: idInput,
    //     password: pwInput,
    //   }),
    // })
    // .then(response => response.json())
    // .then(response => {
    //   if (response.success === true) {
    //     localStorage.setItem('token', response.result.token);
    //     console.log(localStorage);
    //     navigate('/todolist');
    //   } else alert('아이디와 비밀번호를 다시 확인하세요');
    // });
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
// export default withRouter(Login);

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  loginRequest: payload => dispatch(loginRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
