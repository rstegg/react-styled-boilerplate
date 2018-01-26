// @flow

import React from 'react'
import { render } from 'react-dom'

import RootRouter from './router'

const container = document.querySelector('#root')

if (!container) {
  throw new Error('no container element')
}

render(
  <RootRouter />,
  container
)
