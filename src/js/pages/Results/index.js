// @flow

import * as React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { reduce } from 'ramda'

import Section from '../../elements/Section'
import Table from '../../elements/Table'
import Button from '../../elements/Button'
import Hero from '../../elements/Hero'
import QuestionResult from './QuestionResult'

import { hasCorrectAnswer, renderScoreIcon } from '../../utils/helpers'

const ResultsScreen = ({ answered }) =>
  <Section>
    <Section.Container>
      <Section.Title>{`You scored ${reduce(hasCorrectAnswer, 0, answered)}/${answered.length}`}</Section.Title>
      <Section.Content>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Heading>Score</Table.Heading>
              <Table.Cell>Question</Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { answered.map((answer, i) => <QuestionResult key={`answer-${i}`} icon={renderScoreIcon(answer)} question={answer.question} /> ) }
          </Table.Body>
        </Table>
        <Hero.Results>
          <Hero.Body>
            <Hero.ResultsContainer>
              <Hero.Subtitle>
                <Button>
                  <NavLink to='/'>Play Again?</NavLink>
                </Button>
              </Hero.Subtitle>
            </Hero.ResultsContainer>
          </Hero.Body>
        </Hero.Results>
      </Section.Content>
    </Section.Container>
  </Section>

ResultsScreen.propTypes = {
  answered: PropTypes.array.isRequired,
}

const mapStateToProps = ({ quiz }) =>
({
  answered: quiz.answered
})

export default connect(
  mapStateToProps
)(ResultsScreen)
