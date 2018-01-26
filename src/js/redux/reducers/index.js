// @flow

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import quiz from './quiz'

export default combineReducers({
  quiz,
  router: routerReducer
})
