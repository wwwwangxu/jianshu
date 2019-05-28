import axios from 'axios';
import { fromJS } from 'immutable';

const changeDetail = (result) => {
  return {
    type: 'change_detail',
    title: fromJS(result.title),
    content: fromJS(result.content)
  }
}

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      const result = res.data.data;
      dispatch(changeDetail(result))
    }).catch(() => console.log('error'))
  }
}