import { Dispatch } from 'redux'
import { db } from '../../index'

import setPatternsTagsCreator from './actionCreator'
import setPatternsTagsActionType from './actionType'

const setPatternsTags = () => async (dispatch: Dispatch<setPatternsTagsActionType>) => {
  const patternsTagsCollection = await db.collection('allTags').get()
  patternsTagsCollection.forEach(doc => {
    const { allTags } = doc.data()
    dispatch(setPatternsTagsCreator(allTags))
  })
}

export default setPatternsTags
