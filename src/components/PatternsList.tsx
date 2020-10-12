import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../store'
import loadPatterns, { IPattern } from '../actions/loadPatterns'

import LoadingBoundary from './LoadingBoundary'
import PatternBlock from './PatternBlock'
import LoadingPatternBlock from './LoadingPatternBlock'

const PatternsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: auto;
  grid-gap: 5%;
  margin-top: 35px;
`

const MockPatternsList = () => {
  const MOCK_PATTERNS_COUNT = 6
  const mockPatternsArray = new Array(MOCK_PATTERNS_COUNT).fill(0)

  return mockPatternsArray.map((_, i) => <LoadingPatternBlock key={i} />)
}

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
      <LoadingBoundary isLoading={isLoading} preloadingComponent={MockPatternsList}>
        {patterns.length
          ? patterns.map((pattern: IPattern) => <PatternBlock
            key={pattern.id}
            name={pattern.name}
            regExp={pattern.pattern}
          />)
          : <div>Не найдено</div>}
      </LoadingBoundary>
    </PatternsListWrapper>
  )
}

export default PatternsList
