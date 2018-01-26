// @flow
import * as actions from './quiz'

const MOCK_RESULTS = [{"category":"History","type":"boolean","difficulty":"hard","question":"Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Comics","type":"boolean","difficulty":"hard","question":"In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"hard","question":"The first &quot;Metal Gear&quot; game was released for the PlayStation 1.","correct_answer":"False","incorrect_answers":["True"]},{"category":"General Knowledge","type":"boolean","difficulty":"hard","question":"Pluto is a planet.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"hard","question":"All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; on its initial release: House, Clubhouse, Border, Consulate.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Science & Nature","type":"boolean","difficulty":"hard","question":"The chemical element Lithium is named after the country of Lithuania.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Politics","type":"boolean","difficulty":"hard","question":"Nazi Germany surrendered on Harry Truman&#039;s birthday while he was president.","correct_answer":"True","incorrect_answers":["False"]},{"category":"History","type":"boolean","difficulty":"hard","question":"During the Winter War, the amount of Soviet Union soliders that died or went missing was five times more than Finland&#039;s.","correct_answer":"True","incorrect_answers":["False"]},{"category":"General Knowledge","type":"boolean","difficulty":"hard","question":"Stagecoach owned &quot;South West Trains&quot; before losing the rights to FirstGroup and MTR in March of 2017.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"hard","question":"The weapon Clint Eastwood uses in &quot;Dirty Harry&quot; was a .44 Automag.","correct_answer":"False","incorrect_answers":["True"]}]


describe('actions', () => {
  it('should create an action to reset quiz', () => {
    const expectedAction = {
      type: 'RESET_QUIZ'
    }
    expect(actions.resetQuiz()).toEqual(expectedAction)
  })
  it('should create an action to fetch quiz', () => {
    const expectedAction = {
      type: 'FETCH_QUIZ'
    }
    expect(actions.fetchQuiz()).toEqual(expectedAction)
  })
  it('should create an action to succeed a fetch with the expected payload', () => {
    const questions = MOCK_RESULTS
    const active = MOCK_RESULTS[MOCK_RESULTS.length - 1]
    const expectedAction = {
      type: 'FETCH_QUIZ_SUCCESS',
      payload: {
        questions,
        active
      }
    }
    expect(actions.onFetchQuizSuccess(questions, active)).toEqual(expectedAction)
  })
  it('should create an action to error a failed quiz fetch', () => {
    const error = 'Something went wrong. Please contact me if error persists!'
    const expectedAction = {
      type: 'FETCH_QUIZ_FAILURE',
      payload: {
        error
      }
    }
    expect(actions.onFetchQuizFailure(error)).toEqual(expectedAction)
  })
  it('should create an action to answer a question', () => {
    const question = MOCK_RESULTS[MOCK_RESULTS.length - 1]
    const answer = 'True'
    const expectedAction = {
      type: 'ANSWER_QUESTION',
      payload: {
        question,
        answer
      }
    }
    expect(actions.answerQuestion(question, answer)).toEqual(expectedAction)
  })
})
