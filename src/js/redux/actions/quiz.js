// @flow

export const resetQuiz = () =>
({
  type: 'RESET_QUIZ'
})

export const fetchQuiz = () =>
({
  type: 'FETCH_QUIZ'
})

export const onFetchQuizSuccess = (questions: Object[], active: Object) =>
({
  type: 'FETCH_QUIZ_SUCCESS',
  payload: {
    questions,
    active
  }
})

export const onFetchQuizFailure = (error: string) =>
({
  type: 'FETCH_QUIZ_FAILURE',
  payload: {
    error
  }
})

export const answerQuestion = (question: Object, answer: string) =>
({
  type: 'ANSWER_QUESTION',
  payload: {
    question,
    answer,
  }
})
