import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { actionCreators } from './story';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollShow: false
    }
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleScrollShow)
  }

  handleScrollTop = () => {
    window.scrollTo(0, 0);
  }

  toggleScrollShow = () => {
    if (document.documentElement.scrollTop > 400) {
      this.setState({
        scrollShow: true
      })
    } else {
      this.setState({
        scrollShow: false
      })
    }
  }

  bindEvent = () => {
    window.addEventListener('scroll', this.toggleScrollShow)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src='https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.state.scrollShow && <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>}
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData: () => {
      const action = actionCreators.getHomeInfo();
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
