// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter as Router } from 'react-router-redux'

import HomeScreen from './pages/Home'
import QuizScreen from './pages/Quiz'
import ResultsScreen from './pages/Results'

import store, { history } from './store'

import Hero from './elements/Hero'

const RootRouter = () =>
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Hero>
          <Hero.Body>
            <Hero.Container>
              <Hero.Title>Ryan Stegmann</Hero.Title>
              <Hero.Subtitle>Mobile & Web App developer, Javascript Junkie, & Functional Fanatic</Hero.Subtitle>
            </Hero.Container>
          </Hero.Body>
        </Hero>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/quiz' component={QuizScreen} />
          <Route path='/results' component={ResultsScreen} />
        </Switch>
      </div>
    </Router>
  </Provider>

export default RootRouter
