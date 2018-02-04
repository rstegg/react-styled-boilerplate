// @flow

const initialState = {
  questions: [],
  answered: [],
  active: {},
  isLoading: false,
  error: null
}

export const answerQuestion = ({ question, answer }: { question: Object, answer: string })  =>
  ({ ...question, answer })

export const getNextQuestion = ({ question }: { question: Object }, questionsState: Array<Object>) =>
  questionsState[questionsState.indexOf(question) + 1] ?
  questionsState[questionsState.indexOf(question) + 1] : null

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
  case 'FETCH_QUIZ':
    return Object.assign({}, state, {
      questions: [],
      error: null,
      isLoading: true
    })
  case 'FETCH_QUIZ_SUCCESS':
    return Object.assign({}, state, {
      questions: action.payload.questions,
      active: action.payload.active,
      error: null,
      isLoading: false
    })
  case 'FETCH_QUIZ_FAILURE':
    return Object.assign({}, state, {
      questions: [],
      error: action.payload.error,
      isLoading: false
    })
  case 'ANSWER_QUESTION':
    return Object.assign({}, state, {
      answered: [
        ...state.answered,
        answerQuestion(action.payload)
      ],
      active: getNextQuestion(action.payload, state.questions)
    })
  case 'RESET_QUIZ':
    return initialState
  default:
    return state
  }
}
