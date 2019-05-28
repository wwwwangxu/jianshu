import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
import { actionCreators } from '../story';

class List extends Component {
  render() {
    return (
      <div> 
        {
          this.props.articleList.map((item, index)=> {
            return (
              <ListItem key={index}>
                <img className='pic' alt='' src={item.get('imgUrl')} />
                <Link to={'/detail/' + item.get('id')}>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </Link>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => this.props.getMoreList(this.props.articlePage)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)