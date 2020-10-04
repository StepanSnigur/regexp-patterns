import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import './App.css'

import Logo from './components/Logo'
import setPatternsTags from './actions/setPatternsTags'
import NavMenu from './components/NavMenu'
import PatternsList from './components/PatternsList'

const MainWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 0;
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
      <Logo />
      <NavMenu />
      <Switch>
        <Route path="/" exact component={() => <PatternsList term={''} />} />
        <Route
          path="/:tabName/:isSearching?"
          render={({ match }) => {
            const { tabName, isSearching } = match.params
            return <PatternsList term={tabName} isSearching={!!isSearching} />
          }}
        />
      </Switch>
    </MainWrapper>
  )
}

export default App;
