import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import { browserHistory, Link } from 'react-router'

export class Header extends React.Component {
  render() {
    const tabList = ['top', 'new', 'boxoffice']
    return (
      <div>
        <div>
          <Link to="/">首页</Link>
            {tabList.map((value, index) => {
              return <Link to={`/${value}`} key={index}>{value}</Link>
            })
          }
        </div>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state
})

export default connect(
  mapStateToProps,
  Actions
)(Header)
