import { Dispatch } from 'redux'
import { db } from '../../index'

import loadPatternsCreator from './actionCreator'
import loadPatternsActionType from './actionType'

import setErrorCreator from '../setError/actionCreator'
import setErrorActionType from '../setError/actionType'

import setLoading from '../setLoading'
import setLoadingActionType from '../setLoading/actionType'

export interface IPattern {
  pattern: string,
  name: string,
  id?: string,
  tags: string[]
}

const loadPatterns = (term?: string, isSearching?: boolean) => async (
  dispatch: Dispatch<loadPatternsActionType | setErrorActionType | setLoadingActionType>
) => {
  try {
    dispatch(setLoading())
    const patternsCollection = await db.collection('patterns').get()
    let patterns: IPattern[] = []
    patternsCollection.forEach(doc => {
      const pattern = doc.data() as IPattern
      pattern.id = doc.id

      if (isSearching) {
        pattern.name.toLowerCase().includes(term!.toLowerCase()) && patterns.push(pattern)
      } else {
        pattern.tags.includes(term!) && patterns.push(pattern)
      }
      if (!term) patterns.push(pattern)
    })
    dispatch(loadPatternsCreator(patterns))
  } catch (e) {
    dispatch(setErrorCreator(e.message))
  }
}

export default loadPatterns
