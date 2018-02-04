import { equals, add } from 'ramda'

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
