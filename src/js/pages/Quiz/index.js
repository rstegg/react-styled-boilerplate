// @flow

import React, { Component } from 'react'
import PropTypes, { Props } from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { length } from 'ramda'

import Card from '../../elements/Card'
import Section from '../../elements/Section'
import Loader from '../../elements/Loader'

import { fetchQuiz, answerQuestion } from '../../redux/actions/quiz'

import { decodeHtml } from '../../utils/helpers'

const TrueButton = styled(Card.Footer.Item)`
  color: hsl(141, 71%,  48%)
`

const FalseButton = styled(Card.Footer.Item)`
  color: hsl(348, 100%, 61%)
`

class QuizScreen extends Component<Props> {
  componentWillMount() {
    this.props.fetchQuiz()
  }
  answerActive(question, answer) {
    const { answerQuestion } = this.props
    answerQuestion(question, answer)
  }
  render() {
    const { isLoading, questions, answered, active } = this.props
    if (!active) {
      return <Redirect to='/results' />
    }
    if (isLoading) {
      return (
        <Section>
          <Section.Content>
            <Loader className='icon ion-load-c' />
          </Section.Content>
        </Section>
      )
    }
    return (
      <Section>
        <Section.Container>
          <Section.Title>{`${length(answered)}/${length(questions)}`}</Section.Title>
          <Section.Content>
            <Card>
              <Card.Header>
                <Card.Header.Title>
                  {active.category}
                </Card.Header.Title>
              </Card.Header>
              <Card.Content>{decodeHtml(active.question)}</Card.Content>
              <Card.Footer>
                <TrueButton href='#' onClick={() => this.answerActive(active, 'True')}>True</TrueButton>
                <FalseButton href='#' onClick={() => this.answerActive(active, 'False')}>False</FalseButton>
              </Card.Footer>
            </Card>
          </Section.Content>
        </Section.Container>
      </Section>
    )
  }
}

QuizScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
  answered: PropTypes.array.isRequired,
  active: PropTypes.object,
  fetchQuiz: PropTypes.func.isRequired,
  answerQuestion: PropTypes.func.isRequired,
}

const mapStateToProps = ({ quiz }) =>
({
  isLoading: quiz.isLoading,
  questions: quiz.questions,
  answered: quiz.answered,
  active: quiz.active
})

const mapDispatchToProps = dispatch =>
({
  fetchQuiz: () => dispatch(fetchQuiz()),
  answerQuestion: (question, answer) => dispatch(answerQuestion(question, answer)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen)
