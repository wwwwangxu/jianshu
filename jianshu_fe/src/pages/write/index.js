import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    if (this.props.loginState) {
      return (
        <div>开始写文章吧~</div>
      )
    } else {
      return (
        <Redirect to='/login' />
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginState: state.getIn(['login', 'login'])
  }
}

export default connect(mapStateToProps, null)(Write)