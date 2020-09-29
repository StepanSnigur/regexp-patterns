import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import './App.css'

import setPatternsTags from './actions/setPatternsTags'
import loadPatterns from './actions/loadPatterns'
import NavMenu from './components/NavMenu'
import PatternsList from './components/PatternsList'

const MainWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 0
`

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.style.background = '#f3f3f7'
  }, [])
  useEffect(() => {
    dispatch(setPatternsTags())
  }, [dispatch])

  return (
    <MainWrapper>
      <NavMenu />
      <Switch>
        <Route path="/" exact component={PatternsList} />
        <Route
          path="/:tabName"
          render={({ match }) => {
            const { tabName } = match.params
            return <PatternsList term={tabName} />
          }}
        />
      </Switch>
    </MainWrapper>
  )
}

export default App;
