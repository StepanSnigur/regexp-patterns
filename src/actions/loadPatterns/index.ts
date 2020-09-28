import { Dispatch } from 'redux'
import { db } from '../../index'

import loadPatternsCreator from './actionCreator'
import loadPatternsActionType from './actionType'

import setErrorCreator from '../setError/actionCreator'
import setErrorActionType from '../setError/actionType'

export interface IPattern {
  pattern: string,
  name: string,
  id?: string,
  tags: string[]
}

const loadPatterns = (term?: string) => async (dispatch: Dispatch<loadPatternsActionType | setErrorActionType>) => {
  try {
    const patternsCollection = await db.collection('patterns').get()
    let patterns: IPattern[] = []
    patternsCollection.forEach(doc => {
      const pattern = doc.data() as IPattern
      pattern.id = doc.id
      patterns.push(pattern)
    })
    dispatch(loadPatternsCreator(patterns))
  } catch (e) {
    dispatch(setErrorCreator(e.message))
  }
}

export default loadPatterns
