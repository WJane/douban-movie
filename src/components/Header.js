import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import { browserHistory, Link } from 'react-router'

const style = {
  body: {

    height: '130px',
    margin: '0',
    width: '100%'
  },
  header: {
    width: '240px',
    height: '80px',


  },
  header_name: {
    color: '#fff',
    paddingTop: '30px',
    paddingLeft: '30px',
    fontSize: '1.5rem'
  },

  header_sub: {
    color: '#2959b2',
    paddingTop: '6px',
    paddingLeft: '30px',
    fontSize: '0.8rem'
  },

  links: {
    display: 'inline-block',
    width: '100px',
    height: '40px',
    backgroundColor: '#2959b2',
    color: '#fff',
    transform: 'skewX(-45deg)',
    textAlign: 'center',
    lineHeight: '40px',
    marginTop: '-60px'
  },
  lincon: {
    display: 'inline-block',
    transform: 'skewX(45deg)',
    color: '#fff',
    textDecoration: 'none'
  },
  route: {
    width: '650px',
    marginLeft: '35%'
  }
}

export class Header extends React.Component {
  render() {
    const tabList = ['TOP', 'NEW', 'BOXOFFICE']
    return (
      <div style={style.body}>
        <header style={style.header}>
          <div style={style.header_name}>DOUBAN MOVIE</div>
          <div style={style.header_sub}>BY REACT</div>
        </header>
        <div style={style.route}>
          <span style={style.links}><Link style={style.lincon} to="/">HOME</Link></span>
            {tabList.map((value, index) => {
              return <span style={style.links}><Link style={style.lincon} to={`/${value}`} key={index}>{value}</Link></span>
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
