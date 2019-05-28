import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem,
} from '../style'

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item) => {
            return (
              <TopicItem key={item.get('title')}>
                <img alt='' className='topic-pic' src={item.get('imgUrl')} />
                {item.get('title')}
              </TopicItem>
            )
          })
        } 
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

const mapDispatchToprops = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Topic)