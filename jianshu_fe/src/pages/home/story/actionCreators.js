import { fromJS } from 'immutable'
import axios from 'axios'

const getHomeAction = (result) => {
  return {
    type: 'change_home_data',
    topicList: fromJS(result.topicList),
    articleList: fromJS(result.articleList),
    recommendList: fromJS(result.recommendList),
  }
}

const addHomeList = (list, page) =>{
  console.log("list", list)
  return {
    type: "add_article_list",
    list: fromJS(list),
    page: fromJS(page)
  }
}

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('http://localhost:8080/api/homelist.json').then((res) => {
      const result = res.data.data;
      dispatch(getHomeAction(result));
    }).catch(() => console.log('get error')) 
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('http://localhost:8080/api/morelist.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1))
    }).catch(err => console.log('get error')) 
  }
}