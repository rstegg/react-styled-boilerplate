// @flow

import React, { Component } from 'react'
import PropTypes, { Props } from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { length } from 'ramda'

import Section from '../../elements/Section'
import Button from '../../elements/Button'
import Card from '../../elements/Card'

import { resetQuiz } from '../../redux/actions/quiz'

class Home extends Component<Props> {
  componentDidMount() {
    if (length(this.props.answered)) {
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
  answered: PropTypes.array.isRequired,
  resetQuiz: PropTypes.func.isRequired,
}

/**/
const mapStateToProps = ({ quiz }) =>
({
  answered: quiz.answered
})

const mapDispatchToProps = dispatch =>
({
  resetQuiz: () => dispatch(resetQuiz())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
