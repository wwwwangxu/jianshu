import { fromJS } from 'immutable';
const defaultState = fromJS({
  login: false
})

const reducer = (state = defaultState, action) => {
  if (action.type === 'change_login') {
    return state.set('login', action.value)
  }
  if (action.type === 'log_out') {
    return state.set('login', action.value)
  }
  return state
}

export default reducer