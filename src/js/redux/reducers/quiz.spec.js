import reducer, { answerQuestion, getNextQuestion } from './quiz'

const MOCK_RESULTS = [{"category":"History","type":"boolean","difficulty":"hard","question":"Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Comics","type":"boolean","difficulty":"hard","question":"In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"hard","question":"The first &quot;Metal Gear&quot; game was released for the PlayStation 1.","correct_answer":"False","incorrect_answers":["True"]},{"category":"General Knowledge","type":"boolean","difficulty":"hard","question":"Pluto is a planet.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"hard","question":"All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; on its initial release: House, Clubhouse, Border, Consulate.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Science & Nature","type":"boolean","difficulty":"hard","question":"The chemical element Lithium is named after the country of Lithuania.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Politics","type":"boolean","difficulty":"hard","question":"Nazi Germany surrendered on Harry Truman&#039;s birthday while he was president.","correct_answer":"True","incorrect_answers":["False"]},{"category":"History","type":"boolean","difficulty":"hard","question":"During the Winter War, the amount of Soviet Union soliders that died or went missing was five times more than Finland&#039;s.","correct_answer":"True","incorrect_answers":["False"]},{"category":"General Knowledge","type":"boolean","difficulty":"hard","question":"Stagecoach owned &quot;South West Trains&quot; before losing the rights to FirstGroup and MTR in March of 2017.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"hard","question":"The weapon Clint Eastwood uses in &quot;Dirty Harry&quot; was a .44 Automag.","correct_answer":"False","incorrect_answers":["True"]}]

describe('quiz reducer', () => {
  it('should return the correct next question', () => {
    expect(
      getNextQuestion({ question: MOCK_RESULTS[0] }, MOCK_RESULTS)
    ).toEqual(
      MOCK_RESULTS[1]
    )
  })

  it('should return null when no next question', () => {
    expect(
      getNextQuestion({ question: MOCK_RESULTS[MOCK_RESULTS.length - 1] }, MOCK_RESULTS)
    ).toEqual(
      null
    )
  })

  it('should answer a question', () => {
    expect(
      answerQuestion({ question: MOCK_RESULTS[0], answer: 'True' })
    ).toEqual({ ...MOCK_RESULTS[0], answer: 'True' })
  })

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      questions: [],
      answered: [],
      active: {},
      isLoading: false,
      error: null
    })
  })

  it('should handle FETCH_QUIZ', () => {
    expect(
      reducer({
        questions: [],
        answered: [],
        active: {},
        isLoading: false,
        error: null
      }, {
        type: 'FETCH_QUIZ'
      })
    ).toEqual({
      questions: [],
      answered: [],
      active: {},
      error: null,
      isLoading: true
    })
  })

  it('should handle FETCH_QUIZ_SUCCESS', () => {
    expect(
      reducer({
        questions: [],
        answered: [],
        active: {},
        error: null,
        isLoading: true
      }, {
        type: 'FETCH_QUIZ_SUCCESS',
        payload: {
          questions: MOCK_RESULTS,
          active: MOCK_RESULTS[0]
        }
      })
    ).toEqual({
      questions: MOCK_RESULTS,
      answered: [],
      active: MOCK_RESULTS[0],
      error: null,
      isLoading: false
    })
  })

  it('should handle FETCH_QUIZ_FAILURE', () => {
    expect(
      reducer({
        questions: [],
        answered: [],
        active: {},
        error: null,
        isLoading: true
      }, {
        type: 'FETCH_QUIZ_FAILURE',
        payload: {
          error: 'Something went wrong. Please contact me if error persists!'
        }
      })
    ).toEqual({
      questions: [],
      answered: [],
      active: {},
      error: 'Something went wrong. Please contact me if error persists!',
      isLoading: false
    })
  })

  it('should handle ANSWER_QUESTION', () => {
    expect(
      reducer({
        questions: MOCK_RESULTS,
        answered: [],
        active: {},
        error: null,
        isLoading: false
      }, {
        type: 'ANSWER_QUESTION',
        payload: {
          question: MOCK_RESULTS[0],
          answer: 'True'
        }
      })
    ).toEqual({
      questions: MOCK_RESULTS,
      answered: [ answerQuestion({ question: MOCK_RESULTS[0], answer: 'True' }) ],
      active:  getNextQuestion({ question: MOCK_RESULTS[0] }, MOCK_RESULTS),
      error: null,
      isLoading: false
    })
  })

  it('should handle RESET_QUIZ', () => {
    expect(
      reducer({
        questions: MOCK_RESULTS,
        answered: [ { ...MOCK_RESULTS[0], answer: 'True' } ],
        active: MOCK_RESULTS[1],
        error: null,
        isLoading: false
      }, {
        type: 'RESET_QUIZ'
      })
    ).toEqual({
      questions: [],
      answered: [],
      active: {},
      error: null,
      isLoading: false
    })
  })

})
