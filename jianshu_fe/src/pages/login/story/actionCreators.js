import axios from 'axios';
import { fromJS } from 'immutable';

const changeLogin = () => {
  return {
    type: 'change_login',
    value: fromJS(true)
  }
}

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('http://localhost:8080/api/login.json?account=' + account + '&password=' + password).then(res => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin())
      } else {
        console.log('登录失败')
      }
    })
  }
}

export const logout = () => {
  return {
    type: 'log_out',
    value: false
  }
}