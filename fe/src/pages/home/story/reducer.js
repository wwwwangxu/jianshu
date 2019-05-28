//引入immutable.js
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1
})


const reducer = (state = defaultState, action) => {
  if (action.type === "change_home_data") {
    return state.merge({
      topicList: action.topicList,
      articleList: action.articleList,
      recommendList: action.recommendList
    })
  }

  if (action.type === "add_article_list") {
    return state.merge({
      'articleList': state.get('articleList').concat(action.list),
      articlePage: action.page
    })
  }
  return state
}

export default reducer