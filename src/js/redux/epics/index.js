// @flow

import { combineEpics } from 'redux-observable'

import quizEpics from './quiz'

export default combineEpics(
  quizEpics
)
