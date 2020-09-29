import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../store'
import loadPatterns, { IPattern } from '../actions/loadPatterns'
import PatternBlock from './PatternBlock'

const PatternsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
`

interface IPatternsList {
  term?: string,
  isSearching?: boolean
}
const PatternsList: React.FC<IPatternsList> = ({ term, isSearching }) => {
  const dispatch = useDispatch()
  const patterns = useSelector((state: AppStateType) => state.patterns)
  const isLoading = useSelector((state: AppStateType) => state.isLoading)

  useEffect(() => {
    dispatch(loadPatterns(term, isSearching))
  }, [term, isSearching, dispatch])

  return (
    <PatternsListWrapper>
      {isLoading ? <div>loading</div> : patterns.map((pattern: IPattern) => <PatternBlock
        key={pattern.id}
        name={pattern.name}
        regExp={pattern.pattern}
      />)}
    </PatternsListWrapper>
  )
}

export default PatternsList
