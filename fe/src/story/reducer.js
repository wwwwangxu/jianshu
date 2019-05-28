import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/story'
import { reducer as homeReducer } from '../pages/home/story'
import { reducer as detailReducer } from "../pages/detail/story"
import { reducer as loginReducer } from '../pages/login/story'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducer