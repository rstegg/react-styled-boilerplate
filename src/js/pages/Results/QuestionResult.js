// @flow

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { decodeHtml } from '../../utils/helpers'

import Table from '../../elements/Table'

const ColoredHeading = styled(Table.Heading)`
  color: ${props => props.icon === 'icon ion-happy-outline' ? 'hsl(171, 100%, 41%)' : 'hsl(348, 100%, 61%)' }
`

const QuestionResult = ({ icon, question }: { icon: string, question: string }) =>
  <Table.Row>
    <ColoredHeading icon={icon}>
      <i className={icon} />
    </ColoredHeading>
    <Table.Cell>{decodeHtml(question)}</Table.Cell>
  </Table.Row>

QuestionResult.propTypes = {
  icon: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
}

export default QuestionResult
