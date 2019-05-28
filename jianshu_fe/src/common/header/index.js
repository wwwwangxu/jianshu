import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './story'
import { actionCreators as loginActionCreators } from '../../pages/login/story'
import { Link } from 'react-router-dom'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,  
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'

class Header extends Component {

  getListArea = () => {
    const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
    let newList = list.toJS()
    let pageList = [];
    for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
      pageList.push(<SearchInfoItem key={ newList[i] }>{newList[i]}</SearchInfoItem>)

    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spin)}}>
              <i className="iconfont" ref={el => this.spin = el}>&#xe62d;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocused, handleInputBlured, list, login } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />  
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            !login ? 
            <Link to='/login'>
              <NavItem className='right'>登录</NavItem> 
            </Link>
            : <NavItem onClick={this.props.logout} className='right'>退出</NavItem>
          }
          <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames='slide'>
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={() => {handleInputFocused(list)}}
                onBlur={handleInputBlured}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont iconsearch' : 'iconfont iconsearch'}>&#xe6cf;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'><i className="iconfont">&#xe617;</i>写文章</Button>
          </Link>
          { !login && <Button className='reg'>注册</Button> }
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocused: (list) => {
      const action = actionCreators.searchFocus();
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(action);
    },
    handleInputBlured: () => {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage: (page, totalPage, spin) => {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");
      if (originAngle) {
        originAngle = parseInt(originAngle);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (360 + originAngle) + "deg)";

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout: () => {
      dispatch(loginActionCreators.logout())
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)