import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import App from './containers/App'
import reducer from './reducers'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

render(
    <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/"  >
        <IndexRoute component={App}/>
      </Route>

    </Router>
  </Provider>,
    document.getElementById('root')
)
