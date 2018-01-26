import { equals, add } from 'ramda'

/*Global variable helpers*/
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = process.env.NODE_ENV === 'production'
export const reduxDevCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
export const hasReactDevTools = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
export const disableReactDevTools = () => { window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {} }

/*Styling helpers*/

export const hasCorrectAnswer = (acc, { correct_answer, answer }) =>
  equals(correct_answer, answer) ? add(1, acc) : acc

export const renderScoreIcon = ({ correct_answer, answer }) =>
  equals(correct_answer, answer) ? 'icon ion-happy-outline' : 'icon ion-sad-outline'

export const decodeHtml = html => {
  const text = document.createElement('textarea')
  const decodedHtml = decodeURIComponent(html)
  text.innerHTML = decodedHtml
  return text.value
}
