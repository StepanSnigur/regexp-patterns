import React, { useEffect } from 'react'
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

  // useEffect(() => {
  //   db.collection('patterns').get().then(data => {
  //     data.forEach(doc => {
  //       console.log(doc.data())
  //     })
  //   })
  // }, [])
  useEffect(() => {
    document.body.style.background = '#f3f3f7'
  }, [])
  useEffect(() => {
    dispatch(setPatternsTags())
    dispatch(loadPatterns())
  }, [dispatch])

  return (
    <MainWrapper>
      <NavMenu />
      <PatternsList />
    </MainWrapper>
  )
}

export default App;
