import setErrorActionType from './actionType'

const setErrorCreator = (msg: string): setErrorActionType => ({
  type: 'SET_ERROR',
  payload: msg
})

export default setErrorCreator
