import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware, ActionsObservable } from 'redux-observable'
import { fetchQuizEpic } from './quiz'
import { fetchQuiz } from '../actions/quiz'

const MOCK_RES = {"response_code":0,"results":[{"category":"Entertainment: Comics","type":"boolean","difficulty":"hard","question":"In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.","correct_answer":"False","incorrect_answers":["True"]},{"category":"General Knowledge","type":"boolean","difficulty":"hard","question":"&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"hard","question":"In Undertale, having a &quot;Fun Value&quot; set to 56-57 will play the &quot;Wrong Number Song Call&quot;.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Music","type":"boolean","difficulty":"hard","question":"The song &quot;Mystery Train&quot; was released by artist &quot;Little Junior&#039;s Blue Flames&quot; in 1953.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"hard","question":"The names of Roxas&#039;s Keyblades in Kingdom Hearts are &quot;Oathkeeper&quot; and &quot;Oblivion&quot;.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Politics","type":"boolean","difficulty":"hard","question":"Joko Widodo has appeared in the cover of a TIME magazine.","correct_answer":"True","incorrect_answers":["False"]},{"category":"History","type":"boolean","difficulty":"hard","question":"During the Winter War, the amount of Soviet Union soliders that died or went missing was five times more than Finland&#039;s.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Science: Mathematics","type":"boolean","difficulty":"hard","question":"L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Politics","type":"boolean","difficulty":"hard","question":"George Clinton, Vice President of the United States (1805-1812), is an ancestor of President Bill Clinton.","correct_answer":"False","incorrect_answers":["True"]},{"category":"General Knowledge","type":"boolean","difficulty":"hard","question":"Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.","correct_answer":"True","incorrect_answers":["False"]}]}

const epicMiddleware = createEpicMiddleware(fetchQuizEpic)
const mockStore = configureMockStore([epicMiddleware])

describe('fetchQuizEpic', () => {
  let store
  let scope

  beforeEach(() => {
    store = mockStore()
    scope = nock('https://opentdb.com')
      .get('/api.php?amount=10&difficulty=hard&type=boolean')

  })
  afterEach(() => {
    nock.cleanAll()
    epicMiddleware.replaceEpic(fetchQuizEpic)
  })

  it('produces the quiz model on success', () => {
    scope.reply(200, MOCK_RES)

    const action$ = ActionsObservable.of(fetchQuiz())

    return fetchQuizEpic(action$).toPromise()
      .then(actionReceived => {
        expect(actionReceived.type).toBe('FETCH_QUIZ_SUCCESS')
        expect(actionReceived.payload).toEqual({ questions: MOCK_RES.results, active: MOCK_RES.results[0] })
      })
  })


  it('produces the quiz model on failure', () => {
    scope.replyWithError({ error: 'Something went wrong. Please contact me if error persists!' })

    const action$ = ActionsObservable.of(fetchQuiz())

    return fetchQuizEpic(action$).toPromise()
      .then(actionReceived => {
        expect(actionReceived.type).toBe('FETCH_QUIZ_FAILURE')
        expect(actionReceived.payload).toEqual({ 'error': {
          'error': 'Something went wrong. Please contact me if error persists!',
         'response': undefined,
       }})
      })
  })
})
