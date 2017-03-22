import React, { PropTypes } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as detailActions from '../actions'
import { browserHistory, Link } from 'react-router'

const style = {
  links: {
    display: 'inline-block',
    width: '150px',
    height: '40px',
    backgroundColor: '#2959b2',
    color: '#fff',
    transform: 'skewX(-45deg)',
    textAlign: 'center',
    lineHeight: '40px',
    marginTop: '20px',
    marginLeft: '30px'
  },
  lincon: {
    display: 'inline-block',
    transform: 'skewX(45deg)',
    color: '#fff',
    textDecoration: 'none'
  },
  content: {
    width: '800px',
    margin: '20px auto',
    color: '#fff'
  }
}
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
        <p style={style.links}><Link style={style.lincon} to={`/`}>主页</Link><span style={style.lincon}>/详情页</span></p>
        <div style={style.content}>

          <div>名字：{detail.title}</div>
          <div>年份：{detail.year}</div>
          <div>国家：{detail.countries}</div>
          <div>类型：{detail.genres}</div>
          <div>原名：{detail.original_title}</div>
          <div>摘要：{detail.summary}</div>
        </div>
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
