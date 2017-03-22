import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import App from './containers/App'
import reducer from './reducers'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import Detail from './containers/Detail'
import Header from './components/Header'
import Top from './containers/Top'
import New from './containers/New'
import Box from './containers/Boxoffice'
import './App.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

render(
    <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Header}>
        <IndexRoute component={App}/>
      </Route>
      <Route path="/top" component={Top}></Route>
      <Route path="/new" component={New}></Route>
      <Route path="/boxoffice" component={Box}></Route>

      <Route path="/movie/:id" component={Detail}></Route>
    </Router>
  </Provider>,
    document.getElementById('root')
)
