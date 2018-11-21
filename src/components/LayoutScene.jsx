import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'

import Background from 'components/Background'
import Header from 'components/Header'
import Container from 'components/Container'

import IndexScene from 'components/IndexScene'
import AuthLayout from './@auth/AuthLayout'

const LayoutScene = () =>
  <div>
    <Background>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={IndexScene} />
          <Route path="/auth" component={AuthLayout} />
        </Switch>
      </Container>
    </Background>
  </div>

export default withTheme(LayoutScene)
