import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AppStateType } from '../store'
import { IPattern } from '../actions/loadPatterns'
import PatternBlock from './PatternBlock'

const PatternsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
`

const PatternsList = () => {
  const patterns = useSelector((state: AppStateType) => state.patterns)

  return (
    <PatternsListWrapper>
      {patterns.map((pattern: IPattern) => <PatternBlock
        key={pattern.id}
        name={pattern.name}
        regExp={pattern.pattern}
      />)}
    </PatternsListWrapper>
  )
}

export default PatternsList
