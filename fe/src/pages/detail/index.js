import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  DetailWrapper,
  Header,
  Content
} from './style'
import { actionCreators } from './story';

class Detail extends Component {

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }

  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)