import setPatternsTagsActionType from './actionType'

const setPatternsTagsCreator = (tags: string[]): setPatternsTagsActionType => ({
  type: 'SET_PATTERNS_TAGS',
  payload: tags
})

export default setPatternsTagsCreator
