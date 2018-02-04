import { add } from 'ramda'
import { hasCorrectAnswer, renderScoreIcon, decodeHtml } from './helpers'

describe('helper hasCorrectAnswer', () => {
  it('should accumulate a correct answer', () => {
    expect(
      hasCorrectAnswer(0, { correct_answer: 'True', answer: 'True' })
    ).toEqual(
      add(1, 0)
    )
  })

  it('should not accumulate a wrong answer', () => {
    expect(
      hasCorrectAnswer(1, { correct_answer: 'False', answer: 'True' })
    ).toEqual(
      add(0, 1)
    )
  })
})

describe('helper renderScoreIcon', () => {
  it('should render the truthy icon for correct answers', () => {
    expect(
      renderScoreIcon({ correct_answer: 'True', answer: 'True' })
    ).toEqual(
      'icon ion-happy-outline'
    )
  })
  it('should render the falsey icon for wrong answers', () => {
    expect(
      renderScoreIcon({ correct_answer: 'False', answer: 'True' })
    ).toEqual(
      'icon ion-sad-outline'
    )
  })
})

describe('helper decodeHtml', () => {
  it('should render the single and double quotes', () => {
    expect(
      decodeHtml('All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; on its initial release: House, Clubhouse, Border, Consulate.')
    ).toEqual(
      `All of these maps were in "Tom Clancy's Rainbow Six Siege" on its initial release: House, Clubhouse, Border, Consulate.`
    )
  })
})
