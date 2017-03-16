import React, { PropTypes } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as detailActions from '../actions'
import { browserHistory, Link } from 'react-router'

class Detail extends React.Component {
  state = {
    summary: ''
  }

  componentWillMount = () => {
    const { getDetail, route } = this.props

    getDetail(route.params.id)

  }



  render() {
    const {state} = this.props
    const detail = state.movie.detail
    const content = detail.summary ||''


    return (
      <div>
        <p><Link to={`/`}>主页</Link>/详情页</p>

        <div>{detail.summary}</div>
        <div>{detail.title}</div>
        <div>{detail.year}</div>
        <div>{detail.countries}</div>
        <div>{detail.genres}</div>
        <div>{detail.original_title}</div>

      </div>
    )
  }
}


const mapStateToProps = (state, option) => ({
  state: state,
  route: option
})

export default connect(
  mapStateToProps,
  detailActions
)(Detail)
