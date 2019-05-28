import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from'./story'

class Login extends PureComponent {
  render() {
    if (!this.props.loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={el => {this.account = el}} />
            <Input placeholder="密码" type="password" ref={el => {this.password = el}} />
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return (
        <Redirect to='/' />
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginState: state.getIn(['login', 'login'])
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    login(accountEl, passwordEl) {
      dispatch(actionCreators.login(accountEl.value, passwordEl.value))
    }
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Login)