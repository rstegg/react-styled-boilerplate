// @flow

import { combineEpics } from 'redux-observable'
import {
  onFetchQuizSuccess,
  onFetchQuizFailure,
} from '../actions/quiz'

import su from 'superagent'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { path, head, pipe } from 'ramda'

const getResults = path([ 'body', 'results' ])
const getFirstResult = pipe(
  getResults,
  head
)

export const fetchQuizEpic = (action$: Observable) =>
  action$.ofType('FETCH_QUIZ')
    .mergeMap(() =>
      Observable.from(
        su.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
          .set('Accept', 'application/json')
      )
        .map(res => onFetchQuizSuccess(getResults(res), getFirstResult(res)))
        .catch(error => Observable.of(onFetchQuizFailure(error)))
    )

export default combineEpics(
  fetchQuizEpic
)
