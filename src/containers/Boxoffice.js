import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import { browserHistory } from 'react-router'
import List from '../components/List'
import Header from '../components/Header'

export class App extends React.Component {

  componentWillMount = () => {
    this.props.actions.getBox()

  }

  render() {
    const {state, actions} = this.props

    return (
      <div>
        <Header />
        <List theaters={state.movie.boxList} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
}

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
