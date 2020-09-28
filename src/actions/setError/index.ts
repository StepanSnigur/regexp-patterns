import { Dispatch } from 'redux'
import setErrorActionType from './actionType'
import setErrorCreator from './actionCreator'

const setError = (msg: string) => (dispatch: Dispatch<setErrorActionType>) => {
  dispatch(setErrorCreator(msg))
}

export default setError
