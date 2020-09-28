import loadPatternsActionType from './actionType'

const loadPatternsCreator = (patterns: object[]): loadPatternsActionType => ({
  type: 'LOAD_PATTERNS',
  payload: patterns
})

export default loadPatternsCreator
