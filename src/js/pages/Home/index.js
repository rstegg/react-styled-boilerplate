// @flow

import React, { Component } from 'react'
import PropTypes, { Props } from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Section from '../../elements/Section'
import Button from '../../elements/Button'
import Card from '../../elements/Card'

import { resetQuiz } from '../../redux/actions/quiz'

class Home extends Component<Props> {
  componentDidMount() {
    if (this.props.quiz.answered) {
      this.props.resetQuiz()
    }
  }
  render() {
    return (
      <Section>
        <Section.Container>
          <Section.Title>Welcome to the Trivia Challenge</Section.Title>
          <Section.Content>
          <Card>
            <Card.Header>
              <Card.Header.Title>
                You will be presented with 10 True or False questions.
              </Card.Header.Title>
            </Card.Header>
            <Card.Content>Can you score 100%?</Card.Content>
            <Card.Footer>
              <Button.FullWidth>
                <NavLink to='/quiz'>Begin</NavLink>
              </Button.FullWidth>
            </Card.Footer>
          </Card>
          </Section.Content>
        </Section.Container>
      </Section>
    )
  }
}

Home.propTypes = {
  quiz: PropTypes.object.isRequired,
  resetQuiz: PropTypes.func.isRequired,
}

const mapStateToProps = ({ quiz }) =>
({
  quiz
})

const mapDispatchToProps = dispatch =>
({
  resetQuiz: () => dispatch(resetQuiz())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
