import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import { browserHistory } from 'react-router'

export class App extends React.Component {
  render() {
    <div>aa</div>
  }
}

// App.propTypes = {
//   actions: PropTypes.object.isRequired
// }



const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
